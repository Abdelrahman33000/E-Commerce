import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Sample data for links
  const linksData = [
    { id: 1, column: 1, text: <img src='/brand.png' alt='' width={200} className='mb-2'/> },
    { id: 2, column: 1, text: <p className='opacity-50'> Donec mattis porta eros, aliquet finibus risus  interdum at. Nulla vivethe as it was for <br /> us to know what was to be done. <br /> the this is a long  post for the text. <br /> `This small text has to be place <br />
  here, since this is </p>},

    { id: 3, column: 1, text:<div> <img src="" alt="" /></div>, url: '/link2' },
    { id: 3, column: 2, text: <p className='mt-5' style={{opacity:".50"}}> About us </p> , url: '/link2' },
    { id: 4, column: 2, text: <p style={{opacity:".50"}}> Services </p> , url: '/link3' },
    { id: 5, column: 2, text: <p style={{opacity:".50"}}> Blog </p> , url: '/link4' },
    { id: 6, column: 2, text: <p style={{opacity:".50"}}>Contact us</p> },

    { id: 7, column: 3, text: <p className='opacity-50 mt-5'>Support</p>, url: '#' },
    { id: 8, column: 3, text: <p className='opacity-50'>Knowledge base</p>, url: '#' },
    { id: 9, column: 3, text: <p className='opacity-50'>Live chat </p> },
    { id: 10, column: 4, text:<p className='opacity-50 mt-5'> Jobs </p>, url: '#' },
    { id: 11, column: 4, text:<p className='opacity-50'>Our team</p>, url: '#' },
    { id: 12, column: 4, text:<p className='opacity-50'>Leadership </p>, url: '#' },
    { id: 13, column: 4, text:<p className='opacity-50'>Privacy Policy</p>, url: '#' },
    { id: 14, column: 5, text:<p className='opacity-50 mt-5'>Nordic Chair</p>, url: '#' },
    { id: 15, column: 5, text:<p className='opacity-50'>Quick Link</p> },
    { id: 16, column: 5, text: <p className='opacity-50' > Ergonomic</p> , url: '#' },


  ];

  // Organize links by columns
  const columns = {};
  linksData.forEach(link => {
    if (!columns[link.column]) {
      columns[link.column] = [];
    }
    columns[link.column].push(link);
  });

  return (
    <div style={{backgroundColor:"#242424"}}>
      <div className='ps-5 pt-3 text-light '>
<p className='mb-5'><img src="/mes2.png" width={30} alt="" className='me-3 '  />   Subscribe to Newsletter </p>  

<div className='d-flex gap-4 flex-wrap '>
  <input type="text" name="" id="" placeholder='Enter your name'  style={{border:"1px solid #fff" , backgroundColor:"#242424" , padding:"5px" , borderRadius:"10px"}}/>
  <input className='' type="text" name="" id="" placeholder='Enter your e-mail' style={{border:"1px solid #fff" , backgroundColor:"#242424" , padding:"5px" , borderRadius:"10px"}} />
  <img src="/mes1.png"width={40} alt="" className='rounded-3' style={{border:"1px solid #fff" , padding:"5px" , cursor:"pointer"}} />
</div>
 </div>
    
    <div className="links-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding:"10px 20px" , backgroundColor:"#242424" }}>

  
      {Object.keys(columns).map(column => (
        <div key={column} style={{ flex: '1 1 10%' ,padding:"20px" }}>
          {columns[column].map(link => (
            <Link  key={link.id} to={link.url} style={{ textDecoration: 'none', color: '#fff', display: 'block', marginBottom: '10px' }}>{link.text}</Link>
          ))}
        </div>
      ))}

    </div>

    <div className='ps-4 d-flex gap-4'>
      <img src="/face.png" alt="" width={20}   style={{boxShadow:"2px 2px 5px #585555" , borderRadius:"10%",cursor:"pointer" , padding:"5px"}}/>
      <img src="/insteg.png" alt="" width={20} style={{boxShadow:"2px 2px 5px #565454" , borderRadius:"10%",cursor:"pointer" , padding:"5px"}}/>
      <img src="/twitt.png" alt="" width={20}  style={{boxShadow:"2px 2px 5px #696666" , borderRadius:"10%",cursor:"pointer" , padding:"5px"}} />
      <img src="/linked.png" alt="" width={20} style={{boxShadow:"2px 2px 5px #4d4c4c" , borderRadius:"10%",cursor:"pointer" , padding:"5px"}}/>
    </div>
    <hr className='my-3 ' style={{border:"2px solid #ffffff"}} />

      <div className='d-flex justify-content-between px-3 pb-3 gap-3'>
        <div style={{color:"#fff"}}> <p className='opacity-50'>Copyright 2024 sybexdesigns@gmail.com. All Rights Reserved.</p>
         </div>
        <div style={{color:"#fff" , opacity:".5"}}> <span className='me-3'> Terms & Conditions </span> <span > Privacy Policy</span></div>
      </div>
    
    </div>
  );
};

export default Footer;
















































// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   // Sample data for links
//   const linksData = [
//     { id: 1, column: 1, text: <img src='/brand.png' alt='' width={200}/> },
//     { id: 2, column: 1, text: 'Subscribe '},
//     { id: 3, column: 1, text: <p style={{opacity:".5"}}>  Get 10% off your first order </p> , url: '/link3' },
//     { id: 4, column: 1, text:<div style={{display:"flex" , alignItems:"center" , border:"2px solid #fff" , borderRadius:"10px" , padding:"10px " ,justifyContent:"space-between"}}>
//          <input type="text" name="" id="" style={{all:"unset"}} placeholder='Enter your email' /> <img src="/arrw1.png" alt="" />
//     </div>,  },
//     { id: 5, column: 2, text: <p><b>Support</b></p> },
//     { id: 6, column: 2, text: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.', url: '/link6' },
//     { id: 7, column: 2, text: 'exclusive@gmail.com ', url: '#' },
//     { id: 8, column: 2, text: '+88015-88888-9999 ', url: '#' },
//     { id: 9, column: 3, text: <p><b>Account </b></p> },
//     { id: 10, column: 3, text: 'My Account', url: '#' },
//     { id: 11, column: 3, text: 'Login / Register', url: '#' },
//     { id: 12, column: 3, text: 'Cart', url: '#' },
//     { id: 13, column: 3, text: 'Wishlist', url: '#' },
//     { id: 14, column: 3, text: 'Shop', url: '#' },
//     { id: 15, column: 4, text: <p><b>Quick Link</b></p> },
//     { id: 16, column: 4, text: 'Privacy Policy', url: '#' },
//     { id: 17, column: 4, text: 'Terms Of Use', url: '#' },
//     { id: 18, column: 4, text: 'FAQ', url: '#' },
//     { id: 19, column: 4, text: 'Contact', url: '#' },
//     { id: 20, column: 5, text: <p><b>Download App</b></p> },
//     { id: 21, column: 5, text: 'Save $3 with App New User Only', url: '#' },
//     { id: 22, column: 5, text: <img src='/footerimg.png' width={200}  alt=''/>, url: '#' },
//     { id: 23, column: 5, text: <div style={{display:"flex" , gap:"10px"}}><img src="/faceicon.png" alt="" width={20} />
//     <img src="/twiitter.png" alt="" width={20} />
//     <img src="/insta.png" alt="" width={20}/>
//     <img src="/linkedin.png" alt="" width={20}/>
//      </div>, url: '#' },
//     // { id: 24, column: 5, text: 'Link 24', url: '#' },
//     // { id: 25, column: 5, text: 'Link 25', url: '#' },
//   ];

//   // Organize links by columns
//   const columns = {};
//   linksData.forEach(link => {
//     if (!columns[link.column]) {
//       columns[link.column] = [];
//     }
//     columns[link.column].push(link);
//   });

//   return (
//     <div className="links-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding:"10px 20px" , backgroundColor:"#000" }}>
//       {Object.keys(columns).map(column => (
//         <div key={column} style={{ flex: '1 1 10%' ,padding:"20px" }}>
//           {columns[column].map(link => (
//             <Link  key={link.id} to={link.url} style={{ textDecoration: 'none', color: '#fff', display: 'block', marginBottom: '10px' }}>{link.text}</Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Footer;
