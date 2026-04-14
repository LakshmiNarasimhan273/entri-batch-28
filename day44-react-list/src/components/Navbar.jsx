import React from 'react'
import { navLinks } from '../data/navbarData'

function Navbar() {
  return (
    <nav className='bg-slate-800 text-white p-4 shadow-md'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            <h1 className='text-xl font-bold'>Entri</h1>

            <ul className='flex gap-4'>
                {/* <li><a href="">Home</a></li>
                <li><a href="">Courses</a></li>
                <li><a href="">Profile</a></li> */}

                {
                    navLinks.map(data => (
                        <li key={data.id}>
                            <a href={data.link}>{data.name}</a>
                        </li>
                    ))
                }
                <button className='bg-white text-black px-4 py-1 rounded-lg'>Login</button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar