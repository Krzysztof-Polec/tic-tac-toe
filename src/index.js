import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './components/board/board.js'
import "./sass/globalStyles.scss"

const app = ReactDOM.createRoot(document.getElementById('app'))
app.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
)