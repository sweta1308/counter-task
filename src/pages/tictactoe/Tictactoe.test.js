import { render, screen, fireEvent } from '@testing-library/react'
import Tictactoe from './Tictactoe'
import { TictactoeProvider } from 'context/TictactoeContext'

jest.mock('../../context/TictactoeContext', () => ({
  useTictactoe: jest.fn(),
}))

const mockContextValue = {
  message: 'Test',
  handleResetClick: jest.fn(),
}

describe('Tictactoe Component', () => {
  it('component render', () => {
    render(
      <TictactoeProvider>
        <Tictactoe />
      </TictactoeProvider>,
    )

    expect(screen.getByText('Tic tac toe')).toBeInTheDocument()
    expect(screen.getByText('Test')).toBeInTheDocument()
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
