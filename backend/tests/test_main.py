"""Tests for the main FastAPI application."""

from fastapi.testclient import TestClient

from src.main import app

client = TestClient(app)


def test_root_endpoint() -> None:
    """Test the root endpoint."""
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Service Template API"}


def test_health_check() -> None:
    """Test the health check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200

    data = response.json()
    assert data["status"] == "healthy"
    assert data["version"] == "0.1.0"
    assert "timestamp" in data
    assert "environment" in data


def test_health_check_response_format() -> None:
    """Test that health check returns the correct response format."""
    response = client.get("/health")
    assert response.status_code == 200

    data = response.json()
    required_fields = ["status", "timestamp", "version", "environment"]

    for field in required_fields:
        assert field in data
        assert data[field] is not None
