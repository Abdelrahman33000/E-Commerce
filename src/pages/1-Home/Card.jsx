import React, { useState } from 'react';
import './Card.css';
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import { Rating } from 'react-simple-star-rating'
const Card = (props) => {
  const navigate = useNavigate();


  const addToCart = () => {
    // Get the existing cart items from local storage or initialize an empty array
    const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the item already exists in the cart
    const isItemInCart = existingItems.some(item => item.img === props.img && item.description === props.description && item.price === props.price1);

    // If the item is not already in the cart, add it
    if (!isItemInCart) {
      // Add the current item to the cart
      const updatedItems = [...existingItems, {
        img: props.img,
        description: props.description,
        price: props.price1
      }];

      // Save the updated cart items back to local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

      // Redirect to cart page
      navigate('/checkout');
      navigate('/cart');
    } else {
      // If the item is already in the cart, alert the user or handle it as desired
      alert('This item is already in your cart!');
    }
  };


  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')


  const [heartColor, setHeartColor] = useState('white');
  const [showPopup, setShowPopup] = useState(false);

  const toggleHeartColor = () => {
    setHeartColor(heartColor === 'white' ? 'red' : 'white');
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };


  return (
    <div className="card  my-3  " style={{height:"460px"}}>
         <div>
      <img src={props.img} alt="Card" className="card-image" style={{height:"300px"}} />
      <i className={`fa${isRed ? 's' : 'r'} fa-heart`} onClick={handleClick} style={{ color: isRed ? 'red' : 'white', cursor: 'pointer' }}></i>
    </div>
    <button  className='btn btn-dark ' style={{position:"absolute" , top:"58%", right:"0", left:"0"}} onClick={addToCart}>
    <BsCart3 /> Add To Cart </button>
      <div className="card-icons ">
        
<div className='d-flex    pe-2 my-2' style={{backgroundColor:"#615d5d" ,width:"35px",height:"35px", borderRadius:"50%", alignItems:"center"}}>
            <i className="fa fa-heart" style={{ color: heartColor }} onClick={toggleHeartColor}></i>
    
</div>    
    <i className="fa fa-eye bg-light rounded-5" onClick={togglePopup}></i>
      </div>
{props.dis && <p className='py-1 px-4 rounded-3' style={{position:"absolute" , top:"20px" , left:"30px" , backgroundColor:"red"}}>{props.dis} </p>
}      <p className='ps-3 text-start'><b>{props.description}</b></p>
   <div className='ps-3' style={{display:"flex ", gap:"10px"}}>
       <p>${props.price1}</p>
       <p style={{textDecoration: 'line-through' , opacity:".5"}}>{props.price2}</p> 
   </div>
     <div className='d-flex ' style={{scale:".7" , marginRight:"200px" , alignItems:"center"}}>

       <Rating 
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
          /> <b>(99)</b>
     </div>

      {showPopup && (
        <div className="popup ">
          <span className="close-popup" onClick={togglePopup}>&times;</span>
          <img src={props.img} alt="Popup" className="popup-image mx-5" />
          <p className='text-light '><b>{props.description}</b></p>
      <p className='text-light'>{props.price1}</p>
      <p className='text-light'>{props.price2}</p>
      {/* <Rating  className='mb-5'
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
          /> */}
        </div>
      )}

    </div>



  );
};

export default Card;
