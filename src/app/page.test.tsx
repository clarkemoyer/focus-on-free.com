import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('coming soon page', () => {
  it('renders the site identity', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Focus on Free/i })).toBeInTheDocument()
    expect(screen.getByText('focus-on-free.com')).toBeInTheDocument()
  })
})
