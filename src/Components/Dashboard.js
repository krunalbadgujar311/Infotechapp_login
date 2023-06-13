import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import PaginationTable from './PaginationTable'
import './Navbar.css'
const Dashboard = () => {
  return (
    <>
    <Sidebar/>
    <div className="Outbox">
    <div className="Inbox">
    <PaginationTable/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard
