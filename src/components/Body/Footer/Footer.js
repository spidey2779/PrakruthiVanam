import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {FaSquareInstagram} from 'react-icons/fa6';
import {BsYoutube} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaSquareWhatsapp} from 'react-icons/fa6';
function Footer() {
  return (
    <div className='footerdiv'>
      <div className='footer'>
      <div className='footerfirst'>
        <p>About us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>FAQ</p>
        <p>Shipping Policy</p>
      </div>
      <div className='footersecond'>
        <h3>Follow us on Socila Media</h3>
        <div className='footericons'>
        <a href="/"><BsFacebook className='footIcon'/></a>
        <a href="/"><FaSquareInstagram className='footIcon'/></a>
        <a href="/"><BsYoutube className='footIcon'/></a>
        <a href="/"><AiFillTwitterCircle className='footIcon'/></a>
        <a href="/"><FaSquareWhatsapp className='footIcon'/></a>
        </div>
      </div>
      <div className='footerthird'>
        <h3>Contact Us</h3> 
        {/* <i class="fas fa-map-marker-alt"></i>
        <span>Madanapalle</span><br/>
        <i class="fas fa-phone-alt"></i>
        <span>+91 8773483848</span><br/>
        <i class="far fa-clock"></i>
        <span>Timing:Mon to Sat 6am to 9pm</span><br/>
        <i class="far fa-envelope"></i> */}
        <span>prakruthivanam@gmail.com</span>
      </div>
      </div>
      <div className='footerlast'>
        <p>PRAKRUTHIVANAM Limited All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
