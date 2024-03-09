import React from 'react'
import Navbar1 from '../../component/Navbar1/Navbar1'
import './SignUp.css'
import Form from 'react-bootstrap/Form';
import ComponentInput from './ComponentInput';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='signup' >
      <Navbar1 />

        <div   style={{ display: "flex",justifyContent: "center", alignItems: "center",}}> 
        <form  style={{ backgroundColor: "#000",
          width: "70%",
         borderRadius: "20px", boxShadow: "5px 5px 15px #9e9999",color: "#ffffff", textAlign: "center", padding: "30px",
          margin: "50px",
        }}>
            
                 <h2> Create an acount </h2>
                 <h4> Sign UP User </h4>
                 <p className='opacity-50'> Enter your credentials to access your <br /> account</p>

      <div className=' d-flex gap-2 justify-content-between '>
          <div className="mt-5 col-lg-6">
            <label
            className='opacity-50'
              htmlFor="First Name"
              style={{ textAlign: "end", display: "flex" }}
            >
              First Name
            </label>
            {/* <br /> */}
            <input 
             type="text"  name=""  id="" style={{ width: "100%", height: "45px", backgroundColor: "#151516",
             border: "none", borderRadius: "10px", outline: "none", color: "#fff",}} placeholder="Enter your First Name" required/>
          </div>

          <div className="mt-5 col-lg-6">
            <label
                        className='opacity-50'

              htmlFor="First Name"
              style={{ textAlign: "end", display: "flex" }}
            >
Last Name
            </label>
            {/* <br /> */}
            <input 
             type="text"  name=""  id="" style={{ width: "100%", height: "45px", backgroundColor: "#151516",
             border: "none", borderRadius: "10px", outline: "none", color: "#fff",}} placeholder="Enter your Last Name" required/>
          </div>

      </div>

      <ComponentInput label="Email"  placeholder=" Enter your email" type="email" />
      <ComponentInput label="Phone Number"  placeholder=" Enter your Phone Number"  type="number" />
      <ComponentInput label="Address"  placeholder="Enter your Address "  type="text" />
      <ComponentInput label="Gender"  placeholder="Enter Your Gender "  type="text" />
      <ComponentInput label="Postal Code"  placeholder="Enter your Postal Code "  type="number" />
      <ComponentInput label="Password"  placeholder="Enter your password "  type="Password" />
      <ComponentInput label="Confirm Password"  placeholder=" Enter your password"  type="password" />
 

          <button className='my-5 w-50 bg-light text-dark rounded-3 py-2 px-3'> Sign up </button> <br />
          <Link to={"/"} className='opacity-50  my-3 text-light' style={{textDecoration:"none"}}> I already have an account! </Link>
                 
        </form>




        </div>
    </div>
  )
}

export default SignUp
