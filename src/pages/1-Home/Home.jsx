import React, { useEffect, useState } from 'react'
import ComponentIcon from './Componen5'
import Carousel from 'react-bootstrap/Carousel';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Swiper.css'
// import required modules
import { FreeMode, Pagination ,Autoplay } from 'swiper/modules';

import './Home.css'
import Card from './Card';
import { Link } from 'react-router-dom';
const Home = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2025-02-22"); // تاريخ الانتهاء بعد 3 أيام
    const difference = endDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { timeLeft, isFinished: difference <= 0 };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { timeLeft, isFinished } = time;

  if (isFinished) {
    return <div>Time's up!</div>;
  }

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }



  timerComponents.push(
    <div key={interval}>
    <span style={{ fontSize: "0.8em" }}>{interval}</span><br />
    <span style={{ fontSize: "1.5em" }}>{timeLeft[interval]}</span>
    {interval !== "Seconds" && <span className='mx-2' style={{ fontSize: "1.5em" , color:"red" }}> : </span>}
  </div>
  );
});

  return (
    <div>

<div className='hero' style={{display:"flex" , alignItems:"center" , padding:"0 30px" }}>
<div style={{display:"flex" , flexDirection:"column"}}>
    
    <h2 style={{color:"#fff"}}> Fast shipping  <br />
    at Low Costs</h2>
    
    <div style={{display:"flex" , gap:"30px" , marginTop:"30px"}}>
        <button  style={{color:"#000" , backgroundColor:"#fff" , padding:"7px 30px" , borderRadius:"20px"}}> <Link to={"/products"} style={{textDecoration:"none",color:"#000"}}> Shop Now</Link> </button>
        <button  style={{  color:"#fff" , border:"1px solid #fff" , padding:"7px 30px" , borderRadius:"20px"}}> Explore</button>
    </div>
    
</div>

</div>






<div className='my-5 container'>
<p style={{ color:"red" , borderLeft:"15px solid red" , padding:"2px 20px"}}> <b>Today’s</b> </p>
  <div className='d-flex gap-5 align-items-center'>
      <h2> Flash Sales  </h2>
      <div className='d-flex gap-1' style={{fontSize:"20px" , fontWeight:"bolder"}}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  </div>

  <div className='text-center my-5'>
  <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}

         
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400:{
          slidesPerView:1,
        },
        639: {
          slidesPerView: 1,
        },
        865:{
          slidesPerView:2
        },
        1000:{
          slidesPerView:2
        },
        1500:{
          slidesPerView:4
        },
        1700:{
          slidesPerView:4
        }
      }}
      effect={'coverflow'}
      grabCursor={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}

      >
        <SwiperSlide className='sw'>  <Card description="lorem"  img="/sho.png" price1="$960"  dis="-40%"  price2=" $1160"/> </SwiperSlide>
        <SwiperSlide className='sw'>  <Card description="lorem"  img="/tv1.png" price1="$370"  dis="-35%" price2=" $400"/> </SwiperSlide>
        <SwiperSlide className='sw'>  <Card description="lorem"  img="/pyc.png" price1="$375"  dis="-30%" price2=" $$400"/> </SwiperSlide>
        <SwiperSlide className='sw'>  <Card description="lorem"  img="/frsz.png" price1="$260"  dis=" -25%" price2=" $360"/> </SwiperSlide>
        <SwiperSlide className='sw'>  <Card description="lorem"  img="/cha.png" price1="$375"  dis=" -25%" price2=" $400"/> </SwiperSlide>
        <SwiperSlide className='sw'>  <Card description="lorem"  img="/tv1.png" price1="$370"  dis="-35%" price2=" $400"/> </SwiperSlide>

    
  
      </Swiper>


<div>
      <button className='btn btn-danger my-5'> View All Products </button>
  
</div>
  </div>

</div>






