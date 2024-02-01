import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // for additional matchers
import Tictactoe from './Tictactoe'
import { TictactoeProvider } from 'context/TictactoeContext'

// Mock the context to provide the required values
jest.mock('context/TictactoeContext', () => ({
  useTictactoe: jest.fn(),
}))

// Mock the context values
const mockContextValue = {
  message: 'Test Message',
  handleResetClick: jest.fn(),
}

describe('Tictactoe Component', () => {
  it('renders Tictactoe component with the correct message', () => {
    render(
      <TictactoeProvider>
        <Tictactoe />
      </TictactoeProvider>,
    )

    expect(screen.getByText('Tic tac toe')).toBeInTheDocument()
    expect(screen.getByText('Test Message')).toBeInTheDocument()
  })

  it('calls handleResetClick when Reset button is clicked', () => {
    render(
      <TictactoeProvider>
        <Tictactoe />
      </TictactoeProvider>,
    )

    fireEvent.click(screen.getByText('Reset'))

    expect(mockContextValue.handleResetClick).toHaveBeenCalled()
  })
})
