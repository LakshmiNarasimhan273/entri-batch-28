import React from 'react'

function Products(props) {
  return (
    <div>
        <h3>{props.data.title}</h3>
        <h5>{props.data.price}</h5>
        <p>{props.data.description}</p>
        <p>{props.data.rating}</p>
        {
            props.data.isStock ? (
                <p>In Stock</p>
            ) : (
                <p>Out of Stock</p>
            )
        }
    </div>
  )
}

export default Products