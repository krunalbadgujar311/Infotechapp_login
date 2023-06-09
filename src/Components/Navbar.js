import React from 'react'
import { useNavigate,Link,navigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import "./Navbar.css"
import logo from '../Image/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                <Link to="/home">
                    <li><img src={logo}/></li>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
