import React from 'react'
import { render, screen } from '@testing-library/react'
import App from 'core/App'

test('Render App without crash', () => {
  render(<App />)
  const element = screen.getByText(/dashboard/i)
  expect(element).toBeInTheDocument()
})
