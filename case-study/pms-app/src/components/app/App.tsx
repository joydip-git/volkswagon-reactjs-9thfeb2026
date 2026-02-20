// import ProductList from '../products/product-list/ProductList'
//import './App.css'

import { lazy, useState } from "react"
import AppRoutes from "../../routes/AppRoutes"
import DashBoard from "../common/dash-board/DashBoard"

const Sample = lazy(() => import('./Sample'))

function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <DashBoard />
      <br />
      <button type="button" onClick={() => setToggle(old => !old)}>
        {toggle ? 'Hide' : 'show'}
      </button>
      <br />
      {toggle && <Sample />}
      <br />
      <div className="container">
        <AppRoutes />
      </div>
    </>
  )
}

export default App