<div className='my-5 container'>
<p style={{ color:"red" , borderLeft:"15px solid red" , padding:"2px 20px"}}> <b>Categories</b> </p>
    <h2 className='mb-5'> Browse By Category  </h2>

    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        className="mySwiper"
        
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
       


            
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400:{
          slidesPerView:1,
        },
        639: {
          slidesPerView: 1,
        },
        865:{
          slidesPerView:2
        },
        1000:{
          slidesPerView:2
        },
        1500:{
          slidesPerView:4
        },
        1700:{
          slidesPerView:4
        }
      }}
      effect={'coverflow'}
      grabCursor={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}

      >
        <SwiperSlide className='sliderSw'><img src="/phone.png" alt="" style={{width:"100px"}}/><br /> Phones </SwiperSlide>
        <SwiperSlide className='sliderSw'><img src="/tv.png" alt="" style={{width:"100px"}}/><br /> Computers </SwiperSlide>
        <SwiperSlide className='sliderSw'><img src="/us.png" alt="" style={{width:"100px"}}/><br /> SmartWatch </SwiperSlide>
        <SwiperSlide className='sliderSw'><img src="/cam.jpg"  alt="" style={{width:"100px"}} /><br /> Camera </SwiperSlide>
        <SwiperSlide className='sliderSw'><img src="/music.png" alt="" style={{width:"100px"}}/><br /> HeadPhones </SwiperSlide>
        <SwiperSlide className='sliderSw'><img src="/add.png" alt="" style={{width:"100px"}}/><br /> Gaming </SwiperSlide>
      
      </Swiper>

</div>






<div className='container'>
<p className='container' style={{ color:"red" , borderLeft:"15px solid red" , padding:"2px 20px"}}> <b>This Month</b> </p>
    <h2 className='d-flex justify-content-between container'> Best Selling Products   <button className='btn btn-danger' >View All </button>  </h2>

   <div className='row justify-content-between   container my-5 '>
<div className=" col-lg-3  ">
       <Card   img="/pyc.png" price1="$260"  price2=" $360"   description="lorem"/>
  
</div>     
<div className=" col-lg-3  ">
  <Card className=" col-lg-2" img="/card2.png"  price1="$960"  price2=" $1160"  description="lorem"/>
  
</div>  
<div className=" col-lg-3 ">
     <Card className=" col-lg-2" img="/card3.png"  price1=" $160"  price2="$170"  description="lorem"/>
  
</div>   
<div className=" col-lg-3 ">
    <Card className=" col-lg-2" img="/card4.png"   price1="$360"  price2=""  description="lorem"/>
  
</div>   </div>
</div>






<div className='container my-5' >
<Carousel fade style={{width:"100%"}} className='d-flex align-items-center  justify-content-end'>
      <Carousel.Item>
        <img src='/iphone-13.jpg' alt='' text="First slide"  style={{width:"100%"  , height:"500px"}} />
        <Carousel.Caption>
          <p className='d-flex align-items-center gap-2'> <img src="/apple.png" alt="" width={30}  />   iPhone 14 Series </p>
          <h2>Up to 10% <br /> off Voucher</h2>
          <button className='py-2 px-3' style={{borderBottom:"2px solid #ffffff" }}> Shop Now </button> <img src="/arrow5.png" width={20} alt="" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/iPhone.jpg' alt='' text="First slide"  style={{width:"100%"  , height:"500px"}} />
        <Carousel.Caption>
          <p className='d-flex align-items-center gap-2'> <img src="/apple.png" alt="" width={30}  />   iPhone 14 Series </p>
          <h2>Up to 10% <br /> off Voucher</h2>
          <button className='py-2 px-3' style={{borderBottom:"2px solid #ffffff" }}> Shop Now </button> <img src="/arrow5.png" width={20} alt="" />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='/iphomee4.jpg' alt='' text="First slide"  style={{width:"100%"  , height:"500px"}} />
        <Carousel.Caption>
          <p className='d-flex align-items-center gap-2'> <img src="/apple.png" alt="" width={30}  />   iPhone 14 Series </p>
          <h2>Up to 10% <br /> off Voucher</h2>
          <button className='py-2 px-3' style={{borderBottom:"2px solid #ffffff" }}> Shop Now </button> <img src="/arrow5.png" width={20} alt="" />
        </Carousel.Caption>
      </Carousel.Item>


     
    </Carousel>
