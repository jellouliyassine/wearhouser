import './User.css';
import Home from './user/Home';
import login_image from '../src/userdata/nigayassine/nigayassine.jpg';
import Rapport from './user/Rapport';
import React, { useEffect, useState ,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import {usercontext} from './App';



function User(props){
  const navigate = useNavigate();

const {company,setcompany} = useContext(usercontext);
const Homehandler=()=>{
  
  
  
  
setcompany(props.Companyname);
    navigate('/user/index');



}
const Requesthandler=()=>{

   
setcompany(props.Companyname);
    navigate('/user/Request');

}
const Resulthandler=()=>{

  setcompany(props.Companyname);
      navigate('/user/Result');
  



}


//setcompany(props.Companyname);
var page_called;
if(props.page_name=="request"){page_called =<Rapport Companyname={props.Companyname} />;}
if(props.page_name=="files"){}
if(props.page_name=="result"){}
// 
if(props.page_name=="index"){page_called =<Home Companyname={props.Companyname}/>;}
    return(
<>

<div className="sidenav">
<img src={require('../src/userdata/'+props.Companyname+'/'+props.Companyname+'.jpg')} />

  <div className='border-bottom border-white'>
  <div className="container">
          </div>
        
          <br></br>
     <h3 className='text-center text-white'> {props.Companyname}</h3>
     </div>
  <a href="#" onClick={Homehandler} className='text-center  m-1 ' >Home</a>
  <a href="#" onClick={Requesthandler} className='text-center  m-1 ' >Request</a>
  <a href="#" onClick={Resulthandler} className='text-center  m-1 '>Result</a>
</div>



<div className="main">



{page_called}
  </div>




</>


    );
}
export default User;