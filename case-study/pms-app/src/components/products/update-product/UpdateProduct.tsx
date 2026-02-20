import { useSearchParams } from "react-router-dom"

const UpdateProduct = () => {
  const [queryParams,] = useSearchParams()
  const id = Number(queryParams.get('id'));

  return (
    <div>UpdateProduct: {id}</div>
  )
}

export default UpdateProduct