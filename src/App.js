import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Views/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Views/Home/Home';
import Product from './Views/Product/Product';


 function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          
        <Route path="/" element={<Login/>} />
        <Route path="Navbar" element={<Navbar/>} />
        <Route path="Footer" element={<Footer/>} />
        <Route path="Home" element={<Home/>} />
        <Route path='Product' element={<Product/>}/>

        
              
        </Routes> 
      </BrowserRouter>
    </div>

  
  )
}
export default App