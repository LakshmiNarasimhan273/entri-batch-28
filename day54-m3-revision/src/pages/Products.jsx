import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
  const[products, setProducts] = useState([]);
  // https://fakestoreapi.com/products
  useEffect(() => {
       axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
  }, []);

  console.log(products)
  return (
    <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {
        products.map(data => (
          <div className='bg-gray-200 font-bold px-4 py-2 rounded-lg'>
            <h1>{data.title}</h1>
            <p>{data.price}</p>
            <Link to={`/products/${data.id}`} className='text-blue-600'>View More</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Products