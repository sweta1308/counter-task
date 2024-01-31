import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  const getStyle = ({
    isActive,
  }: {
    isActive: boolean
  }): {
    color: string
    textDecoration: string
  } => ({
    color: isActive ? 'rgb(45, 125, 246)' : '',
    textDecoration: isActive ? 'underline' : '',
  })
  return (
    <nav>
      <NavLink style={getStyle} className="link" to="/">
        Home
      </NavLink>
      <NavLink style={getStyle} className="link" to="/counter">
        Counter
      </NavLink>
      <NavLink style={getStyle} className="link" to="/tictactoe">
        Tic Tac Toe
      </NavLink>
    </nav>
  )
}
