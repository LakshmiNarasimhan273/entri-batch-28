import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteNote } from '../redux/notesSlice';

function NotesList() {
  const notes = useSelector(state => state.notes.usernotes); 

  const dispatch = useDispatch();

  console.log(notes)
  
  if(notes.length === 0){
    return (
      <div className='text-center text-gray-500 mt-10'>
        No Notes Yet. Start Adding Now
      </div>
    )
  }
  // TASK: Adjust a proper height for all Cards and design properly on the date field
  return (
    <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        notes.map(data => {
            const formattedDate = new Date(data.id).toLocaleString();
          return(

            <div key={data.id}
            className='bg-white shadow-md rounded-2xl p-5'
            >
            <h3 className='text-lg font-semibold text-gray-800'>{data.title}</h3>
            <p className='text-gray-600 text-sm'>{data.description}</p>
            <span className='inline-block mt-3 text-xs bg-indigo-600 text-white font-semibold px-2 py-1 rounded-full'>{data.category}</span>
            <div className='mt-4 flex items-center justify-between'>
              <span className='text-xs test-gray-400'>{formattedDate}</span>
            <button onClick={() => dispatch(deleteNote(data.id))} className='mt-4 w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm'>Delete</button>
            </div>
          </div>
          )
        }
        )
      }
    </div>
  )
}

export default NotesList