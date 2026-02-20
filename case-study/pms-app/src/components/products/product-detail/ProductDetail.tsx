import { useNavigate, useParams } from "react-router-dom"
//import { Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams()
  const id = Number(params['id'])

  //useNavigate -> Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
  const navigateFnRef = useNavigate()
  return (
    <div>
      ProductDetail of {id}
      <br />
      <br />
      {/* <button type="button" onClick={() => navigateFnRef(`/products/edit/${id}`)}>Edit</button> */}
      <button type="button" onClick={() => navigateFnRef(`/products/edit?id=${id}`)}>Edit</button>
      {/* <Link to={`/products/edit?id=${id}`}>
        <button type="button">Edit</button>
      </Link> */}
    </div>
  )
}

export default ProductDetail