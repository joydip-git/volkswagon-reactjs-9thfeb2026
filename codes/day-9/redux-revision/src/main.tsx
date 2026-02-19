import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import AppReduxStore from './redux/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={AppReduxStore}>
    <App />
  </Provider>
)