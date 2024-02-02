import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BrowserRouter } from 'react-router-dom'

test('renders Navbar component', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  )
  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('Counter')).toBeInTheDocument()
  expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument()
})
