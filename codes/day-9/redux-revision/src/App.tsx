import './App.css'
import { decreaseActionCreator, increaseActionCreator } from './redux/counterslice'
import { useTypedDispatch, useTypedSelector } from './redux/typedhooks'

const App = () => {
  const { counter } = useTypedSelector((map) => map.counterState)
  const dispatch = useTypedDispatch()

  const increaseHandler = () => {
    const action = increaseActionCreator(2)
    dispatch(action)
  }
  const decreaseHandler = () => {
    const action = decreaseActionCreator(1)
    dispatch(action)
  }
  return (
    <div>
      <span>Counter:&nbsp;{counter}</span>
      <br />
      <button type="button" onClick={increaseHandler}>Increase</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button type="button" onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}

export default App