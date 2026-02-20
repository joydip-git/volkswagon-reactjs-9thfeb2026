import { useState } from 'react'
import PhotoList from '../photos/photo-list/PhotoList'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  const showHandler = () => {
    setShow(
      (currentShowValue) => !currentShowValue
    )
  }
  return (
    <div>
      <button type="button" onClick={showHandler}>{show ? 'Hide' : 'Show'}</button>
      {
        show && <PhotoList />
      }
    </div>
  )
}

export default App
