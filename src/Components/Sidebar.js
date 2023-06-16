import React,{useState} from 'react'
import { useNavigate,Link,navigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData';
import Navbar from './Navbar';
import logo from '../Image/logo.png'
import "./Navbar.css"

import { IconContext } from 'react-icons';
const Sidebar = () => {
    const [sidebar,setSidebar] =useState(true)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'white'}}>
            <div className="sidebar">
                <div className="Navbar">
                    <Navbar/>
                </div>
            </div>
            <nav className='side-menu active'>
                <ul className="side-menu-items" onClick={showSidebar}>
                    {SidebarData.map((item,index)=>{
                        return (
                            
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <b>{item.icon}</b>
                                    <span><b>{item.title}</b></span>
                                </Link>
                            </li>
                            
                        )
                    })}
                    
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
    }

export default Sidebar
