
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
import { LuGamepad, LuGamepad2 } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Footer from "../components/Footer";


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
   </main>
   <Footer/>
    </div>
  );
};

export default Homepage;