import React from 'react'

function Navbar() {
  return (
    <nav className='bg-teal-700 p-4 text-white'>
        <div className='flex flex-col md:flex-row justify-between items-center'>

            <div className='font-bold text-xl'>Entri</div>

            <div>
                <input className='bg-white text-black rounded-md px-2' type="text" placeholder='search course' />
            </div>

            <div className='flex gap-4 font-semibold'>
                <a className='hover:text-teal-500' href="#">Home</a>
                <a className='hover:text-teal-500' href="#">Courses</a>
                <a className='hover:text-teal-500' href="#">My Profile</a>
                <a className='hover:text-teal-500' href="#">Support</a>
            </div>

        </div>
    </nav>
  )
}

export default Navbar