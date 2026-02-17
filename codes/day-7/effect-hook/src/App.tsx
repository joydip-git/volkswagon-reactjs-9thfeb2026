import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Person from './Person'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('enter name here')
  const [show, setShow] = useState(true)

  const countHandler = () => {
    setCount(
      (currentCount) => currentCount + 1
    )
  }

  const nameHandler = (newName: string) => setName(newName)

  const showHandler = () => {
    setShow(
      currentShow => !currentShow
    )
  }

  return (
    <div>
      <button type='button' onClick={showHandler}>{show ? 'Hide' : 'Show'}</button>
      <br />
      {
        show && <Counter counter={count} handler={countHandler} />
      }
      <br />
      <br />
      <span>App: &nbsp; {name}</span>
      <br />
      <Person personName={name} handler={nameHandler} />
    </div>
  )
}

export default App
