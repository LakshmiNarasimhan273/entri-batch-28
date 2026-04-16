import React, { useEffect } from 'react'

function Products() {
    // components life cycle methods
    //  - mount | update | unmount

    useEffect(() => { // mount
        fetch("https://fakestoreapi.com/products")
        .then(response => {
            return response.json();     // update
        }).then(data => {
            console.log(data);
        })
    }, []) // unmount

  return (
    <div>Products</div>
  )
}

export default Products