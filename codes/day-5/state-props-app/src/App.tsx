import { useState } from "react";

const App = function () {
  console.log('rendered');

  //let title = 'Welcome to React JS Component'
  // const arr = useState('Welcome to React JS Component')
  // const title = arr[0]
  // const setTitle = arr[1] 
  const [title, setTitle] = useState<string>('Welcome to React JS Component')
  console.log(title);
  
  const divClickHandler = () => {
    console.log(title);
    // title = 'VDOM'
    //setTitle('Welcome to State...')
    setTitle(
      (currentState) => {
        return currentState.concat(' and State...')
      }
    )
    console.log(title);
  }

  return (
    <div onClick={divClickHandler}>
      <p>
        {title}
      </p>
    </div>
  )
}

export default App