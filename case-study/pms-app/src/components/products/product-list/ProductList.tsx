import { useEffect, useState } from "react"
import type { Product } from "../../../models/product"
//import { productRecords } from "../../../repository/products"
import "./ProductList.css";
import ProductRow from "../product-row/ProductRow";
import { getProducts } from "../../../services/product-service";
import type { AxiosResponse } from "axios";
import type { ApiResponse } from "../../../models/api-response";

const ProductList = () => {
    //const [products, setProducts] = useState<Product[]>(productRecords)

    const [products, setProducts] = useState<Product[]>([])
    const [errorInfo, setErrorInfo] = useState('')
    const [requestOver, setRequestOver] = useState(false)

    const fetchProducts = async () => {
        try {
            const response: AxiosResponse<ApiResponse<Product[]>> = await getProducts()
            const apiResponse = response.data
            if (response.status === 200 && apiResponse.data !== null) {
                setErrorInfo('')
                setProducts(apiResponse.data)
                setRequestOver(true)
            } else {
                setErrorInfo(apiResponse.message)
                setProducts([])
                setRequestOver(true)
            }
        } catch {
            setErrorInfo('error occurred')
            setProducts([])
            setRequestOver(true)
        }
    }

    useEffect(
        () => {
            const fetch = async () => { fetchProducts() }
            fetch()
        }, []
    )

    let design;
    if (!requestOver)
        design = <span>Loading...please wait</span>
    else if (errorInfo !== '')
        design = <span>{errorInfo}</span>
    else if (products.length === 0)
        design = <span> No product Records found...</span>
    else
        design = (
            <div>
                <h2 className="text-muted">List of Products</h2>
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-dark">
                        {
                            products
                                .map(
                                    (p) => {
                                        return (
                                            <ProductRow product={p} key={p.productId} />
                                        )
                                    }
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    return design
}

export default ProductList