import { useParams } from "react-router-dom"

export default  function Products() {
    const { id } = useParams();
    console.log(id)
}