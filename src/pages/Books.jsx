import React from 'react';
import Navbar from '../components/navbar'; // Adjust the path if needed
import pro2img from './pro2img.jpg'; 
import pro3img from './pro3img.jpg'; 
import pro4img from './pro4img.jpg';  

export default function Books() {
   return ( 
    <>
    <Navbar/>       
    <div className="container" style={{ maxWidth: "800px", margin: "30px auto 0" }}>         
     {/* First Book Card */}         
      <div className="card mb-4" style={{ height: "220px" }}>           
       <div className="row g-0">             
         <div className="col-md-4">               
           <img src={pro2img} alt="Book cover" className="img-fluid" style={{ maxWidth: "200px" }}/>             
         </div>             
         <div className="col-md-8">               
           <div className="card-body">                 
             <h4 className="card-title">Marvel's Iron Man 3 Prelude</h4>                 
             <p className="card-text">Christos Gage, Will Corona Pilgrim                 
             Marvel Entertainment, 2015 - Comics & Graphic Novels - 121 pages</p>                 
             <button className="btn btn-dark">READ HERE</button>               
           </div>             
         </div>           
       </div>         
     </div>                  
    {/* Second Book Card */}         
    <div className="card mb-4" style={{ height: "220px" }}>           
      <div className="row g-0">             
        <div className="col-md-4">               
          <img src={pro3img} alt="Book cover" className="img-fluid" style={{ maxWidth: "200px" }}/>             
        </div>             
        <div className="col-md-8">               
          <div className="card-body">                 
           <h4 className="card-title">Captain America: Sentinel of Liberty</h4>                 
            <p className="card-text">Mark Waid, James Felder, Brian K. Vaughan, Roger Stern                
            Marvel Entertainment, 20 Sept 2018 - Comics & Graphic Novels - 360 pages</p>                 
            <button className="btn btn-dark">READ HERE</button>               
          </div>             
        </div>           
      </div>         
    </div>             
    {/* Third Book Card */}             
    <div className="card mb-4" style={{ height: "220px" }}>           
      <div className="row g-0">             
        <div className="col-md-4">               
          <img src={pro4img} alt="Book cover" className="img-fluid" style={{ maxWidth: "200px" }}/>             
        </div>             
        <div className="col-md-8">               
          <div className="card-body">                 
            <h4 className="card-title">Ms. Marvel: The New Mutant</h4>                 
            <p className="card-text">Iman Vellani                
            Marvel Entertainment, 20 Mar 2024 - Comics & Graphic Novels - 120 pages</p>                 
            <button className="btn btn-dark">READ HERE</button>               
          </div>             
        </div>           
      </div>         
    </div>       
  </div>     
  </>   
  ); 
}