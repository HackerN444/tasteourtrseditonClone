import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import BannerSlide from "../components/BannerSlide";
import BestSelling from "../components/BestSelling";
import ProductDisplay from "../components/ProductDisplay";
import AllUrundais from "../components/AllUrundais";
import CoustomerGalary from "../components/CoustomerGalary";
import BodyBanner from "../components/BodyBanner";
import ProductStatus from "../components/ProductStatus";
import Testimonial from "../components/Testimonial";
import WhatWeDo from "../components/WhatWeDo";
import FooterArea from "../components/FooterArea";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CopyRight from "../components/CopyRight";
// ..
AOS.init();

const Home = () => {
  return (
    <section className="ml-5 mt-5">
      <div className=" my-10">
        <LogoSection />
      </div>
      <div className=" max-sm:hidden my-10">
        <Navbar />
      </div>
      <div className=" my-10">
        <BannerSlide />
      </div>
      <div  className=" my-10">
        <BestSelling />
      </div>
      <div data-aos="fade-left" className=" my-10">
        <ProductDisplay />
      </div>
      <div className=" my-10">
        <p className=" text-orange-500 text-3xl font-bold text-center my-20">
          Customer's Gallery
        </p>
      </div>
      <div data-aos="fade-right" className=" my-10">
        <CoustomerGalary />
      </div>
      <div data-aos="zoom-in" className=" my-10">
        <BodyBanner />
      </div>
      <div data-aos="zoom-in" className=" my-10">
        <p  className=" text-orange-500 text-3xl font-bold text-center my-20">
          ALL URUNDAI'S
        </p>
      </div>
      <div data-aos="fade-left" className=" my-10">
        <AllUrundais />
      </div>
      <div data-aos="zoom-out" className=" max-sm:container  my-10">
        <ProductStatus />
      </div>
      <p className="text-3xl text-orange-500 text-center font-bold mt-20 ">Testimonial</p>
      <p className="text-center text-sm mb-10">WHAT CUSTOMER SAY ABOUT US</p>
      <div data-aos="fade-left" ><Testimonial/>
      </div>
      <div  className=" mt-20">
        <WhatWeDo/>
      </div>
      <div>
        <FooterArea/>
      </div>
      <div>
        <CopyRight/>
      </div>
    </section>
  );
};

export default Home;
