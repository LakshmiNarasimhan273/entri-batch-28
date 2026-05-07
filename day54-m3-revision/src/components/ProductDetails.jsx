import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {id} = useParams();
    const[product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data));
    })

  return (
    <div className='mt-8'>
        <div className='grid grid-cols-2'>
            <div>
            <img src={product?.image} className='w-[500px] h-[500px]' alt="" />
            </div>

            <div>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <p>{product?.price}</p>

            <button>Buy now</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails