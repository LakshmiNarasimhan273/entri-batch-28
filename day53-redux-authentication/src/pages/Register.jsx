import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import {registerUser} from "../redux/authSlice"

function Register() {

  const[form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(form));
    navigate("/");
  }

  return (
    <div className='h-screen grid grid-cols-2'>
      {/* Left Side Image */}
      <div className='hidden md:block bg-cover bg-center' style={{ backgroundImage: "url('https://i.pinimg.com/1200x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg')" }} />

      {/* Right Side Form */}
      <div className='flex items-center justify-center bg-white'>
        <form onSubmit={handleSubmit} className='w-96 p-8 rounded-xl shadow-lg'>
          <h2 className='text-3xl font-bold mb-6 text-gray-800'>Create Account</h2>

          <input onChange={(e) => setForm({...form, username: e.target.value})} className='w-full border p-3 mb-4 rounded-lg' type="text" placeholder='Username' />
          <input onChange={(e) => setForm({...form, email: e.target.value})} className='w-full border p-3 mb-4 rounded-lg' type="email" placeholder='Email' />
          <input onChange={(e) => setForm({...form, password: e.target.value})} className='w-full border p-3 mb-4 rounded-lg' type="password" placeholder='Password' />

          <button className='w-full bg-indigo-600 text-white p-3 rounded-lg cursor-pointer'>Signup</button>

          <p className='mt-4 text-sm font-medium text-gray-600'>Already have an account? <Link className='text-indigo-600 font-semibold' to="/">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register