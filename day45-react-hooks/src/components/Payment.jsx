import React, { useState } from 'react'

function Payment() {
    const[status, setStatus] = useState(false);

    const handlePayment = () => {

        // two way binding
        // setStatus(!status);

        // TASK1: two way used for - post like scenario

        // one way binding
        setStatus(true);    
    }

  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
        {
            status === true ? (
                <p className='text-2xl bg-green-200 font-semibold px-6 py-2 rounded-lg text-green-700'>Payment Successful</p>
            ) : (
                <p className='text-2xl bg-red-200 font-semibold px-6 py-2 rounded-lg text-red-700'>Payment Pending</p>
            )
        }
        <button onClick={handlePayment} className='mt-2 bg-blue-600 text-white font-bold px-4 py-1 rounded-md'>Pay now</button>
    </div>
  )
}

export default Payment