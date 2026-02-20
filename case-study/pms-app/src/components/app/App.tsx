// import ProductList from '../products/product-list/ProductList'
//import './App.css'

import AppRoutes from "../../routes/AppRoutes"
import DashBoard from "../common/dash-board/DashBoard"

function App() {

  return (
    <>
      <DashBoard />
      <br />
      <div className="container">
        <AppRoutes />
      </div>
    </>
  )
}

export default App
