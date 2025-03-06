import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-top">
        <div className="top-left">
            <img src={logo} alt="" />
            <p>Passionate About Technology | Always Learning, Always Building</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <input type="email" placeholder='Enter Your email' />
            </div>
            <div className="footer-subscirbe">Subscribe</div>
        </div>
        </div> 
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom left">&copy; 2025 Vineet Padhalni. All Rights Reserved.</div>
            <div className="footer-bottom-right">
            <p>Terms Of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>

        </div>
        
    </div>
  )
}

export default Footer