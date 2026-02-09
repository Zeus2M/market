import React from 'react'
import "./ContactUsPage.css"
import TopBanner from '../components/TopBanner'
import NavComponent from '../components/NavComponent'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import Footer from '../components/Footer'
const ContactUsPage = () => {
  return (
    <div>
        <TopBanner/>
        <NavComponent/>
        

  {/* Contact page */}

     <div className="contact-container">
      <div className="contact-box">

          {/* main contact item */}

        <div className="contact-item">
          <div className="icon-circle">

          
          
          </div>
         <div>
          <h3><img src='src/assets/icons-phone (2).png' className='callerimg' /> Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p className="phone">Phone: +123456789</p>
        
          <hr />
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-circle">
            
          </div>
          <h3> <img src='src/assets/icons-mail (1).png' className='mailerimg'/> Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p className="email">Emails: customer@luxeport.com</p>
          <p className="email">Emails: support@luxeport.com</p>
          </div>
      </div>



          {/* form area */}

         <div className="contact-container">
          <div className=" contact-box2">
      <form className="contact-form">

        <div className="top-inputs">
          <input type="text" placeholder="Your Name " />
          <input type="email" placeholder="Your Email " />
          <input type="text" placeholder="Your Phone " />
     </div>

        <textarea
          placeholder="Your Message"
          
        ></textarea>

        <div className="btn-wrapper">
          <button type="submit">Send Massage</button>
        </div>
      </form>
     </div>
    </div>
    </div>

  <Footer />
 </div>
  )
}

export default ContactUsPage


