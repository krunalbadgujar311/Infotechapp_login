import React, { useContext } from 'react';
import Login from "./Components/Login";
import Register from './Components/Register';
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Reports from "./Components/Pages/Reports";
import Team from "./Components/Pages/Team";
import Support from "./Components/Pages/Support";
import About from './Components/Pages/About';
import Skills from './Components/Pages/Skills';
import VideoPage from './Components/Pages/VideoPage';
import Services from './Components/Pages/Services';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import {BasicTable} from './Components/BasicTable';
import {PaginationTable} from './Components/PaginationTable';
import {FilteringTable} from './Components/FilteringTable';
import './Components/Navbar.css';
import './style.scss';
import AddUSerForm from './Components/Pages/AddUserForm';


function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/adduser" element={<AddUSerForm/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/videopage" element={<VideoPage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/table" element={<PaginationTable/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
