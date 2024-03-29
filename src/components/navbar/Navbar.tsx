import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation()

  return (
    <nav>
      <Link
        className={`link ${location.pathname === '/' ? 'active-link' : ''}`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`link ${location.pathname === '/counter' ? 'active-link' : ''}`}
        to="/counter"
      >
        Counter
      </Link>
      <Link
        className={`link ${location.pathname === '/tictactoe' ? 'active-link' : ''}`}
        to="/tictactoe"
      >
        Tic Tac Toe
      </Link>
    </nav>
  )
}
