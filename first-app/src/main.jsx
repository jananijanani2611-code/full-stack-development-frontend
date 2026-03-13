import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './i//ndex.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
