import './Login.css';
import login_image from './login.png';
import axios from 'axios';
import React, { useEffect, useState ,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import {usercontext} from './App';



function Login(){
  const {company,setcompany} = useContext(usercontext);
  const [pasword,setpasword]=useState();
  const [company_name,setcompany_name]=useState();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8080/Users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching users:', error);
      });
  }, []); 

  const Handler=()=>{
   
var f =0;
    users.map((user)=>{
//alert(user.company_name+","+user.password+" ,"+pasword);    
if((user.company_name===company_name)&&(user.password===pasword)){
  
  if(f===0){setcompany(user.company_name);
    navigate('/user/index');f=1;}else{alert("login or password not correct");}


}
});

//alert(flag);

  }
    return(
        <>
       
        <br></br>
        <br></br>
        <br></br>
        <div className="container w-50 img_login_bc ">
      
        <br></br>
          <div className="container">
          <img src={login_image} />

          </div>
<br></br>
<br></br>
            <div className="row justify-content-md-center">
               
			<form>
  <div className="form-group">
    <label for="exampleInputEmail1 " className='text-white'>Company Name</label>
    <input value={company_name} onChange={(e)=>{setcompany_name(e.target.value)}} type="text" className="form-control form-control-lg col-sm-4 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <br></br>

  <div className="form-group">
    <label for="exampleInputPassword1" className='text-white'>Password</label>
    <input value={pasword} onChange={(e)=>{setpasword(e.target.value)}}  type="password" className="form-control form-control-lg col-sm-4" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br></br>
  <a href='/register'> <div  className='text-white text-decoration-underline '>you dont have an acount Register</div></a><br></br>
  <button onClick={Handler} type="submit" className="btn  bt">Submit</button><br></br><br></br>
</form>
		</div>



	</div>













        
        
        
        
        
        
        
        </>
    
    
    
        );
}
export default Login;