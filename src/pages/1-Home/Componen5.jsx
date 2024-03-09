import React from 'react'

const Component5 = (props) => {
  return (
    <div style={{display:"flex" ,gap:"30px" , flexDirection:"column" , margin:"20px auto"}}>
        <div>
          <img src={props.img} width={30}  alt="" />
          <p> <b> {props.title} </b></p>
          <p> Donec mattis porta eros, aliquet <br /> finibus risus  interdum at. Nulla <br /> vivethe as it was </p>
        </div>

    </div>
  )
}

export default Component5
