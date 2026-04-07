import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import Products from './pages/Products';
import Entri from './pages/Entri';

function App() {
  const username = "Narasimhan"; // js variable

  const user = {
    name: "Narasimhan",
    role: "Mentor",
    loginStatus: true
  }

  const products = {
    title: "Watch",
    price: 2500,
    description: "lorem adfadlbajd ajkdslfkajdsbfask d",
    rating: 4.5,
    isStock: false
  }



  return (
    <div>
      {/* props to share the username data */}

      {/* TASK1: PASSING A DATA FROM CHILD COMPONENT TO PARENT COMPONENT */}
      <Dashboard name={username} /> 

      <Login />
      <Register />

      <Home userData = {user} />

      <Products data={products} />

      <Entri />
    </div>
  )
}

export default App