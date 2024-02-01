import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  const getClassName = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'active-link' : ''
  }
  return (
    <nav>
      <a className={`link ${getClassName}`} href="/">
        Home
      </a>
      <a className={`link ${getClassName}`} href="/counter">
        Counter
      </a>
      <a className={`link ${getClassName}`} href="/tictactoe">
        Tic Tac Toe
      </a>
    </nav>
  )
}
