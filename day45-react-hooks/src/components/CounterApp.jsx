import React, { useState } from 'react'

function CounterApp() {

    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
        <h1 className='bg-blue-600 text-white px-4 py-2 text-3xl rounded-lg font-bold'>{count}</h1>

        <div className='flex gap-4 mt-8'>
            <button onClick={increment} className='bg-green-200 text-green-700 px-4 py-1 font-semibold cursor-pointer rounded'>Increment</button>
            <button disabled = {count === 0} onClick={decrement} className='bg-red-200 text-red-700 px-4 py-1 font-semibold cursor-pointer rounded'>Decrement</button>
            <button onClick={reset} className='bg-gray-200 px-4 py-1 font-semibold cursor-pointer rounded'>Reset</button>
        </div>
    </div>
  )
}

export default CounterApp