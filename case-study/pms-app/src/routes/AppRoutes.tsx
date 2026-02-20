import { lazy } from "react"
import { useRoutes, type RouteObject } from "react-router-dom"
//import {  Route, Routes} from "react-router-dom";
// import ProductList from "../components/products/product-list/ProductList"
// import AddProduct from "../components/products/add-product/AddProduct"
// import ProductDetail from "../components/products/product-detail/ProductDetail"
// import UpdateProduct from "../components/products/update-product/UpdateProduct"
// import Home from "../components/common/home/Home"
// import PageNotFound from "../components/common/page-not-found/PageNotFound"

//lazy => Lets you defer loading a component’s code until it is rendered for the first time.
const ProductList = lazy(() => import("../components/products/product-list/ProductList"))
const ProductDetail = lazy(() => import("../components/products/product-detail/ProductDetail"))
const AddProduct = lazy(() => import("../components/products/add-product/AddProduct"))
const UpdateProduct = lazy(() => import("../components/products/update-product/UpdateProduct"))
const Home = lazy(() => import("../components/common/home/Home"))
const PageNotFound = lazy(() => import("../components/common/page-not-found/PageNotFound"))

const AppRoutes = () => {
    // return (
    //     <Routes>
    //         <Route path="products">
    //             <Route path="" element={<ProductList />} />
    //             <Route path="add" element={<AddProduct />} />
    //             <Route path="view/:id" element={<ProductDetail />} />
    //             {/* <Route path="edit/:id" element={<UpdateProduct />} /> */}
    //             <Route path="edit" element={<UpdateProduct />} />
    //         </Route>
    //         <Route path="home" element={<Home />} />
    //         <Route path="" element={<Home />} />
    //         <Route path="*" element={<PageNotFound />} />
    //     </Routes>
    // )

    const productRoutes: RouteObject = {
        path: 'products',
        children: [
            {
                path: '', element: <ProductList />
            },
            {
                path: 'view/:id', element: <ProductDetail />
            },
            {
                path: 'add', element: <AddProduct />
            },
            {
                path: 'edit', element: <UpdateProduct />
            }
        ]
    }

    const commonRoutes: RouteObject = {
        path: '',
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: 'home', element: <Home />
            },
            {
                path: '*', element: <PageNotFound />
            }
        ]
    }

    return useRoutes([productRoutes, commonRoutes])
}

export default AppRoutes

/** {id:'100', x:'abcd'} */