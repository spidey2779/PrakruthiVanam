import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {FaSquareInstagram} from 'react-icons/fa6';
import {BsYoutube} from 'react-icons/bs';
import {AiFillTwitterCircle, AiOutlineClockCircle} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {FaLocationDot} from 'react-icons/fa6';
import {PiPhoneCallFill} from 'react-icons/pi';
import {FiMail} from 'react-icons/fi';
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
        <a href="/"><IoLogoWhatsapp className='footIcon'/></a>
        </div>
      </div>
      <div className='footerthird'>
        <h3>Contact Us</h3>
        <div className="footwrapper"> 
          <h4>madanapalle</h4> 
          <FaLocationDot/>
        </div>
        <div className="footwrapper"> 
        <h4>+91 2398742834</h4> 
          <PiPhoneCallFill/>
        </div>
        <div className="footwrapper"> 
          <h4>Timing : mon to sat 6am to 9pm</h4> 
          <AiOutlineClockCircle/>
        </div>
        <div className="footwrapper"> 
          <h4>prakruthivanam@gamil.com</h4> 
          <FiMail/>
        </div>
      </div>
      </div>
      <div className='footerlast'>
        <p>PRAKRUTHIVANAM Limited All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
