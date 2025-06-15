import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Maincontext from './Context/Maincontext.jsx'

createRoot(document.getElementById('root')).render(
  <Maincontext >
    <BrowserRouter >
        <App />
    </BrowserRouter>
  </Maincontext>
)
