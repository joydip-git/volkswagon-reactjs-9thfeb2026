import { useState } from "react"

const App = () => {
  const [names, setNames] = useState<string[]>(['anil', 'sunil', 'joydip', 'ranju'])

  const namesHandler = (index: number) => {
    setNames(
      (currentNames) => {
        const copy = [...currentNames];
        copy.splice(index, 1)
        return copy
      }
    )
  }
  return (
    <div>
      List of Names:
      <br />
      <ul>
        {
          names.map(
            (name, i) => {
              return (
                <li key={i}>
                  <span>{name}</span>
                  &nbsp;
                  <button
                    type="button"
                    onClick={
                      () => namesHandler(i)}>
                    Delete
                  </button>
                </li>
              )
            }
          )
        }
      </ul>
    </div>
  )
}

export default App