import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar component', () => {
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

  test('renders Navbar component correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    const home = screen.getByText('Home')
    expect(home).toBeInTheDocument()
    expect(home).toHaveAttribute('href', '/')

    const counter = screen.getByText('Counter')
    expect(counter).toBeInTheDocument()
    expect(counter).toHaveAttribute('href', '/counter')

    const tictactoe = screen.getByText('Tic Tac Toe')
    expect(tictactoe).toBeInTheDocument()
    expect(tictactoe).toHaveAttribute('href', '/tictactoe')
  })

  test('activates the correct link based on the current location', () => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/tictactoe',
      },
    })

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    const tictactoe = screen.getByText('Tic Tac Toe')
    expect(tictactoe).toHaveClass('active-link')
    const home = screen.getByText('Home')
    expect(home).not.toHaveClass('active-link')
    const counter = screen.getByText('Counter')
    expect(counter).not.toHaveClass('active-link')
  })
})
