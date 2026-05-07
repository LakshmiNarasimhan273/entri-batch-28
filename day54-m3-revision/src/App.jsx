import React, { useState } from 'react'
import Child from './pages/Child'
import Products from './pages/Products';
import Notes from './pages/Notes';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

function App() {
  const user = {
    name: "Narasimhan",
    email: "narasimhan@mail.com"
  };

  const[message, setMessage] = useState("");

  function receiveData(data){
    setMessage(data);
  }

  return (
    <div>
      <Navbar />
      <h1>{message}</h1>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/props' element={<Child data={user} sendData={receiveData} />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/notes' element={<Notes />} />
     </Routes>
    </div>
  )
}

export default App