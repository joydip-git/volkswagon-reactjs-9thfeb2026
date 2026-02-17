import { createContext } from "react";

// const CounterContext = createContext<number>(0)

export type CounterContextType = {
    counter: number,
    handler: () => void
}
const CounterContext = createContext<CounterContextType>({
    counter: 0,
    handler: () => { }
})
export default CounterContext