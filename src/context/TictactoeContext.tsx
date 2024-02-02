import React, { createContext, useContext, useState } from 'react'
import {
  TictactoeProps,
  TictactoeProviderProps,
} from './TictactoeContext.types'
import { findWinner } from 'utils/TicTacToe'

const TictactoeContext = createContext<TictactoeProps>(undefined!)

export const TictactoeProvider: React.FC<TictactoeProviderProps> = ({
  children,
}) => {
  const [boardValues, setBoardValues] = useState<string[]>(Array(9).fill(''))
  const [isXNext, setIsXNext] = useState<boolean>(true)
  let message: string
  const winner = findWinner(boardValues)

  const handleCellClick = (i: number) => {
    if (winner || boardValues[i]) return
    const sqaures = boardValues.slice()
    if (isXNext) {
      sqaures[i] = 'X'
    } else {
      sqaures[i] = 'O'
    }
    setBoardValues(sqaures)
    setIsXNext((prev) => !prev)
  }

  const handleResetClick = () => {
    setBoardValues(Array(9).fill(''))
    setIsXNext(true)
    message = "X's turn"
  }

  if (winner) {
    message = `${winner} is winner! `
  } else if (!boardValues.includes('')) {
    message = `It's a tie.`
  } else {
    message = `${isXNext ? 'X' : 'O'}'s turn`
  }

  return (
    <TictactoeContext.Provider
      value={{ boardValues, message, handleCellClick, handleResetClick }}
    >
      {children}
    </TictactoeContext.Provider>
  )
}

export const useTictactoe = () => useContext(TictactoeContext)
