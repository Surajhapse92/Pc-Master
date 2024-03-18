import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar() {
    const search = () => {
        const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
        const storeitems = document.getElementById("pro-container")
        const product = document.querySelectorAll("pro")
        const pname = storeitems.getElementsByTagName("h5")

        for (var i = 0; i < pname.length; i++) {
            let match = product[i].getElementsByTagName('h5')[0];

            if (match) {
                let textvalue = match.textContent || match.innerHTML

                if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
                } else {
                    product[i].style.display = "none";
                }
            }
        }
    
    }
    return (
        <div>
            <header>
                <input type="checkbox" name="" id="chk1" />
                <div className="logo"><h1 className='logo-name'>Pc Master</h1></div>
                <div className="search-box">
                    <form>
                        <input type="text" name="search" id="search-item" placeholder="Search products" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Product">Product</a></li>
                    <li><a className=" dropdown-toggle" data-bs-toggle="dropdown" href="#">Features</a>
                        <div className="dropdown">
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Antivirus</a></li>
                                <li><a className="dropdown-item" href="#">Driver<br/>Software </a></li>
                                <li><a className="dropdown-item" href="#">Something</a></li>
                            </ul>
                        </div>


                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="Contact">Contact</a></li>
                    <li>
                    <a href="Cart"><i className="fa fa-shopping-cart"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>

                    </li>
                </ul>
                
                <div className="menu">
                    <label for="chk1">
                        <i className="fa fa-bars"></i>
                    </label>
                </div>
            </header>

        </div>
    )
}