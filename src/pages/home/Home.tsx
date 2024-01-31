import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home">
      <button className="home-btn" onClick={() => navigate('/counter')}>
        Go to Counter
      </button>
      <button className="home-btn" onClick={() => navigate('/tictactoe')}>
        Go to Tic Tac Toe
      </button>
    </div>
  )
}

export default Home
