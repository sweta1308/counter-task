import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Counter, Home, Tictactoe } from 'pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
      </Routes>
    </div>
  )
}

export default App
