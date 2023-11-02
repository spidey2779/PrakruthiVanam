import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footerdiv'>
      <div className='footer'>
      <div className='first'>
        <p>About us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>FAQ</p>
        <p>Shipping Policy</p>
      </div>
      <div className='second'>
        <h3>Follow us on Socila Media</h3>
        <div className='icons'>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-whatsapp"></i>
        </div>
      </div>
      <div className='third'>
        <h2>Contact Us</h2>
        <i class="fas fa-map-marker-alt"></i>
        <span>Madanapalle</span><br/>
        <i class="fas fa-phone-alt"></i>
        <span>+91 8773483848</span><br/>
        <i class="far fa-clock"></i>
        <span>Timing:Mon to Sat 6am to 9pm</span><br/>
        <i class="far fa-envelope"></i>
        <span>prakruthivanam@gmail.com</span>
      </div>
      </div>
      <div className='last'>
        <p>PRAKRUTHIVANAM Limited All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
