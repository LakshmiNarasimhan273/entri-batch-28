import React, { useState } from 'react'

function Basic() {
    // const username = "Narasimhan";
    // const[username, setUsername] = useState("Lakshmi Narasimhan");

    const[loginStatus, setLoginStatus] = useState("Please login first");

    const handleLogin = () => {
        setLoginStatus("Welcome back, Admin!");
    }

  return (
    <div className='flex flex-col justify-center items-center h-[500px] text-2xl font-bold'>
        {/* <h1>{username}</h1> */}
        <h1>{loginStatus}</h1>
        <button onClick={handleLogin} className='mt-2 bg-blue-600 text-white px-4 py-1 rounded-md'>Login</button>
    </div>
  )
}

export default Basic