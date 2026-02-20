import { useState, type ChangeEvent, type SubmitEvent } from "react"
import type { Product } from "../../../models/product"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
  const navigate = useNavigate()
  const [productFormState, setProductFormState] = useState<Product>({
    productId: 0,
    productName: '',
    productCode: '',
    price: 0,
    description: '',
    starRating: 0,
    imageUrl: '',
    releaseDate: ''
  })

  const submitHandler = (e: SubmitEvent) => {
    //stop default behavior => reloading the app
    e.preventDefault()

    if (confirm('would you like to submit?')) {
      console.log(productFormState);
      //only after successful submissin (after the await line)
      navigate('/products')
    }
  }

  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const element = e.target
    console.log(element);
    setProductFormState(
      (current) => {
        return {
          ...current,
          [element.name]: element.value
        }
      }
    )
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="txtId">Id:&nbsp;</label>
          <input
            type="text"
            id="txtId"
            name="productId"
            value={productFormState.productId}
            onChange={formHandler} />
        </div>
        <div>
          <label htmlFor="txtName">Name:&nbsp;</label>
          <input
            type="text"
            id="txtName"
            name="productName"
            value={productFormState.productName}
            onChange={formHandler} />
        </div>
        <div>
          <label htmlFor="txtCode">Code:&nbsp;</label>
          <input
            type="text"
            id="txtCode"
            name="productCode"
            value={productFormState.productCode}
            onChange={
              (e) => {
                setProductFormState(
                  (current) => {
                    return {
                      ...current,
                      productCode: e.target.value
                    }
                  }
                )
              }
            } />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct