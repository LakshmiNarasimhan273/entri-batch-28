import React from 'react'
import { Link } from 'react-router-dom'
import { navLink } from './data'

function Navbar() {
  return (
    <div className='bg-purple-800 px-8 py-2 flex justify-between text-white'>
        <h1 className='text-xl font-bold'>M3 Revision</h1>

        <div className='flex gap-6'>
            {
                navLink.map(data => (
                    <Link className='text-gray-200 font-semibold' to={data.href}>{data.name}</Link>
                ))
            }
        </div>        
    </div>
  )
}

export default Navbar