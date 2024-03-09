// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import './Navbar.css'
// const Navbar = () => {

//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showDropdown1, setShowDropdown1] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const toggleDropdown1 = () => {
//     setShowDropdown1(!showDropdown1);
//   }; 
//   // Sample data for links
//   const links = [
//     { id: 1, text: 'Home', url: '/home' },
//     { id: 2, text: 'Contact', url: '/contact' },
//     { id: 3, text: 'About', url: '/about' },
//   ];

//   return (
//     <nav className="navbar" style={{backgroundColor:"#000" , padding:"15px 30px", display:"flex" , justifyContent:"space-between"}}>
//       <div className="navbar-left">
//         <img src="/brand.png" alt="Logo" width={150} />
//       </div>
//       <div className="navbar-right  " style={{display:"flex", gap:"30px" , alignItems:"center"}}>
//         {links.map(link => (
//           <Link key={link.id} to={link.url} style={{textDecoration:"none", color:"#fff"}}>{link.text}</Link>
//         ))}
//         <div className="dropdown" style={{margin:"auto 30px", position: "relative"}}>
//           <button onClick={toggleDropdown} className="dropbtn" style={{all:"unset" , color:"#fff"}}>
            
//           Signup As
//             <img src="/arrow.png" alt="" width={20}/>
//             </button>
//           {showDropdown && (
//             <div className="dropdown-content" style={{zIndex:"5", display:"flex" , flexDirection:"column", position: "fixed", top: "50px" , backgroundColor:"#ffffff" , border:"2px solid #000" , padding:"10px", gap:"10px" , borderRadius:"10px 0 10px 0" , boxShadow:"2px 2px 5px #000"}}>
//               <Link  to="#">Option 1</Link>
//               <Link  to="#">Option 2</Link>
//               <Link  to="#">Option 3</Link>
//             </div>
//           )}
//         </div>


//       </div>

// <div className="dropdown1" style={{margin:"auto 30px", position: "relative"}}>
//           <button onClick={toggleDropdown1} className="dropbtn" style={{all:"unset" , color:"#fff"}}>
            
//             <img src="/menu-512.webp" alt="" width={30}/>
//             </button>
          
//         </div>
//     </nav>
//   )
// }

// export default Navbar




import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import "./Navbar.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [showModel, setShowModel] = useState(false);
  const lists = [
    { tittle: " Home", id: "1 ", url: "/home" },
    { tittle: " Contact", id: "2 ", url: "/contact" },
    { tittle: " About", id: "3 ", url: "/about" },
  ];

      const [showDropdown, setShowDropdown] = useState(false);

      const toggleDropdown = () => {
            setShowDropdown(!showDropdown);
          };
  return (
    <header className="px-5 py-10 ">
          <div className="navbar-left">
       <img src="/brand.png" alt="Logo" width={150} />
     </div>
      <button
        className="btn1 menu1 "
        onClick={() => {
          setShowModel(true);
        }}
      >

<img src="/menu-512.webp" alt="" width={30}/>
      </button>
      {/* <div /> */}
    
    
     
    
      <nav>
        {lists.map((list) => (
          <Link className="list" to={list.url} key={list.id}>
            {list.tittle}
          </Link>
        ))}
       

<DropdownButton
          style={{backgroundColor:"#000 !important"}}
            as={ButtonGroup}
            className='drop'
            // key={variant}
            // id={`dropdown-variants-${variant}`}
            // variant={variant.toLowerCase()}
            title={" Signup As"}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
      </nav>
      {/* <button className="icon-moon-o" /> */}

      {showModel && (
        <div className="model">
          <div className="popup">
            <div style={{ textAlign: "right" }}>
              <button className="icon-close"
                
                onClick={() => {
                  setShowModel(false);
                }}
              ><img src="/icons8-close (1).svg" alt="" width={30}/></button>
              
            </div>
            {lists.map((list) => (
              <Link onClick={() => {
                setShowModel(false);
              }} className="list" to={list.url} key={list.id}>
                {list.tittle}
              </Link>
            ))}

<DropdownButton
          style={{backgroundColor:"#000 !important"}}
            as={ButtonGroup}
            className='drop'
            // key={variant}
            // id={`dropdown-variants-${variant}`}
            // variant={variant.toLowerCase()}
            title={" Signup As"}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
