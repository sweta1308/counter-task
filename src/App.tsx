import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Counter, Home, Tictactoe } from './pages/index'
import { TicTacToeOutlet } from 'components/TicTacToeOutlet'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route element={<TicTacToeOutlet />}>
          <Route path="/tictactoe" element={<Tictactoe />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
