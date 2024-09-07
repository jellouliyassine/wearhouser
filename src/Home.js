import Minidiv from './Minidiv';
function Home(){
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container ">
            <div className="row justify-content-md-center">
                <div className="col-2 m-5 "><Minidiv title="What we do ?" /></div>
                
                <div className="col-2 m-5"><Minidiv title="how we do ?" /></div>
                <div className="col-2 m-5"><Minidiv title="with what ?" /></div>
                
                </div>
                <br></br>
                <div className="row justify-content-md-center">
                <div className="col-2 m-5"><Minidiv title="team" /></div>
                <div className="col-2 m-5"><Minidiv title="Policies" /></div>
                <div className="col-2 m-5"><Minidiv title="Values" /></div>
                
                </div>
                
        </div>
        
        
        
        
        
        
        
        
        </>
    );
}
export default Home;