import React from 'react';
import Navbar from '../components/navbar' // Adjust the path if needed

export default function Login() {
  
  return (
    <>
    <Navbar/>
   <div style={{
      "width":"25%",
      }}
      className="container mx-auto my-5">
      <h1 className='text-center'>Login</h1>
     <form>
       <div className="mb-3">
         <label for="exampleInputEmail1" className="form-label">Email address</label>
         <input type="text"
         className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       </div>
       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Password</label>
         <input type="number"
         className="form-control" id="exampleInputPassword1"/>
       </div>
       <div className="mb-3 form-check">
         <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
         <label className="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
        <button type="submit" className="btn btn-dark">Login</button>
     </form>
   </div>
    </>
  )
}
