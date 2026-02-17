import { useContext } from "react"
import CounterContext from "./counter-context"

const Outsider = () => {

    //gets initial data, not the updated data any further since this is outside the DOM tree which is under the scope of Context Provider
    const { counter } = useContext(CounterContext)
    return (
        <div>
            <br />
            Outsider;
            <br />
            Counter: &nbsp;{counter}
        </div>
    )
}

export default Outsider