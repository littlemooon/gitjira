import { render } from 'ink-testing-library'
import React from 'react'
import App from '../src/App'

test('renders', () => {
  const a = render(<App />)
  expect(a.lastFrame().includes('Create a new feature branch')).toBe(true)
})
