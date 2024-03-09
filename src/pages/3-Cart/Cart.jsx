import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { BsTrash3 } from "react-icons/bs";
import './cart.css'
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const removeFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (index, event) => {
    const { value } = event.target;
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = parseInt(value, 10) || 1;
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setCartItems(updatedItems);
  };

  const calculateSuper = () => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.price * (item.quantity || 1));
    }, 0);
  };

  return (
    <div className='container '>
    <h1 className='my-5'>Cart</h1>
    <div className='my-5 p-2 ' style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" , border:"1px solid #434242" , }}>
        <p>Product</p>
        <p>Price</p>
        <p >Quantity</p>
        <p>Subtotal</p>
        <p><BsTrash3 /></p>
      </div>
    <div className='pro'>
        {cartItems.map((item, index) => (
          <div key={index} className='my-5 p-2 pro ' style={{display: "flex", justifyContent: "space-between" , border:"1px solid #434242" , alignItems:"center"}}>
          <div className='d-flex gap-2 align-items-end '>
              <img src={item.img} alt="Item" width={50} />
              <p>{item.description}</p>
          </div>
            <p className='me-5' style={{ color: "red" }}>Price: ${item.price}</p>
            <input className='me-5' type="number" style={{width:"50px"}} value={item.quantity || 1} onChange={(e) => handleQuantityChange(index, e)} />
            <p className='me-5'>${item.price * (item.quantity || 1)}</p> {/* Multiply price by quantity */}
            <button onClick={() => removeFromCart(index)}><BsTrash3 /></button>
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-between '>
      <Link to={"/products"}>  <button className='btn btn-outline-dark'>Return To Shop</button></Link>
       <Link to='#'><button className='btn btn-outline-dark'>Update Cart</button> </Link> 
      </div>

      <div className='d-flex justify-content-between my-5 flex-wrap'>
<div>
  <input type="text" name="" id="" placeholder='Coupon Code'  className='p-2 me-3'/>
<button className='btn btn-danger p-2 my-3'>Apply Coupon</button>
</div>
<div className='p-3 rounded-5 shadow-lg cart' style={{border:"1px solid #000" ,width:"30%"}}>
<p><b>Cart Total</b></p>
<p className='d-flex  justify-content-between'> Subtotal: <span>{calculateSuper()}</span> </p>
<hr />
<p className='d-flex  justify-content-between'>Shipping: <span>Free</span></p>
<hr />
<p className='d-flex  justify-content-between'> Total: <span>{calculateSuper()}</span></p>
<br />
<div className='d-flex  justify-content-center'>
  <Link  to={{ pathname: '/checkout', state: { cartItems } }}> <button className='btn btn-danger my-3'>Procees to checkout</button> </Link>
</div>
</div>
      </div>
      {/* <p>Super: {calculateSuper()}</p> Display the super total */}

    {/* {items.map((item, index) => (
        <div key={index} style={{ width: "500px" }}>
          <img src={item.img} alt="Item" width={50} />
          <p>{item.description}</p>
          <p style={{ color: "red" }}>Price: {item.price}</p>
        </div>
      ))} */}
       

    </div>
  )
}

export default Cart