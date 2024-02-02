import React from 'react'
import { render, screen } from '@testing-library/react'
import Board from './Board'
import { useTictactoe } from 'context/TictactoeContext'
import { BrowserRouter } from 'react-router-dom'

jest.mock('context/TictactoeContext', () => ({
  ...jest.requireActual('context/TictactoeContext'),
  useTictactoe: jest.fn(),
}))

test('renders Board component with initial values', () => {
  (useTictactoe as jest.Mock).mockReturnValue({
    boardValues: ['', '', '', '', '', '', '', '', ''],
    message: "X's turn",
    handleBoardClick: jest.fn(),
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
