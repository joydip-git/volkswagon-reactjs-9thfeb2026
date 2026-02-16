import { useState } from "react"
import type { Product } from "../../../models/product"
import { productRecords } from "../../../repository/products"
import "./ProductList.css";
import ProductRow from "../product-row/ProductRow";

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>(productRecords)
    const design = (
        <div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
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