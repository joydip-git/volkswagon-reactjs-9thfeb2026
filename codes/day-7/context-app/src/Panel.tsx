import { useContext, useState } from "react"
import Counter from "./Counter"
import type { CounterContextType } from "./counter-context"
import CounterContext from "./counter-context"

const Panel = () => {
    const [count, setCount] = useState(100)
    const contextData: CounterContextType = {
        counter: count,
        handler: () => setCount(old => old + 1)
    }

    const { counter } = useContext(CounterContext)
    return (
        <CounterContext.Provider value={contextData}>
            <div>
                In Pannel;
                <br />
                From App got: &nbsp;{counter}
                <br />
                <Counter />
            </div>
        </CounterContext.Provider>
    )
}

export default Panel