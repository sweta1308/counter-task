import React from 'react'
import { Board, Navbar } from '../../components'
import './Tictactoe.css'
import { useTictactoe } from 'context/TictactoeContext'

const Tictactoe = () => {
  const { message, handleResetClick } = useTictactoe()
  return (
    <>
      <Navbar />
      <div className="tictactoe">
        <h1>Tic tac toe</h1>
        <Board />
        <h2>{message}</h2>
        <button className="reset-btn" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </>
  )
}

export default Tictactoe
