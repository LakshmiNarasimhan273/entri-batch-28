import React from 'react'

function Child(props) {
    const handleClick = () => {
        props.sendData("Hello From Child")
    }
  return (
    <div>
        <h1>{props.data.name}</h1>
        <h6>{props.data.email}</h6>

        <button className='bg-green-600 text-white px-4 py-2 rounded-lg' onClick={handleClick}>Send data to parent</button>
    </div>
  )
}

export default Child