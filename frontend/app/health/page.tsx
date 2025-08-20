import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Health Check - Service Template",
  description: "Health status of the service template",
}

async function getHealthStatus() {
  try {
    // In a real app, you'd call your backend health endpoint
    // const response = await fetch(`${process.env.API_URL}/health`)
    // return await response.json()
    
    return {
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: "0.1.0",
      services: {
        frontend: "healthy",
        backend: "unknown", // Will be "healthy" when backend is running
        database: "unknown", // Will be "healthy" when connected to Supabase
      }
    }
  } catch (error) {
    return {
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error"
    }
  }
}

export default async function HealthPage() {
  const health = await getHealthStatus()
  
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Service Health Check</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className={`w-4 h-4 rounded-full mr-3 ${
              health.status === "healthy" ? "bg-green-500" : "bg-red-500"
            }`}></div>
            <h2 className="text-xl font-semibold">
              Overall Status: {health.status}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Timestamp:</strong> {health.timestamp}
            </div>
            <div>
              <strong>Version:</strong> {health.version}
            </div>
          </div>
        </div>

        {health.services && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Service Status</h3>
            <div className="space-y-3">
              {Object.entries(health.services).map(([service, status]) => (
                <div key={service} className="flex items-center justify-between">
                  <span className="capitalize">{service}</span>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${
                      status === "healthy" ? "bg-green-500" : 
                      status === "unknown" ? "bg-yellow-500" : "bg-red-500"
                    }`}></div>
                    <span className="text-sm capitalize">{status as string}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {health.error && (
          <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg p-4 mt-6">
            <h3 className="text-red-800 dark:text-red-200 font-semibold mb-2">Error Details</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">{health.error}</p>
          </div>
        )}

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}