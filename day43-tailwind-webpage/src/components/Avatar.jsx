import React, { PureComponent } from 'react'

function Avatar(props) {
  console.log(props)
  return (
    <div className='relative'>
      <img className='w-24 h-24 rounded-full object-cover' src={props.image} alt="" />
      {
        props.online && (
          <span className='absolute w-4 h-4 bottom-1 right-1 bg-green-500 rounded-full border-2 border-white'></span>
        )
      }
    </div>
  )
}

export default Avatar