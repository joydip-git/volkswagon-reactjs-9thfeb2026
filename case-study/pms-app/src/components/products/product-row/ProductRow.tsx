import { Link } from "react-router-dom"
import type { Product } from "../../../models/product"
import './ProductRow.css'

type ProductRowPropType = {
    product: Product
}

const ProductRow = (props: Readonly<ProductRowPropType>) => {
    const { product } = props
    return (
        <tr>
            <td>
                <Link to={`/products/view/${product.productId}`}>
                    <img
                        src={product.imageUrl} alt="NA" title={product.productName} className="img-box" />
                </Link>
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default ProductRow