import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <a className="home-btn" href="/counter">
        Go to Counter
      </a>
      <a className="home-btn" href="/tictactoe">
        Go to Tic Tac Toe
      </a>
    </div>
  )
}

export default Home
