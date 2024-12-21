import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './counter.jsx'
import Api from './Api.jsx'
import Rerender from './rerender.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <Api />
    <Rerender />
  </StrictMode>,
)
