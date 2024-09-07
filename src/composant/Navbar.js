import './Navbar.css';
function Navbar(){


    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return(
<>

<div className="topnav" id="myTopnav">
  <a href="/" className="active">Home</a> 
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="/login">Login</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>

<div style={{"padding-left":"16px"}}>
  <br></br><br></br>
  <h2 className="text-white ">WELLCOME TO WEARHOUSER</h2>
  <p className="text-white ">new company that you have never seen before :)</p>
</div>


</>



    )
}
export default Navbar