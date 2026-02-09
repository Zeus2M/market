
import "./Homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import TopBanner from "../components/TopBanner";
import NavComponent from "../components/NavComponent";
import { Link } from "react-router-dom";
import { FaApple, FaArrowLeft } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader.";
import ProductCard from "../components/ProductCard";
import { FaArrowRight } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { LuGamepad, LuGamepad2, LuShieldCheck } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";


const Homepage = () => {
  return (
    <div className="homepage">
      <TopBanner />
      <NavComponent />

      {/* Sction hero */}
        <main>
      <section className="home-hero">
        <ul>
          <li>
            <select>
              <option>Woman's Fashion</option>
              <option>Accessories</option>
              <option>Wears</option>
              <option>Cosmetics</option>
            </select>
          </li>

          <li>
            <select>
              <option>Men's Fashion</option>
              <option>Accessories</option>
              <option>Wears</option>
              <option>Cosmetics</option>
            </select>
          </li>

          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Home and Lifestyle</Link>
          </li>
          <li>
            <Link to="/">Medicine</Link>
          </li>
          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Sport and Outdoor</Link>
          </li>
          <li>
            <Link to="/">Babies and toys</Link>
          </li>
          <li>
            <Link to="/">Groceries and pet</Link>
          </li>
          <li>
            <Link to="/">Health and Beauty</Link>
          </li>
        </ul>

        <div className="swiper-container">
          <Swiper
            className="main-slide"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(Swiper) => console.log(Swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <div className="slider-item-left">
                  <div className="slider-left-header">
                    <FaApple color="white" size={40} />
                    iphone 14 series
                  </div>

                  <div className="slider-center">
                    Up to 10% <br />
                    off voucher
                  </div>

                  <div className="slider-bottom">
                    <button>
                      Shop Now <FaArrowRight color="white" />
                    </button>
                  </div>
                </div>

                <img src="/src/assets/iphoneimg.png" />
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>


      <section className="todays-section">

        <SectionHeader headerContent="Today's" />
        
        
        <div className="flashsales">
          <h2>Flash Sales</h2>
          <div className="countdown">

          </div>

        </div>

        <div className="product-cards-wrapper">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard />
          <ProductCard/>
        </div>

        <div className="see-more-wrapper">
            <button>
              See More Products <FaArrowRight />
            </button>
          </div>
      </section>

     <section className="categories-section">
          <SectionHeader headerContent="categories" />
          <div className="flashsales browse-category">
            <h2>Browse By Category</h2>

            <div className="products-nav">
              <button className="active">
                <FaArrowLeft />
              </button>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="categories-card-wrapper">
            <div className="category-card">
              <IoPhonePortraitOutline size={48} />

              <span>Phones</span>
            </div>

            <div className="category-card">
              <HiOutlineComputerDesktop size={48} />

              <span>Computers</span>
            </div>

            <div className="category-card">
              <BsSmartwatch size={48} />

              <span>Smartwatch</span>
            </div>

            <div className="category-card">
              <CiCamera size={48} />

              <span>Camera</span>
            </div>

            <div className="category-card">
              <LuGamepad  size={48} />

              <span>Gaming</span>
            </div>
          </div>
        </section>
         
       <section className="todays-section">
          <SectionHeader headerContent="This month" />

          <div className="flashsales-wrapper best-selling-products">
            <div className="flashsales">
              <h2>Best Selling Products</h2>
            </div>

            <div className="see-more-wrapper view-all-btn">
              <button>View All</button>
            </div>
          </div>

          <div className="product-cards-wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>

        
        <section className="enhance-section">

          <div className="enhance-left">
            <h5>Categories</h5>

            <h2>Enhance Your <br />Music Experience</h2> 

             <div className="countdown">
                <div className="time-wrapper">
                  <div className="title">Days</div>
                  <div className="time">03</div>
                </div>

               

                <div className="time-wrapper">
                  <div className="title">Hours</div>
                  <div className="time">23</div>
                </div>

             

                <div className="time-wrapper">
                  <div className="title">Minutes</div>
                  <div className="time">19</div>
                </div>

              

                <div className="time-wrapper">
                  <div className="title">Seconds</div>
                  <div className="time">56</div>
                </div>
              </div>

            <button>Buy Now</button>
          </div>

          <div className="enhance-right">
            <img src="/src/assets/jbl.png" alt="speaker img" />

          </div>
           
        </section>


    <section className="todays-section">
          <SectionHeader headerContent="Our Products" />

          <div className="flashsales-wrapper">
            <div className="flashsales">
              <h2>Explore Our Products</h2>
              
            </div>

            <div className="products-nav">
              <button className="active">
                <FaArrowLeft />
              </button>
              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="ourproducts-wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="see-more-wrapper">
            <button>
              View All Products 
            </button>
          </div>
        </section>

         <section className="newarrival-section">
          <SectionHeader headerContent="Featured" />
          <div className="flashsales-wrapper">
            <div className="flashsales">
              <h2>New Arrival</h2>
            </div>
          </div>

     
          <div className="collections-wrapper">
            <div className="left-collection">
              <div className="collection-card">
                <img src="/src/assets/ps5.png" />
                <div className="collection-text">
                  <h2>PlayStation 5</h2>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <button className="shop-now">Shop Now</button>
                </div>
              </div>
            </div>
   
                <div className="right-collection">
              <div className="right-collection-upper">
                <div className="collection-card">
                  <img src="/src/assets/attractivewoman.png" />
                  <div className="collection-text">
                    <h2>Women's Collection</h2>
                    <p>
                       Feature women's collection that gives you another vibe
                    </p>
                    <button className="shop-now">Shop Now</button>
                  </div>
                </div>
              </div>
      
                <div className="right-collection-lower">
                <div className="collection-card">
                  <img src="/src/assets/speakers.png" />
                  <div className="collection-text">
                    <h2>Speakers</h2>
                    <p>
                    Amazon wireless speakers.
                    </p>
                    <button className="shop-now">Shop Now</button>
                  </div>
                </div>

                 <div className="collection-card">
                  <img src="/src/assets/perfume.png" />
                  <div className="collection-text">
                    <h2>Perfume</h2>
                    <p>
                      Gucci Intense Oud EDP
                    </p>
                    <button className="shop-now">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          <section className="feature-cards">

          <div className="feature-card">

            <div className="feature-img-wrapper">
              <TbTruckDelivery size={40} />

            </div>

            <div className="feature-content">
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free deliveries for all orders over $140</p>

            </div>


          </div>

          <div className="feature-card">

            <div className="feature-img-wrapper">
              <RiCustomerServiceLine size={40} />

            </div>

            <div className="feature-content">
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>

            </div>


          </div>

          <div className="feature-card">

            <div className="feature-img-wrapper">
              <LuShieldCheck size={40}/>

            </div>

            <div className="feature-content">
              <h3>MONEY BACK GRUARANTEE</h3>
              <p>We return money within 30 days.</p>

            </div>


          </div>

        </section>
   </main>
   <Footer/>
    </div>
  );
};

export default Homepage;