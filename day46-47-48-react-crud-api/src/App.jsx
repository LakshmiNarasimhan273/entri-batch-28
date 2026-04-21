import React, { useEffect, useState } from 'react'
import axios from "axios";
import UserList from './components/UserList';

// for starting the json server - npx json-server --watch db.json --port 3001

function App() {

  const API = "http://localhost:3001/users";

  // GET - Retrive data
  // POST - Create a new record into the database

  const [users, setUsers] = useState([]); // for storing the api datas
  const [form, setForm] = useState({
    username: "",
    email: "",
    status: "Present"
  });

  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // const form = {username: "", email: ""}

  const getUsers = async () => {
    const response = await axios.get(API)
    setUsers(response.data);

    // data: [{}, {}, {}]

    // await fetch(API)
    // .then(response => response.json())
    // .then(data => setUsers(data))
    // .catch(err => console.log(err));
  }

  useEffect(() => {
    getUsers();
  }, []);

  const validate = () => {

    // TASK1: ADD REGEX VALIDATION
    if (form.username.length < 3) {
      setError("Username must be at least 3 characters");
      return false;
    }

    if (!form.email.includes("@")) {
      setError("Email must contain @");
      return false;
    }

    setError("");
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (editId) {
      // put api logic
      await axios.put(`${API}/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post(API, form)
    }

    setForm({ username: "", email: "", status: "Present" });
    getUsers();
  }

  const handleEdit = (user) => {
    setForm(user);
    setEditId(user.id);
  }

  const handleDelete = async (user) => {

    // TASK2(OPTIONAL): ADD TAILWIND MODAL WITH 2 BUTTONS, DELETE & CANCEL
    // CONSTRAINT: DELETE -> primary
    // CONSTRAINT: CANCEL -> secondary

    // FLOW: IF PRIMARY -> DELETE | SECONDARY RETURN NOTHING
    const permission = window.confirm(`Are you sure to delete ${user.username}`);

    if (permission === true) {
      await axios.delete(`${API}/${user.id}`);
      getUsers();
    } else {
      return;
    }

  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      {/*form  */}
      <h1 className='text-2xl font-semibold mb-4'>Employee Attendance Application</h1>

      <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow w-full max-w-md'>
        <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} type="text" placeholder='Username' className='w-full mb-2 p-2 border rounded' />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder='Email' className='w-full mb-2 p-2 border rounded' />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className='w-full mb-2 p-2 border rounded'>
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button className='bg-green-300 text-green-700 font-bold px-4 py-2 rounded w-full cursor-pointer'>
          {
            editId ? "Update user"
              : "Add user"
          }
        </button>

        {
          error && <p className='mt-4 text-red-500 text-sm font-semibold text-center'>{error}</p>
        }

      </form>

      {/* api data */}
      <div className='mt-6'>

        {
          users.length === 0 ? (
            <p className='text-sm font-semibold text-gray-500'>No users found</p>
          ) : (
            <div>
              <p className='text-sm font-semibold mb-6 mt-3'>All Users</p>
              <UserList data={users} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
          )
        }
      </div>

    </div>
  )
}

export default App