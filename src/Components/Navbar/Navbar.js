import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <header>
                <input type="checkbox" name="" id="chk1" />
                <div className="logo"><h1>Pc Master</h1></div>
                <div className="search-box">
                    <form>
                        <input type="text" name="search" id="srch" placeholder="Search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Product">Product</a></li>
                    <li><a className=" dropdown-toggle" data-bs-toggle="dropdown" href="#">Blog</a>
                        <div className="dropdown">
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another </a></li>
                                <li><a className="dropdown-item" href="#">Something</a></li>
                            </ul>
                        </div>


                    </li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="Contact">Contact</a></li>
                    <li>
                        <a href="#"><i className="fa fa-shopping-cart"></i></a>
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
