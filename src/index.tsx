import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { TictactoeProvider } from 'context/TictactoeContext'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TictactoeProvider>
        <App />
      </TictactoeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
