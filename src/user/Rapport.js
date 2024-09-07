import React, { useEffect, useState,useContext } from "react";
import axios from 'axios';
import './Home.css';
import {usercontext} from '../App';
import {useNavigate} from 'react-router-dom';
import {
   
    Link,
    useParams
  } from "react-router-dom";
//import {usercontext} from '../App';
function Rapport(props){
  const navigate = useNavigate();

  const {company,setcompany} = useContext(usercontext);
  const [directory, setDirectory] = useState(null);
const [motif,setmotif]=useState("");
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



  const [users, setUsers] = useState([]);




  



  


var demandes=[{}];


users.map((u)=>{
 if(u.company_name===props.Companyname){

demandes=u.MesDemandes;

 }
 });


//demande---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var demande ={"request_date": new Date().toLocaleDateString(),
"state": "done succefully",
"estimated_finish_date": "unknown",
"motif": "creation du wearhouse",
"idDemande": props.Companyname};



const handleFileChange = (e) => {

  //load files



  
  
  /*
  const selectedDirectory = e.target.files[0];
  const modifiedName =props.Companyname+"."+selectedDirectory.webkitRelativePath.split('.').pop();
  
  // Create a modified copy of the directory object
  const modifiedDirectory = new File([selectedDirectory], modifiedName, {
    type: selectedDirectory.type,
  });
*/


const files = e.target.files;

  const modifiedFiles = Array.from(files).map((file) => {
    const modifiedName = `${props.Companyname}.${file.name.split('.').pop()}`;

    // Create a modified copy of each file object
    return new File([file], modifiedName, {
      type: file.type,
    });
  });





  setDirectory(modifiedFiles);

};




const handeler = async (e)=>{
  

  //const User={password,company_name,email};
 // e.preventDefault();
 fetch("http://localhost:8080/Demandes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(demande)}).then(()=>{console.log("all is oky")})

 setcompany(props.Companyname);


 if(directory){



  const formData = new FormData();
  formData.append('directory', directory);





  try {
    const response = await axios.post('http://localhost:8080/Users/uploadDirectory', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    alert('Directory uploaded successfully: ' + JSON.stringify(response.data));
    console.log('Directory uploaded successfully:', response.data);
  } catch (error) {
    alert('Error uploading directory: ' + error.message);
    console.error('Error uploading directory:', error);
  }
 }
 

alert("request send sucessfuly");
alert(demande.motif);
navigate('/user/index');
 


 };

var element;
 if(demandes.length==0){

  demande.estimated_finish_date=new Date().toLocaleDateString();

element=<>
     <h2 className='text-white text-center border border-light '>Welcome to Wearhouser,load files to create youre data Wearhouse</h2>
     <div className="form-group">
    <label for="exampleInputPassword1" className='text-white'>motif</label>
    <input    type="text" className="form-control form-control-lg col-sm-4" id="exampleInputPassword1" placeholder={demande.motif} readOnly/>
  </div>
 <br></br>
 


</>

}else{
  demande.state="Not Seen yet";
  demande.motif=motif;
  element=<>
  <p className='text-white text-center border border-light'>Add Data</p>
     <div className="form-group">
    <label for="exampleInputPassword1" className='text-white'>motif</label>
    <input  onChange={(e)=>{setmotif(e.target.value);demande.motif=motif;}} value={motif} type="text" className="form-control form-control-lg col-sm-4" id="exampleInputPassword1"  />
  </div>
 <br></br>
  



</>


}
  






















 
  
      return(

      
      <div className='background '>
      
      <div className="container w-80 img_login_bc  p-4">


      <div className="row">
        <table className="table "> 
        <tr className="text-white text-center h5">    
            <th scope="col">Request date</th>
            <th scope="col">Estimated finish date</th>
            <th scope="col">Request state</th>
            <th scope="col">motif</th>

            

        </tr>
      
        {demandes.map((d)=>( <tr className="text-white text-center h5" key={d.idDemande}>
          
    
      <td className="border border-white">{d.request_date}</td>
      <td className="border border-white">{d.estimated_finish_date}</td>
      <td className="border border-white">{d.state}</td>
      <td className="border border-white">{d.motif}</td>

           </tr>))}
        
        </table>
       
   
    </div>

      </div>
       
      <br></br>  
       



       {//demande---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

       }




       <div className='background'>

<div>
 <br></br>

       <br></br>
       <div className="container w-80 img_login_bc ">
       <br></br>
       <br></br>
     <h2 className='text-white text-center'>new Request</h2>
       <br></br>
<br></br>
           <div className="row justify-content-md-center">
              
     <form>
    {element}
    <div>
 <label for="formFileLg" className="form-label text-white">Data Folder : (.csv,.txt,.json,.sql)</label>
 <input onChange={handleFileChange} className="form-control form-control-lg" id="formFileLg" type="file"  directory="" webkitdirectory=""/>
</div> 
 <br></br>
 
 <button onClick={handeler} type='button'  className="btn  bt">Submit</button><br></br><br></br>

</form>



   </div>

 </div>
 </div>      

 <br></br>
       <br></br>
 
       <br></br>
      











       
       
       
       
       
       

</div> 



















        
        </div>
    );
};
export default Rapport;