import React from 'react'

function Button(props) {
  return (
    <div>
        <button className='btn btn-primary'>{props.label}</button>
    </div>
  )
}

export default Button