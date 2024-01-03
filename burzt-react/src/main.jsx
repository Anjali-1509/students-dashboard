import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StudentsContextProvider } from './providers/StudentsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentsContextProvider>
        <App />
      </StudentsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