</div>




<div className='container my-5 '>
    <p style={{ color:"red" , borderLeft:"15px solid red" , padding:"2px 20px"}}> <b>Featured</b> </p>
    <h2> New Arrival </h2>

<div className='d-flex gap-5 flex-wrap justify-content-between row'>
  <div className=' col-lg-4'> 
    
       <div className='ch1 bg-dark ps-5  align-items-end  d-flex '  >
    <div className='mb-5'>
      <h2 className='text-light'> PlayStation 5 </h2>
      <p className='text-light opacity-50'> Black and White version of the PS5 <br /> coming out on sale. </p>
      <button className='rounded-5' style={{border:"1px solid #fff", padding:"5px 30px ", color:"#fff"}}> Shop Now </button>
    </div>
       </div>
        
  </div>

<div className='col-lg-6'>
  
       <div className='ch2 bg-dark ps-5 align-items-end   d-flex '  >
    <div className='mb-5'>
      <h2 className='text-light'> Women’s Collections </h2>
      <p className='text-light opacity-50'> Featured woman collections that <br /> give you another vibe. </p>
      <button className='rounded-5' style={{border:"1px solid #fff", padding:"5px 30px ", color:"#fff"}}> Shop Now </button>
    </div>
       </div> 
  
<div className='d-flex my-5 gap-5 justify-content-between'>
  
         <div className='ch3 bg-dark ps-4 align-items-end   d-flex  w-100'  >
      <div className='mb-5'>
        <p className='text-light'> <b>Women’s Collections</b> </p>
        <p className='text-light opacity-50'> Featured woman collections that <br /> give you another vibe. </p>
        <button className='rounded-5' style={{border:"1px solid #fff", padding:"5px 20px ", color:"#fff"}}> Shop Now </button>
      </div>
         </div> 
  

         <div className='ch4 bg-dark ps-4 align-items-end w-100  d-flex '  >
      <div className='mb-5'>
        <p className='text-light'> <b>Women’s Collections </b></p>
        <p className='text-light opacity-50'> Featured woman collections that <br /> give you another vibe. </p>
        <button className='rounded-5' style={{border:"1px solid #fff", padding:"5px 20px ", color:"#fff"}}> Shop Now </button>
      </div>
         </div> 
         
    
</div>
</div>




</div>


</div>






        <div className="container">
            <h2> Why Choose Us </h2>
            <p> Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe <br /> as it was for us to know what was to be done. the</p>
<div className='row' style={{display:"flex" , justifyContent:"space-between", alignItems:"center" }}>
    
    <div className='col-lg-5' style={{display:"flex" ,gap:"30px" , flexDirection:"column"}}>
    <div style={{display:"flex" , gap:"30px" }}>
<ComponentIcon title="Fast  & Free Shipping  " img="/iconcar.png"/>


<ComponentIcon title=" Easy to Shop " img="/icon2.png"/>
        </div>
        <div style={{display:"flex" , gap:"30px" }}>

        <ComponentIcon title=" 24/7 Support "  img="/icon3.png" />

        <ComponentIcon title=" Hassle Free Returns " img="/icon4.png" />


        </div>
    </div>


   <div className='col-lg-3  col-md-4   my-5' style={{display:"flex", flexDirection:"column" }}>
     
     <img src="/img5.png" alt=""   />
     <img src="/ship.png" alt="" />
     
   </div>
    
</div>
        </div>
    </div>
  )
}

export default Home