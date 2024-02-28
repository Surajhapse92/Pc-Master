import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <header>
        <input type ="checkbox" name ="" id ="chk1"/>
        <div class="logo"><h1>Pc Master</h1></div>
            <div class="search-box">
                <form>
                    <input type ="text" name ="search" id ="srch" placeholder="Search"/>
                    <button type ="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Blog</a>

                </li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li>     
                    <a href="#"><i class="fa fa-shopping-cart"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                      
                </li>
            </ul>
            <div class="menu">
                <label for="chk1">
                    <i class="fa fa-bars"></i>
                </label>
            </div>
    </header>
    
    </div>
  )
}
