import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = (props) => {
    let { id } = useParams();
    console.log(useParams(),'in single')
  return <div>Hello from single page</div>
}
export default SinglePage