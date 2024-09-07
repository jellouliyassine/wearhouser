import logo from './logo.svg';
import './App.css';
import './User.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './composant/Navbar';
import Footer from './composant/Footer';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import User from './User';
import User_index from './User_index';
import {createContext, useContext, useState } from 'react';

export const usercontext = createContext();

function App() {

  const [company,setcompany]=useState();

  return (

 
    



 
<BrowserRouter>
<usercontext.Provider value={{company,setcompany}}>
    <Routes>
   
       
        <Route path="/" element={
        <div className="testback">
              

<div className="center_div"><Navbar/></div>
  <div className="center_div "><Home/> </div>
  
  <div className='img1'></div>
  </div>} />
      
  <Route path="/login" element={
    <div className="testback">
    <div className="center_div"><Navbar/></div>
    
<Login/>


<div className='img1'></div>
  </div>
} />   

  <Route path="/register" element={
    
    <div className="testback">
      <div className="center_div"><Navbar/></div>

<Register/>

<div className='img1'></div>
</div>} /> 

//user part
<Route path="/user/index" element={<User Companyname={company} page_name="index"/>} />
<Route path="/user/Request" element={    <User Companyname={company} page_name="request"/>} />
<Route path="/user/Result" element={<User Companyname={company} page_name="result"/>} />


    </Routes>
    </usercontext.Provider>
  </BrowserRouter>
  
  
    
);}

export default App;
