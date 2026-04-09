import React from 'react'

function Products() {
  return (
    <div className='min-h-screen bg-teal-100 p-6'>
        <h1 className='text-2xl font-bold text-center mb-8'>All Products</h1>

        {/* Parent DIV - GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

            {/* Card 1 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl'>
                <img className='w-full h-48 object-cover' src="https://i.pinimg.com/736x/3b/1f/36/3b1f36e229f3062eae9a22dcdee47bde.jpg" alt="" />

                <div className='p-4'>
                    <h2 className='text-lg text-gray-800 font-semibold mb-2'>Casual combo</h2>
                    <p className='text-green-700 font-bold mb-4'>$456</p>
                    <button className='bg-teal-200 text-teal-800 font-semibold w-full py-1 rounded-lg cursor-pointer hover:bg-teal-300'>Buy now</button>
                </div>

            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl'>
                <img className='w-full h-48 object-cover' src="https://i.pinimg.com/736x/3b/1f/36/3b1f36e229f3062eae9a22dcdee47bde.jpg" alt="" />

                <div className='p-4'>
                    <h2 className='text-lg text-gray-800 font-semibold mb-2'>Casual combo</h2>
                    <p className='text-green-700 font-bold mb-4'>$456</p>
                    <button className='bg-teal-200 text-teal-800 font-semibold w-full py-1 rounded-lg cursor-pointer hover:bg-teal-300'>Buy now</button>
                </div>

            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl'>
                <img className='w-full h-48 object-cover' src="https://i.pinimg.com/736x/3b/1f/36/3b1f36e229f3062eae9a22dcdee47bde.jpg" alt="" />

                <div className='p-4'>
                    <h2 className='text-lg text-gray-800 font-semibold mb-2'>Casual combo</h2>
                    <p className='text-green-700 font-bold mb-4'>$456</p>
                    <button className='bg-teal-200 text-teal-800 font-semibold w-full py-1 rounded-lg cursor-pointer hover:bg-teal-300'>Buy now</button>
                </div>

            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl'>
                <img className='w-full h-48 object-cover' src="https://i.pinimg.com/736x/3b/1f/36/3b1f36e229f3062eae9a22dcdee47bde.jpg" alt="" />

                <div className='p-4'>
                    <h2 className='text-lg text-gray-800 font-semibold mb-2'>Casual combo</h2>
                    <p className='text-green-700 font-bold mb-4'>$456</p>
                    <button className='bg-teal-200 text-teal-800 font-semibold w-full py-1 rounded-lg cursor-pointer hover:bg-teal-300'>Buy now</button>
                </div>

            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl'>
                <img className='w-full h-48 object-cover' src="https://i.pinimg.com/736x/3b/1f/36/3b1f36e229f3062eae9a22dcdee47bde.jpg" alt="" />

                <div className='p-4'>
                    <h2 className='text-lg text-gray-800 font-semibold mb-2'>Casual combo</h2>
                    <p className='text-green-700 font-bold mb-4'>$456</p>
                    <button className='bg-teal-200 text-teal-800 font-semibold w-full py-1 rounded-lg cursor-pointer hover:bg-teal-300'>Buy now</button>
                </div>

            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl'>
                <img className='w-full h-48 object-cover' src="https://i.pinimg.com/736x/3b/1f/36/3b1f36e229f3062eae9a22dcdee47bde.jpg" alt="" />

                <div className='p-4'>
                    <h2 className='text-lg text-gray-800 font-semibold mb-2'>Casual combo</h2>
                    <p className='text-green-700 font-bold mb-4'>$456</p>
                    <button className='bg-teal-200 text-teal-800 font-semibold w-full py-1 rounded-lg cursor-pointer hover:bg-teal-300'>Buy now</button>
                </div>

            </div>

            

        </div>

    </div>
  )
}

export default Products