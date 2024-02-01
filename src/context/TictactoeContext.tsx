import React, { createContext, useContext, useState } from 'react'
import {
  TictactoeProps,
  TictactoeProviderProps,
} from './TictactoeContext.types'
import { findWinner } from 'utils/findWinner'

const TictactoeContext = createContext<TictactoeProps>(undefined!)

export const TictactoeProvider: React.FC<TictactoeProviderProps> = ({
  children,
}) => {
  const [boardValues, setBoardValues] = useState<string[]>(Array(9).fill(''))
  const [isXNext, setIsXNext] = useState<boolean>(true)
  let message: string
  const winner = findWinner(boardValues)

  const handleBoardClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLElement
    const squareClicked = Number(target.dataset.id)
    if (winner || boardValues[squareClicked]) return
    const sqaures = boardValues.slice()
    if (isXNext) {
      sqaures[squareClicked] = 'X'
    } else {
      sqaures[squareClicked] = 'O'
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
      value={{ boardValues, message, handleBoardClick, handleResetClick }}
    >
      {children}
    </TictactoeContext.Provider>
  )
}

export const useTictactoe = () => useContext(TictactoeContext)
