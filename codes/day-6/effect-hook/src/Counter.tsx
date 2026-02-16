type CounterPropType = {
  counter: number,
  handler: () => void
}
const Counter = (props: Readonly<CounterPropType>) => {
  const { counter, handler } = props
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