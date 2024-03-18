import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Views/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Views/Home/Home';
import Product from './Views/Product/Product';
import Contact from './Views/Contact/Contact';
import PDetails from './Views/Product/PDetails';
import Antivirus from "./Views/Antivirus/Antivirus";
import Cart from './Views/Product/Cartpage/Cart';


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
        <Route path='Contact' element={<Contact/>}/>
        <Route path='PDetails' element={<PDetails/>}/>
        <Route path='Antivirus' element={<Antivirus/>}/>
        <Route path='Cart' element={<Cart/>}/>
       
              
        </Routes> 
      </BrowserRouter>
    </div>

  
  )
}
export default App