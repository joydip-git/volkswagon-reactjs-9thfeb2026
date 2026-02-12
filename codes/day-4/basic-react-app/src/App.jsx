//import { createElement } from "react";
//import { createElement } from "react"

//<h2> </h2>
//export function Header(){}
//<Header />
export default function App() {
  const title = 'Welcome to React JS'
  const divHandler = () => window.alert('hello')

  //non-JSX syntax
  // const div = createElement(
  //   'div',
  //   { onMouseOver: divHandler },
  //   [title]
  // )
  //const p = createElement('p')
  //<div onmouseover="divHandler()">Welcome to React JS</div>

  //JSX (JavaScript and XML) or pseudo HTML
  //creating a JSX div element which will be converted to JavaScript based code and into a DetailedReactElement (during transpilation)
  const div = (
    <div>      
      <div onMouseOver={divHandler}>
        {title}
      </div>
      <p>
        this is para
      </p>
    </div>
  )

  // createElement(
  //   'div',
  //   {},
  //   [
  //     createElement('div', {}, [title]),
  //     createElement('p', {}, ['this is para'])
  //   ]
  // )
  return div
}