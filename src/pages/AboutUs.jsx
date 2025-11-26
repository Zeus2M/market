import "./AboutUs.css"
import TopBanner from '../components/TopBanner'
import NavComponent from '../components/NavComponent'
import { CiTwitter } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa6"
import { RiLinkedinLine } from "react-icons/ri"


const AboutUs = () => {
  return (
    <div>
 
      
        <TopBanner/>
        <NavComponent/>
 <div className="about">

     <div className="into">
         <div className="home-nav">
          
        <div className="int">
        <div className="story">
            <h1>
                Our Story
            </h1>
            <p>
Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p> 
<p>
Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>
        </div>

        <div>
        <img src="src\assets\Side Image (1).png" alt="" className="sid"/>
        </div>

        </div>

        <div className="toknow container">

          <div>
          <img src="src/assets/Services.png"/>
          <h3>10.5k</h3>
          <p>Sellers active on our site</p>
        </div>
        
        <div>
          <img src="src/assets/Services (6).png"/>
          <h3>33k</h3>
          <p> Monthly Product Sale</p>
        </div>

        <div>
          <img src="src/assets/Services (4).png"/>
          <h3>45.5k</h3>
          <p>Customer active in our site</p>
        </div>

        <div>
          <img src="src/assets/Services (5).png"/>
          <h3>25k</h3>
          <p>Anual grosss sale in our site</p>
        </div>

        </div>

        </div>

    </div>

    <section className="customer">
   

   <div>
    <img src="src/assets/image 46.png" className="custom"/>
    <h3>Tom Cruise</h3>
    <p>Founder & chairman </p>
     <div>
      <CiTwitter className="app"/>
      <FaInstagram className="app"/>
      <RiLinkedinLine className="app"/>
      </div>
   </div>

   <div>
    <img src="src/assets/image 51.png" className="custom"/>
    <h3>Emma Watson</h3>
    <p>Managing director</p>
    <div>
      <CiTwitter className="app"/>
      <FaInstagram className="app"/>
      <RiLinkedinLine className="app"/>
    </div>
   </div>

   <div>
    <img src="src/assets/image 47.png" className="custom"/>
    <h3>Will Smith</h3>
    <p>Product Designer</p>
    <div>
      <CiTwitter className="app"/>
      <FaInstagram className="app"/>
      <RiLinkedinLine className="app"/>
    </div>
   </div>

    </section>


    <section className="free">

<div>
  <img src="src/assets/Services (7).png"/>
  <h3>FREE AND FAST DELIVERY</h3>
  <p>Free delivery for all orders over 140$</p>
</div>

<div>
  <img src="src/assets/Services (8).png"/>
  <h3>24/7 CUSTOMER SERVICE</h3>
  <p>Friendly 24/7 customer support</p>
</div>

<div>
  <img src="src/assets/Services (9).png"/>
  <h3>MONEY BACK GUARANTEE</h3>
  <p>We return money within 30 days</p>
</div>


</section>






    </div>

    
  </div>


  )
}

export default AboutUs