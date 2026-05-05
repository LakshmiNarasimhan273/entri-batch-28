import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';

function Login() {
  const[form, setForm] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(state => state.auth.users);

    const handleSubmit = (e) => {
      e.preventDefault();

      const exists = users.find(data => 
        data.email === form.email && data.password === form.password
      );

      if(!exists){
        alert("Invalid Credentials");
        return;
      }
      dispatch(loginUser(form));
      navigate("/dashboard");
    }
  return (
    <div className='h-screen grid grid-cols-2'>
      {/* Left Side Image */}
      <div className='hidden md:block bg-cover bg-center' style={{ backgroundImage: "url('https://i.pinimg.com/1200x/fa/26/e0/fa26e0638127021a3b41efbbaab82332.jpg')" }} />

      {/* Right Side Form */}
      <div className='flex items-center justify-center bg-white'>
        <form onSubmit={handleSubmit} className='w-96 p-8 rounded-xl shadow-lg'>
          <h2 className='text-3xl font-bold mb-6 text-gray-800'>Welcome Back</h2>

          <input onChange={(e) => setForm({...form, email:e.target.value})} className='w-full border p-3 mb-4 rounded-lg' type="email" placeholder='Email' />
          <input onChange={(e) => setForm({...form, password: e.target.value})} className='w-full border p-3 mb-4 rounded-lg' type="password" placeholder='Password' />

          <button className='w-full bg-indigo-600 text-white p-3 rounded-lg cursor-pointer'>Signin</button>

          <p className='mt-4 text-sm font-medium text-gray-600'>Don't have an account? <Link className='text-indigo-600 font-semibold' to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login