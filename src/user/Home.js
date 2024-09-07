import './Home.css';
import React, { useEffect, useState ,useContext} from "react";
import axios from 'axios';
import Register_image from '../register.png';
import {usercontext} from '../App';
import {useNavigate} from 'react-router-dom';

function Home(props){
  



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
//  const [password,setpassword]=useState();
  //const [company_name,setcompany_name]=useState();
 // const [email,setemail]=useState();
 

 var User={};
 const navigate = useNavigate();

 const {company,setcompany} = useContext(usercontext);
  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);
  

var f=0;
  users.map((r)=>{
    //alert(user.company_name+","+user.password+" ,"+pasword);    
    if(r.company_name===props.Companyname){
if(f==0){User={company_name:props.Companyname,password:r.password,email:r.email};f=1;
//alert(User.company_name+","+User.email+","+User.password+","+f);
}

                // 

    }
    
   
  });
  


    const updatedUser = Object.assign({}, User);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  


  const handeler = async (e)=>{
    alert("you sgonna log out to save changes !!");
    
    //const User={password,company_name,email};
   // e.preventDefault();
   fetch("http://localhost:8080/Users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(updatedUser)}).then(()=>{console.log("all is oky")})
  



   if(file){
    const modifiedFile = new File([file],props.Companyname+'.jpg', { type: file.type });

   const formData = new FormData();
   formData.append('file', modifiedFile);

   

   try {
     const response = await axios.post('http://localhost:8080/Users/uploadImage', formData, {
       headers: {
         'Content-Type': 'multipart/form-data',
       },
     });
     console.log('File uploaded successfully:', response.data);
   } catch (error) {
     console.error('Error uploading file:', error);
   }
   }
   



   
navigate("/login");


   };
    return(
<div className='background'>

 <div>
  <br></br>

        <br></br>
        <div className="container w-80 img_login_bc ">
        <br></br>
        <br></br>
      <h2 className='text-white text-center'>Edit Profile</h2>
        <br></br>
<br></br>
            <div className="row justify-content-md-center">
               
			<form>
  <div className="form-group">
    <label for="exampleInputEmail1 " className='text-white'>Email address</label>
    <input   onChange={(e)=>{updatedUser.email=(e.target.value);User.email=updatedUser.email;}} type="email" className="form-control form-control-lg col-sm-4 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= {User.email}/>
   
  </div>
  <br></br>

  <div className="form-group">
    <label for="exampleInputPassword1" className='text-white'>Password</label>
    <input  onChange={(e)=>{updatedUser.password=(e.target.value);User.password=updatedUser.password;}} type="text"  className="form-control form-control-lg col-sm-4" id="exampleInputPassword1" placeholder={User.password}/>
  </div>
  <br></br>
  <div className="form-group">
    <label  className='text-white'>Company name</label>
    <input   onChange={(e)=>{updatedUser.company_name=(e.target.value);}} type="String" value={User.company_name} className="form-control form-control-lg col-sm-4"  placeholder="Company name" readOnly/>
  </div>
  <br></br>
  <div>
  <label for="formFileLg" className="form-label text-white">Company Image</label>
  <input onChange={handleFileChange} className="form-control form-control-lg" id="formFileLg" type="file"/>
</div> 
  <br></br>
  <button onClick={handeler} type='button'  className="btn  bt">Submit</button><br></br><br></br>

</form>



		</div>

	</div>
  </div>      

  <br></br>
        <br></br>
  
      











        
        
        
        
        
        

</div> 




    );
}
export default Home;