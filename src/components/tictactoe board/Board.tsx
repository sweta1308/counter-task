import React from 'react'
import './Board.css'
import { useTictactoe } from 'context/TictactoeContext'

const Board = () => {
  const { boardValues, handleBoardClick } = useTictactoe()
  const getSquares = (i: number) => (
    <div className="cell" data-id={i}>
      {boardValues[i]}
    </div>
  )
  return (
    <div className="board" onClick={(e) => handleBoardClick(e)}>
      <div>
        {getSquares(0)}
        {getSquares(3)}
        {getSquares(6)}
      </div>
      <div>
        {getSquares(1)}
        {getSquares(4)}
        {getSquares(7)}
      </div>
      <div>
        {getSquares(2)}
        {getSquares(5)}
        {getSquares(8)}
      </div>
    </div>
  )
}

export default Board
