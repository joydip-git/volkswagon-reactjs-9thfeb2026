//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './lux-theme.min.css'
import App from './components/app/App.tsx'
import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)