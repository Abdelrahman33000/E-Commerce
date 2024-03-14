import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { BsTrash3 } from "react-icons/bs";
import {Button} from 'react-bootstrap'
import ComponentInput2 from './ComponentInput2';
import Stepper1 from '../../component/Steper';
import './Checkout .css'
const Checkout = () => {
  const [cartItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCheckoutItems(storedItems);
  }, []);

  const removeFromCheckout = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setCheckoutItems(updatedItems);
  };

  const handleQuantityChange = (index, event) => {
    const { value } = event.target;
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = parseInt(value, 10) || 1;
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setCheckoutItems(updatedItems);
  };

  const calculateSuper = () => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.price * (item.quantity || 1));
    }, 0);
  };


  const [checkout, setCheckout] = useState(true)
  const [order, setOrder] = useState(false)
  const [myOrder , setMyOrder] = useState(false)
  return (
    <>
    
  {checkout &&  <div className='container d-flex justify-content-between flex-wrap'>

<div>
  <h1 className='my-5'>Enter Details</h1>
    <ComponentInput2 label="First Name*"  placeholder=" Enter your First Name*" type="text"  />
      <ComponentInput2 label="Company Name"  placeholder=" Enter your Company Name"  type="text" />
      <ComponentInput2 label="Street Address*"  placeholder="Enter your Street Address* "  type="text" />
      <ComponentInput2 label="Apartment, floor, etc. (optional)"  placeholder=" Apartment, floor, etc. (optional) "  type="text" />
      <ComponentInput2 label="Town/City*"  placeholder="Enter your Town/City* "  type="text" />
      <ComponentInput2 label="Phone Number*"  placeholder="Enter your Phone Number* "  type="number" />
      <ComponentInput2 label="Email Address*"  placeholder=" Enter your Email Address*"  type="email" />
      <input type="checkbox" name="" id=""  className='my-5'/> <span>  Save this information for faster check-out next time</span>
  
</div>

<div>


  <div>
      {cartItems.map((item, index) => (
        <div key={index} className='my-5 p-2' style={{display: "flex", justifyContent: "space-between" , border:"1px solid #434242" , alignItems:"center"}}>
        <div className='d-flex gap-2 align-items-end '>
            <img src={item.img} alt="Item" width={50} />
            <p>{item.description}</p>
        </div>
          {/* <p className='me-5' style={{ color: "red" }}>Price: ${item.price}</p> */}
          {/* <input className='me-5' type="number" style={{width:"50px"}} value={item.quantity || 1} onChange={(e) => handleQuantityChange(index, e)} /> */}
          <p className='me-5'>${item.price * (item.quantity || 1)}</p> {/* Multiply price by quantity */}
          <button onClick={() => removeFromCheckout(index)}><BsTrash3 /></button>
        </div>
      ))}
    </div>

    {/* <div className='d-flex justify-content-between '>
    <Link to={"/products"}>  <button className='btn btn-outline-dark'>Return To Shop</button></Link>
      <Link to='#'><button className='btn btn-outline-dark'>Update Checkout</button> </Link> 
    </div> */}

    <div className=' my-5'>

<div className='p-3 rounded-5 shadow-lg' style={{border:"1px solid #000", width:"100%" }}>
{/* <p><b>Checkout Total</b></p> */}
<p className='d-flex  justify-content-between'> Subtotal: <span>{calculateSuper()}</span> </p>
<hr />
<p className='d-flex  justify-content-between'>Shipping: <span>Free</span></p>
<hr />
<p className='d-flex  justify-content-between'> Total: <span>{calculateSuper()}</span></p>

{/* <br />
<div className='d-flex  justify-content-center'>
<Link  to={{ pathname: '/checkout', state: { cartItems } }}> <button className='btn btn-danger my-3'>Procees to checkout</button> </Link>
</div> */}
</div>

<div className='my-3 mx-2'>
<div>
<div className='d-flex align-items-center justify-content-between'  >
          <span> <input type="radio" name="g" value={"ll"} id="kk" className='my-3' />  Bank</span> <br />
  <div className='d-flex gap-2'>
      <img src="/c1.png" alt=""  width={35}/>
      <img src="/c2.png" alt=""  width={35}/>
      <img src="/c3.png" alt=""  width={35}/>
      <img src="/c4.png" alt=""  width={35}/>
  </div>
</div>    

      <input type="radio" name="g" value={"hh"} id="nm" /> <span>Cash on delivery</span>
  
</div>    
  
</div>
    </div>
    <div className='mx-5 my-3'>
<input type="text" name="" id="" placeholder='Coupon Code'  className='p-2 me-3'/>
<button className='btn btn-danger p-2 my-3'>Apply Coupon</button>
</div>
<button className='btn btn-danger p-2 mb-5 mx-5' onClick={() => {
  setCheckout(false)
  setOrder(true)
}
}>Place Order</button>
</div>


  </div>}



{order && <div className='my-5  d-flex flex-column w-100 justify-content-center align-items-center'>
  <h1><b>SUCCESS!</b></h1>
<div className='w-50'>
    <img src="/pic1.png" alt="" style={{width:"100%"}}/>
  
</div>  <p>Your order will be delivered soon. <br />
Thank you for choosing our app!</p>
<button className='btn btn-dark py-2 px-5 w-50' onClick={() => {
  setCheckout(false);
  setOrder(false);
  setMyOrder(true);
}
}> Track your orders </button> <br /> <br />
<button className='btn btn-dark py-2 px-5 w-50'>Back To Home</button>
  
  </div>}

{myOrder&& <div className=' order ' >
<div className='w-50 mx-auto bg-dark rounded-5 text-light py-1 pb-5'>
  <h2 className='my-5' style={{textAlign:"center " }}> My Order </h2>
  
<div className='my-5'>
      <Stepper1  />
  
</div>
<div style={{backgroundColor:"#353537"}} className='w-50 rounded-3 p-2 mx-auto'>
 <div className='d-flex justify-content-between'>
   <p> Order No238562312 </p>
   <p> <span className='opacity-50'>20/03/2020</span></p>
 </div>
  <hr style={{fontWeight:"bolder"}} />
  <div className='d-flex justify-content-between'>
   <p><span className='opacity-50'> Quantity:</span> 03 </p>
   <p> <span className='opacity-50'>Total Amount:</span> $150</p>
 </div>

 <div className='d-flex justify-content-between'>
   <button className='bg-dark px-3'>Detail </button>
   <p>Processing </p>
 </div>

</div>


<div style={{backgroundColor:"#353537"}} className='w-50 rounded-3 p-2 mx-auto my-5 '>
 <div className='d-flex justify-content-between'>
   <p> Order No238562312 </p>
   <p> <span className='opacity-50'>20/03/2020</span></p>
 </div>
  <hr style={{fontWeight:"bolder"}} />
  <div className='d-flex justify-content-between'>
   <p><span className='opacity-50'> Quantity:</span> 03 </p>
   <p> <span className='opacity-50'>Total Amount:</span> $150</p>
 </div>

 <div className='d-flex justify-content-between'>
   <button className='bg-dark px-3'>Detail </button>
   <p style={{color:"green"}}>Delivered </p>
 </div>

</div>



<div style={{backgroundColor:"#353537"}} className='w-50 rounded-3 p-2 mx-auto mb-5'>
 <div className='d-flex justify-content-between'>
   <p> Order No238562312 </p>
   <p> <span className='opacity-50'>20/03/2020</span></p>
 </div>
  <hr style={{fontWeight:"bolder"}} />
  <div className='d-flex justify-content-between'>
   <p><span className='opacity-50'> Quantity:</span> 03 </p>
   <p> <span className='opacity-50'>Total Amount:</span> $150</p>
 </div>

 <div className='d-flex justify-content-between'>
   <button className='bg-dark px-3'>Detail </button>
   <p style={{color:"red"}}>Canceled </p>
 </div>

</div>


</div>

</div>}

    </>

  )
}

export default Checkout