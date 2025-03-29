import { useState } from 'react'
import { Routes, Route  } from "react-router";
import './App.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import Header from './Components/Header';
import Account from './Pages/Account';
import Products from './Pages/Products';
import Cart from './Pages/Cart'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

        <Header/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>


    </>
  )
}

export default App
