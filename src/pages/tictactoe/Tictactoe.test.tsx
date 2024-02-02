import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Tictactoe from './Tictactoe'
import { TictactoeProvider, useTictactoe } from 'context/TictactoeContext'
import { BrowserRouter } from 'react-router-dom'

jest.mock('context/TictactoeContext', () => ({
  ...jest.requireActual('context/TictactoeContext'),
  useTictactoe: jest.fn(),
}))

describe('Tictactoe Component', () => {
  it('component render', () => {
    ;(useTictactoe as jest.Mock).mockReturnValue({
      boardValues: ['', '', '', '', '', '', '', '', ''],
      message: "X's turn",
      handleBoardClick: jest.fn(),
      handleResetClick: jest.fn(),
    })
    render(
      <BrowserRouter>
        <TictactoeProvider>
          <Tictactoe />
        </TictactoeProvider>
      </BrowserRouter>,
    )

    expect(screen.getByText('Tic tac toe')).toBeInTheDocument()
    expect(screen.getByText(`X's turn`)).toBeInTheDocument()
  })

  it('calls handleResetClick when Reset button is clicked', async () => {
    (useTictactoe as jest.Mock).mockReturnValue({
      boardValues: ['X', 'O', '', 'X', '', '', 'O', 'X', ''],
      message: "X's turn",
      handleBoardClick: jest.fn(),
      handleResetClick: jest.fn(),
    })
    render(
      <BrowserRouter>
        <TictactoeProvider>
          <Tictactoe />
        </TictactoeProvider>
      </BrowserRouter>,
    )

    expect(screen.getByText('Reset')).toBeInTheDocument()

    act(() => {
      fireEvent.click(screen.getByText('Reset'))
    })

    const { handleResetClick } = useTictactoe()
    expect(handleResetClick).toHaveBeenCalled()
  })
})
