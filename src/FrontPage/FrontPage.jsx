import React, { useEffect, useRef } from 'react'
import './FrontPage.css'
import gsap from "gsap"; 
// import { useGSAP } from "@useGSAP/react"; 

import image from './BYTEWAVEDOODLE2.jpg'
import logo from './GANGAMATTILOGO.png'
const FrontPage = () => {
        const container = useRef();
      
  return (
   <>
   <div className='main'>
        <div className='landingpage'>
    <div className='Nav-bar'>
        <div className='logo'  ref={container}>
       <img src={logo} alt='logo'/>
<h2>Ganga Matti </h2>
</div>
        <div className='menu'  ref={container}>
<h3>Home</h3>
<h3>About Us</h3>
<h3>Gallery</h3>
<h3>Contact Us</h3>
        </div>
        </div>

        <div className='middle-partlanding'>
                <div className='content'>
<h1>Empowering Change for a Sustainable Future</h1>
</div>
<div className='content2'>
        <h6>

        As the soul or spirit residing within the body, seeking divine knowledge and wisdom through spiritual teachings or guidance.</h6>
</div>
    </div>
    </div>
   
    </div>
</>
   
  )
}

export default FrontPage
