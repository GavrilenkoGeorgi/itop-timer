import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders timer', () => {
	render(<App />)
	const linkElement = screen.getByText(/00:00:00/i)
	expect(linkElement).toBeInTheDocument()
})
