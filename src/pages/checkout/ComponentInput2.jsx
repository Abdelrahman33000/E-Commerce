import React from 'react'

const ComponentInput2 = (props) => {
  return (
    <>
         <div className="mt-5 col-lg-12 ">
            <label
            className='opacity-50'
              htmlFor=""
              style={{ textAlign: "end", display: "flex" }}
            >
             {props.label}
            </label>
            {/* <br /> */}
            <input 
             type={props.type}  name=""  id="" style={{ width: "100%", height: "45px",backgroundColor:"#f5f5f5",
             border: "none", borderRadius: "10px", outline: "none", color: "#fff",}} placeholder={props.placeholder}  required/>
          </div> 

    </>
  )
}

export default ComponentInput2