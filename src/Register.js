import './Login.css';
import Register_image from './register.png';
import React, { useEffect, useState } from "react";
import axios from 'axios';


function Register(){
  const [password,setpassword]=useState();
  const [company_name,setcompany_name]=useState();
  const [email,setemail]=useState();
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handeler = async (e)=>{
    const User={password,company_name,email};
   // e.preventDefault();
   fetch("http://localhost:8080/Users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(User)}).then(()=>{console.log("all is oky")})


   const modifiedFile = new File([file],company_name+'.jpg', { type: file.type });

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








   };

    return(
        <>
       
      
        <br></br>
        <div className="container w-50 img_login_bc ">
      
        <br></br>
          <div className="container">
          <img src={Register_image} />

          </div>
<br></br>
<br></br>
            <div className="row justify-content-md-center">
               
			<form>
  <div className="form-group">
    <label for="exampleInputEmail1 " className='text-white'>Email address</label>
    <input  onChange={(e)=>{setemail(e.target.value)}} type="email" value={email} className="form-control form-control-lg col-sm-4 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <br></br>

  <div className="form-group">
    <label for="exampleInputPassword1" className='text-white'>Password</label>
    <input  onChange={(e)=>{setpassword(e.target.value)}} type="password" value={password} className="form-control form-control-lg col-sm-4" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br></br>
  <div className="form-group">
    <label  className='text-white'>Company name</label>
    <input  onChange={(e)=>{setcompany_name(e.target.value)}} type="String" value={company_name} className="form-control form-control-lg col-sm-4"  placeholder="Company name"/>
  </div>
  <br></br>
  <div>
  <label for="formFileLg" className="form-label text-white">Company Image</label>
  <input onChange={handleFileChange} className="form-control form-control-lg" id="formFileLg" type="file"/>
</div> 
  <br></br>
  <button onClick={handeler} type="submit" className="btn  bt">Submit</button><br></br><br></br>
</form>
		</div>



	</div>













        
        
        
        
        
        
        
        </>
    
    
    
        );
}
export default Register;