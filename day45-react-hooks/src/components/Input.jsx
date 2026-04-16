import React, { useState } from 'react'

function Input() {
    const[todo, setTodo] = useState("");
    const handleSubmit = () => {
        console.log(todo);
    }
  return (
    <div>

    <div className='flex gap-4 justify-center items-center h-[500px]'>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} className='border px-4 py-1 rounded-md' type="text" />
        <button onClick={handleSubmit} className='bg-blue-600 text-white px-4 py-1 font-semibold cursor-pointer rounded'>Submit</button>
        
    </div>

    <h1>{todo}</h1>
    </div>
  )
}

export default Input