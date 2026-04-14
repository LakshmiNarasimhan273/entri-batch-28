import React from 'react'
import { products } from '../data/productsData'

function Products() {

    const handleCart = (id, title) => {
        alert(`${id} - ${title} Added to you Cart!`);
        console.log(id);
    }

  return (
    <div className='max-w-6xl mx-auto p-6'>
        <h2 className='text-2xl font-medium mb-8'>Our Products</h2>

        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                products.map(data => (
                    <div key={data.id} className='bg-gray-200 shadow-md rounded-lg p-4'>
                        <img className='w-full h-40 object-cover rounded-md' src={data.image} alt="" />

                        <h3 className='text-lg font-semibold mt-3'>{data.title}</h3>
                        <p className='text-lg font-bold mt-3 text-blue-600 mb-2'>${data.price}</p>

                        {
                            data.isStock ? (
                                <p className='bg-green-200 text-green-700 rounded font-semibold px-2 py-1 text-center'>In Stock</p>
                            ) : (
                                <p className='bg-red-200 text-red-700 rounded font-semibold px-2 py-1 text-center'>Out of Stock</p>
                            )
                        }

                        <button onClick={() => handleCart(data.id, data.title)} className='mt-4 bg-blue-600 text-white font-semibold w-full py-1 rounded-md cursor-pointer'>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products