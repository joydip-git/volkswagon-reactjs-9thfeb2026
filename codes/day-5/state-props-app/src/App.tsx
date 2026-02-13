import { useState, type InputEvent } from "react";

const App = function () {
  console.log('rendered');

  const [title, setTitle] = useState<string>('Welcome to React JS Component')

  // const titleHandler = (e: InputEvent) => {
  //   const inputElement = e.target as HTMLInputElement
  //   setTitle(
  //     (currentState) => {
  //       return currentState.concat(' ' + inputElement.value)
  //     }
  //   )
  // }

  const titleHandler = (newTitle: string) => {
    // setTitle(
    //   (currentState) => {
    //     return currentState.concat(' ' + newTitle)
    //   }
    // )
    setTitle(newTitle)
  }

  return (
    <div>
      <div>
        <label htmlFor="txtTitle">Title: &nbsp;</label>
        <input type="text" id="txtTitle" value={title}
          onInput={
            (e) => {
              const inputElement = e.target as HTMLInputElement
              titleHandler(inputElement.value)
            }
          } />
      </div>
      <p>
        Title:&nbsp;{title}
      </p>
    </div>
  )
}

export default App