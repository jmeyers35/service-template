import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /service template/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<Home />)
    
    const welcomeHeading = screen.getByRole('heading', {
      name: /welcome/i,
    })

    expect(welcomeHeading).toBeInTheDocument()
  })

  it('renders the health check link', () => {
    render(<Home />)
    
    const healthLink = screen.getByRole('link', {
      name: /health check/i,
    })

    expect(healthLink).toBeInTheDocument()
    expect(healthLink).toHaveAttribute('href', '/health')
  })
})