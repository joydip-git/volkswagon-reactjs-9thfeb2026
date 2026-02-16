import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Person from './Person'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('enter name here')

  const countHandler = () => {
    setCount(
      (currentCount) => currentCount + 1
    )
  }

  const nameHandler = (newName: string) => setName(newName)
  return (
    <div>
      <Counter counter={count} handler={countHandler} />
      <br />
      <br />
      <Person personName={name} handler={nameHandler} />
    </div>
  )
}

export default App
