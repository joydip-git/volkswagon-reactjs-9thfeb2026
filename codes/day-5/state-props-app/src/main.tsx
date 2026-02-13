//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const placeholder = document.getElementById('root') as HTMLElement
const root = createRoot(placeholder)
root.render(
  //<StrictMode>
  <App />
  //</StrictMode>,
)
