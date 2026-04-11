import React from 'react'

function Role(props) {
  return (
    <div className='bg-purple-600 text-center text-white text-xs px-3 py-1 rounded-full mt-2'>
      {props.role}
    </div>
  )
}

export default Role