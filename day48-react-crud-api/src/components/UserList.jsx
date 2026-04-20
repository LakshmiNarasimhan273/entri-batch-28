import React from 'react'

function UserList(props) {
    return (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                props.data.map(data => (
                    <div className='bg-blue-100 text-black font-semibold p-4 rounded-md' key={data.id}>
                        <p className='text-2xl font-bold'>{data.username}</p>
                        <p className='text-sm text-gray-600 mb-3'>{data.email}</p>
                        <span className={`${data.status === "Present" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} px-3 py-1 rounded`}>{data.status}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList