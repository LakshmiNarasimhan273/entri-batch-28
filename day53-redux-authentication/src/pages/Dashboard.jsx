import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';

function Dashboard() {
  const user = useSelector(state => state.auth.loggedUser);
  const dispatch = useDispatch();
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>Welcome, {user.username}</h1>

      <button onClick={() => dispatch(logoutUser())} className='bg-red-500 text-white px-5 py-2 rounded-lg cursor-pointer'>Logout</button>
    </div>
  )
}

export default Dashboard