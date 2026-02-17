import { useContext } from "react"
import CounterContext from "./counter-context"

const Counter = () => {
    const { counter, handler } = useContext(CounterContext)
    return (
        <div>
            <br />
            In Counter;
            <br />
            Counter Value: &nbsp;{counter}
            <br />
            <button type='button' onClick={handler}>Increase</button>
            <br />
        </div>
    )
}

export default Counter