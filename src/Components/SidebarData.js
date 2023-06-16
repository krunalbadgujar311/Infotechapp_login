import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import logo from '../Image/logo.png'
export const SidebarData=[
    {
        title:'',
        path:'/home',
        icon:<img src={logo}/>,
        cName:'side-text'
    },
    {
        title:'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        cName:'side-text'
    },
    
    {/*{
        title:'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper/>,
        cName:'side-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus/>,
        cName:'side-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoMdPeople/>,
        cName:'side-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:'side-text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'side-text'
    }*/},
    {
        title:'Logout',
        path:'/',
        icon:<FaIcons.FaUserCircle/>,
        cName:'side-text'
    }
]
