import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addNote } from '../redux/notesSlice';

function Notes() {
    const [form, setForm] = useState({
        title: "",
        description: ""
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ id: Date.now(), ...form }));
        setForm({title: "", description: ""});
    }

    const notes = useSelector(state => state.notesdata.notes);
    console.log(notes)

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input className='border p-2'
                    value={form.title}
                        onChange={
                            (e) => setForm({ ...form, title: e.target.value })}
                        type="text" placeholder='Title' />


                    <textarea value={form.description} className='border p-2' onChange={(e) => setForm({ ...form, description: e.target.value })} name="" placeholder='Description' id=""></textarea>

                    <button className='bg-gray-300 px-4 py-2'>Add Note</button>
                </form>
            </div>
            <div>
                {
                    notes.map(data => (
                            <div key={data.id}>
                            <h1>{data.title}</h1>
                            <h5>{data.description}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notes