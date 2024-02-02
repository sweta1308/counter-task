import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('home component render', () => {
  render(<Home />)

  expect(screen.getByText('Go to Counter')).toBeInTheDocument()
  expect(screen.getByText('Go to Tic Tac Toe')).toBeInTheDocument()
})
