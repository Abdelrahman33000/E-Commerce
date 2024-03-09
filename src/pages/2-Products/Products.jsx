import React from 'react'
import Card from '../1-Home/Card'

const Products = () => {
  return (
    <div>
      


      <div className='container my-5'>
    <h2 className='d-flex justify-content-between container'> <p className='container' style={{ color:"red" , borderLeft:"25px solid red" , padding:"2px 20px"}}> <b>Wishlist (4)</b> </p>
  <button className='btn btn-outline-dark ' style={{width:"120px"}} >See All</button>  </h2>

   <div className='row justify-content-between   container my-5 '>
<div className=" col-lg-3  ">
       <Card   img="/pyc.png" price1="960" price2="$1160" dis="-35%" description="lorem" />
  
</div>     
<div className=" col-lg-3  ">
  <Card className=" col-lg-2" img="/card2.png"  price1="1960" description="lorem"/>
  
</div>  
<div className=" col-lg-3 ">
     <Card className=" col-lg-2" img="/card3.png"  price1=" 550"  description="lorem"/>
  
</div>   
<div className=" col-lg-3 ">
    <Card className=" col-lg-2" img="/card4.png"   price1="750" description="lorem" />
  
</div>   </div>
</div>






      <div className='container my-5'>
    <h2 className='d-flex justify-content-between container'> <p className='container' style={{ color:"red" , borderLeft:"25px solid red" , padding:"2px 20px"}}> <b>Just For You</b> </p>
  <button className='btn btn-outline-dark px-2' style={{width:"100px"}} >See All</button>  </h2>

   <div className='row justify-content-between   container my-5 '>
<div className=" col-lg-3  ">
       <Card   img="/pyc.png" price1="260"  price2="$360"   description="lorem" dis="-35%"/>
  
</div>     
<div className=" col-lg-3  ">
  <Card className=" col-lg-2" img="/card2.png"  price1="960"  price2=" $1160"  description="lorem"/>
  
</div>  
<div className=" col-lg-3 ">
     <Card className=" col-lg-2" img="/card3.png"  price1=" 160"  price2="$170"  description="lorem"/>
  
</div>   
<div className=" col-lg-3 ">
    <Card className=" col-lg-2" img="/card4.png"   price1="360"  description="lorem"  />
  
</div>   </div>
</div>
    </div>
  )
}

export default Products
