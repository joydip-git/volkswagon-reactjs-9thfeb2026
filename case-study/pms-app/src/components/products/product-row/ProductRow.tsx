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
                <img
                    src={product.imageUrl} alt="NA" title={product.productName} className="img-box" />
            </td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button type="button">Delete</button>
            </td>
        </tr>
    )
}

export default ProductRow