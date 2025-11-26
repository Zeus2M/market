import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { GoPaperAirplane } from 'react-icons/go'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
      <footer className='footer'>
          <div className="footer-top">
              <div className="footer-section">
                  <h2>
                      Market
                  </h2>

                  <Link to="/">Subscribe</Link>

                  <p>Get 10% off your first order</p>

                  <form>
                      <input placeholder='Enter your email' />
                      
                      <button><GoPaperAirplane /></button>
                  </form>
                  
              </div>

              <div className='footer-section'>
                  <h3>Support</h3>

                  <p>
                      123 Agodi gate , Ibadan 
                      Oyo state, Nigeria
                  </p>

                  <a href="mailto:xyz@gmail.com">Market@gmail.com</a>

                  <a href="tel:+123456789">+123 4567 890</a>


                  
              </div>

              <div className="footer-section">
                  <h3>Account</h3>

                  <Link to="/account">My Account</Link>
                  <Link to="/signup">Login/Register</Link>
                  <Link to="/cart">Cart</Link>
                  <Link to="/wishlist">Wishlist</Link>
                <Link to="/shop">Shop</Link>
                  
              </div>

              <div className='footer-section'>
                  <h3>Quick Links</h3>

                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/terms-of-use">Terms of Use</Link>
                  <Link to="/faqs">FAQs</Link>
                    <Link to="/contact">Contact</Link>
                  
              </div>

              <div className="footer-section">
                  <h3>Download App</h3>
                  <p className='p-save'>Save $3 with new app users only</p>

                  <div className="qr-wrapper">
                      <img className='qrcodeimg' src="/src/assets/qrcode.png"/>

                      <div className='googleplays'>
                          <a href="/">
                            <img className='googleplay' src="/src/assets/googleplay.png" />
                          </a>

                           <a href="/">
                            <img className='googleplay' src="/src/assets/playstore.png" />
                          </a>
                      </div>
                      
                  </div>

                  <div className='social-media'>
                      <a href="" target='_blank'><FaFacebookF /></a>
                      <a href="" target='_blank'><RiTwitterXLine /></a>
                      <a href="" target='_blank'><BsInstagram /></a>
                      <a href="" target='_blank'><FaLinkedinIn /></a>
                      
                  </div>
                  
              </div>
              
          </div>

          <div className="footer-bottom">
              
             &copy; Copyright Emperor 2025. All rights reserved
              
          </div>
          
    </footer>
  )
}

export default Footer