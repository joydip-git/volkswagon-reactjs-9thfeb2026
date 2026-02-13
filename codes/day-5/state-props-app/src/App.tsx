import { useState, type InputEvent } from "react";
import Title from "./Title";
import Display from "./Display";

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

  // const titleElement = Title({titleValue:title, handler:titleHandler})
  return (
    <div>
      <Title titleValue={title} handler={titleHandler} />
      {
        /* titleElement*/
      }
      <br />
      <Display titleData={title} />
    </div>
  )
}

export default App

/**
 * { titleValue:, handler:}
 */