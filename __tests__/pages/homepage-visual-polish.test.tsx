import { render, screen, within } from '@testing-library/react'
import Home from '@/app/page'

describe('Focus on Free homepage visual polish', () => {
  it('renders every service card with image, description, and specific CTA', () => {
    render(<Home />)

    const expectedCards = [
      ['Technology Consulting', 'Review Technology Stack'],
      ['Location Management', 'Improve Local Presence'],
      ['Reputation Management', 'Protect Your Reputation'],
      ['Social Media Management', 'Plan Social Outreach'],
    ]

    for (const [heading, cta] of expectedCards) {
      const card = screen.getByRole('article', { name: heading })
      expect(within(card).getByRole('img', { name: heading })).toBeInTheDocument()
      expect(
        within(card).getAllByText(/independent|local|reputation|social/i).length
      ).toBeGreaterThan(0)
      expect(within(card).getByRole('link', { name: cta })).toBeInTheDocument()
    }
  })

  it('replaces the old empty appointment area with a clear contact card', () => {
    render(<Home />)

    expect(screen.getByText(/Tell us what you need help with/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Email Focus on Free/i })).toHaveAttribute(
      'href',
      'mailto:info@focus-on-free.com'
    )
    expect(screen.queryByTitle(/appointment/i)).not.toBeInTheDocument()
  })
})
