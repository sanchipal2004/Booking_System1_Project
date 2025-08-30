import { useState } from 'react'

import Home from "./pages/Home";
import Aboutus from './pages/Aboutus';
import Hotels from "./pages/Hotels";
import Product from "./pages/Product"
import Nopage from "./assets/components/Nopage";
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Nopage/>}/>
      
         </Routes>
      </BrowserRouter>
    <div className= "h-full"></div>
     
    
    </>
  )
}

export default App
