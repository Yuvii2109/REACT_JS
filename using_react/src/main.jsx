import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)

// <React.StrictMode> ise use krne ka side effect aa rha h ki double double print kr rha hai cheezain console main