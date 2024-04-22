import React from 'react'
import './Ending.css'
import logo1 from './GANGAMATTILOGO.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const Ending = () => {

  return (
    <>
    <div className='main-howitwork'>
      
        <div className='howitwork'> 
        <h4>How it work</h4>
        <h2>We're Taking Action for the Planet</h2>
        <h6>At the heart of our mission lies a commitment to understanding and addressing the most pressing environmental challenges of our time</h6>

        </div>
        <div className='ndsection'>
        <div className='secondsection1'>
         <div className='no'>

         </div>
         <div className='secondsectioncontent1'>
            <h4>
            Environment Research
            </h4>
            <p>
         
The aim of environmental research is to comprehend the workings of the natural world and assess how human activities impact the environment.
            </p>
            <hr></hr>

         </div>
         

        </div>
        <div className='secondsection1'>
        
         <div className='secondsectioncontent1'>
            <h4>
            Rationalization    
            </h4>
            <p>
            Rationalization in environmental studies is the process of making environmental decisions based on reason and logic.

            </p>
            <hr></hr>

         </div>
         </div>
         <div className='secondsection1'>
       
         <div className='secondsectioncontent1'>
            <h4>
            Implementation
            </h4>
            <p>
            Selecting the right implementation environment can be complex due to the numerous factors that need careful consideration.            </p>
            <hr></hr>

         </div>
         </div>
         
         </div>
       
    </div>
    <div className='Image-card-with-hover'>
      <div className='containeriiimage' >
      <div className='image-cards'>
      <img src='https://img.freepik.com/free-vector/hand-drawn-valentine-s-day-illustration_23-2149228808.jpg?t=st=1713253438~exp=1713257038~hmac=89ba290aa0bf3065d0869be937f1c7f26f3e84987d7d27d53d8c3a41fa4b878f&w=740' alt="" className="card-image" />
      <div className="image-overlay">
        <p className="image-name">Jane Doe <br/>Senior Biologist</p>
      </div>
      </div>
      <div className='image-cards'>
      <img src='https://img.freepik.com/free-vector/pretty-girl-with-bouquet_1020-120.jpg?t=st=1713253780~exp=1713257380~hmac=e1d6a130548e58e8bc6837b62d3171bf3287995c09b8a30e19c0d0cd46a91a65&w=740' alt="" className="card-image" />
      <div className="image-overlay">
        <p className="image-name">Jullia Milly<br/>Senior Biologist</p>
      </div>
      </div>
      <div className='image-cards'>
      <img src="https://img.freepik.com/free-vector/hand-drawn-cottagecore-illustration_52683-148750.jpg?t=st=1713253689~exp=1713257289~hmac=feb7e2c29aa52a5116075011da75dce87555214b309c1c5011ba873d64fa05f2&w=740" alt="" className="card-image" />
      <div className="image-overlay">
        <p className="image-name">Ema Milly <br/>Senior Activist</p>
      </div>
      </div>
      </div>
    </div>
    <div className='join-our-community'>
  <div className="image-container">
    <img src="https://img.freepik.com/free-vector/love-sign-background-hand-doodle-frame-black-white-vector_53876-156614.jpg?t=st=1713424102~exp=1713427702~hmac=784eb19b2f81c8d494ae43a5424fa0a117b5d2a557155105d2c0027d5665f550&w=900" alt="" className="imageee" />
    <div className="overlay-box">
      <h2> Join Our Communit</h2>
      <p>
      Lokapana 121, Burn Swis <span class="email">wildgreen@domain.com</span> <span class="phone">+23 8282 2929</span></p>
      <div class="join-community-container">
  <input type="email" placeholder="Enter your email" class="email-input" />
  <button class="join-button">Join Community</button>
</div>
        </div>
  </div>
</div>
<div className='contact-us-card'>
    <div className='main-contact-card-box1'>
      <div className='logo-with-name'>
    <img src={logo1}  alt='logo'/>
    <div className='logo-abt'>
    <h2> Ganga Matti</h2>
        

        <p> Go green save earth </p>
        </div>
      </div>
      <div className='page'>
      <div className='page1'>  <h5> Page</h5> <i class="fa-solid fa-file"></i></div> 
      <div className='inside-page'>
        <p>Team</p>
        <p>Project</p>
        <p>Blog</p>
        </div>
        </div>
       
        <div className='location'>
     

        <div className='location1'>
        

<h5>Our Location </h5> <i className="fa-solid fa-location-dot"></i></div>

 <div className='our-location'>
  <p> ByteWave Dhanbad</p>
       <p>India</p>
  </div>
  </div>

        <div className='information'>
        <div className='information1'> <h5>Information </h5><i class="fa-solid fa-circle-info"></i></div> 
        <div className='infoo'>
          <p>
  +23 8282 2929</p>
  <p>gangamatti@domain.com </p>
  </div>
        </div>
        <div className='Gallery'>
      <div className='Gallery1'><i class="fa-solid fa-photo-film"></i><h5>Gallery</h5></div>  

          <div className="photo-grid">
      <div className="photo-item">
        <img src="https://wildgreen.antstheme.com/wp-content/uploads/2023/10/gallery2.jpg" alt="Photo 1" />
      </div>
      <div className="photo-item">
        <img src="https://wildgreen.antstheme.com/wp-content/uploads/2023/10/gallery3.jpg" alt="Photo 2" />
      </div>
      <div className="photo-item">
        <img src="https://wildgreen.antstheme.com/wp-content/uploads/2023/10/gallery4.jpg " alt="Photo 3" />
      </div>
      <div className="photo-item">
        <img src="https://wildgreen.antstheme.com/wp-content/uploads/2023/10/gallery6.jpg" alt="Photo 4" />
      </div>
    </div>
        </div>
      
    </div>

</div>

<footer>
  <div className='footsection'>
  copyright 2024 @Designed and developed by AnUpAm 
  </div>
</footer>
    </>
  )
}

export default Ending