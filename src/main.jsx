import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddCartProvider from './context/AddCart.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddCartProvider>
      <App />
    </AddCartProvider>
  </StrictMode>,
)
