import React, { useContext } from 'react';
import Login from "./Components/Login";
import Register from './Components/Register';
import Home from "./Components/Home";
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import './style.scss';

function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
