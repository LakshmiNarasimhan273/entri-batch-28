import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    // <div className='mt-6 flex justify-center'>
    //   <button className='bg-emerald-200 text-emerald-700 px-6 rounded-lg cursor-pointer font-bold'>Login</button>
    // </div>
    <>
      {/* <Home /> */}
      <Navbar />
      <Products />
    </>
  )
}

export default App