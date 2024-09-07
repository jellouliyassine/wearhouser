import './minidiv.css'
function Minidiv(props){

var cnt=<></>;
 if(props.color==1){
   cnt= <div className=" text-white text-center " >{props.content}</div>;
        }else{
cnt=<div  className=" text-green text-center h5 " >{props.content}</div>;
        }
     

    return (<>
  <div className=" text-green  text-center display-4 circle "><b>{props.title}</b> </div>
    
{cnt}
    
   </>);
}
export default Minidiv