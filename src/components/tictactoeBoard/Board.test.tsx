import React from 'react'
import { render, screen } from '@testing-library/react'
import Board from './Board'
import { useTictactoe } from 'context/TictactoeContext'
import { BrowserRouter } from 'react-router-dom'

jest.mock('context/TictactoeContext', () => ({
  ...jest.requireActual('context/TictactoeContext'),
  useTictactoe: jest.fn(),
}))

describe('Board component', () => {
  test('renders Board component with initial values', () => {
    (useTictactoe as jest.Mock).mockReturnValue({
      boardValues: ['', '', '', '', '', '', '', '', ''],
      message: "X's turn",
      handleCellClick: jest.fn(),
      handleResetClick: jest.fn(),
    })
    render(
      <BrowserRouter>
        <Board />
      </BrowserRouter>,
    )

    const element = screen.getByTestId('0')

    expect(element).toBeInTheDocument()
  })

  test('getSquares renders the component', () => {
    (useTictactoe as jest.Mock).mockReturnValue({
      boardValues: ['X', 'O', 'X', '', '', '', 'O', '', 'X'],
      message: "X's turn",
      handleCellClick: jest.fn(),
      handleResetClick: jest.fn(),
    })

    const { getByTestId } = render(<Board />)

    const cell0 = getByTestId(0)
    const cell6 = getByTestId(6)

    expect(cell0).toHaveTextContent('X')
    expect(cell6).toHaveTextContent('O')
  })
})
