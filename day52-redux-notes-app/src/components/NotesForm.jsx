import React, { useState } from 'react'
import { addNote } from '../redux/notesSlice';
import { useDispatch } from 'react-redux';

function NotesForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.title || !form.description) return;

    dispatch(addNote(
      {id: Date.now(), ...form}
    ));

    setForm({
      title: "",
      description: "",
      category: ""
    })
  }

  return (
    <div className='bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl mx-auto'>
      <h2 className='text-xl font-semibold mb-4 text-gray-800'>Create Note</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none'
          type="text"
          placeholder='Title' />

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none'
          placeholder='Description'
        ></textarea>

        <input
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none'
          type="text"
          placeholder='Category' />

        <button className='w-full bg-indigo-500 text-white py-3 rounded-lg font-medium cursor-pointer'>Add Note</button>
      </form>
    </div>
  )
}

export default NotesForm