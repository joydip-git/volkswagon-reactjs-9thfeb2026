import { Fragment, useState } from 'react'
import './App.css'
import Panel from './Panel'
import CounterContext, { type CounterContextType } from './counter-context'
import Outsider from './Outsider'

function App() {
  const [count, setCount] = useState(10)
  const { Provider } = CounterContext


  // return (
  //   <CounterContext.Provider value={count }>
  //     <div>
  //       <Panel />
  //     </div>
  //   </CounterContext.Provider>
  // )

  const contextData: CounterContextType = {
    counter: count,
    handler: () => setCount(old => old + 1)
  }
  //Fragment: Lets you group adjacent elements without a wrapper node, such as an extra JSX element div, p, etc.
  return (
    <Fragment>
      <Provider value={contextData}>
        <div>
          {/* <button type='button' onClick={() => setCount(old => old + 1)}>Increase</button>
        <br /> */}
          <Panel />
        </div>
      </Provider>
      <br />
      <Outsider />
    </Fragment>
  )
}

export default App
