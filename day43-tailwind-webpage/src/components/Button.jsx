import React from 'react'

function Button(props) {
  return (
    <div>
      <button 
      className={`px-4 py-2 rounded-lg text-sm font-medium text-white ${props.type === "primary" ? "bg-purple-600" : "bg-gray-500"} `}>{props.label}</button>
    </div>
  )
}

export default Button