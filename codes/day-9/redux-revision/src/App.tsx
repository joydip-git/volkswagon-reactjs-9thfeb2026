import './App.css'
import CounterManipulator from './CounterManipulator'
import NameManipulator from './NameManipulator'
import { useTypedSelector } from './redux/typedhooks'


const App = () => {
  const { name } = useTypedSelector(map => map.nameState)
  return (
    <>
      Name in App: &nbsp;{name}
      <br />
      <NameManipulator />
      <br />
      <CounterManipulator />
    </>
  )
}

export default App