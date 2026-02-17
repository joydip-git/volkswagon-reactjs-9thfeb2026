import { useEffect } from "react"

type CounterPropType = {
  counter: number,
  handler: () => void
}
const Counter = (props: Readonly<CounterPropType>) => {
  const { counter, handler } = props

  //1. 
  useEffect(
    () => {
      console.log('CC effect: will be executed always');
    }
  )

  //2.
  useEffect(
    () => {
      console.log('CC effect: will be executed the very first time [mounted] and after that only when the counter value changes [updated]');
    }, [counter]
  )

  //3.
  useEffect(
    () => {
      console.log('CC effect: will be executed ONLY ONE TIME and thats when CC is mounted [the very first time]');
    }, []
  )

  console.log('rendering CC');
  return (
    <div>
      <h4>Counter Component</h4>
      <br />
      Counter: &nbsp;{counter}
      <br />
      <button type="button" onClick={handler}>Increase</button>
    </div>
  )
}

export default Counter