import React from "react";
import Slider from "react-slick";
import urundaiIMG from "../assets/iditha-kadalai-urundai6-pcs-125-gm-324081.webp";

function urundiaCard(){
  const allUrunadaiLightningIcon =(
    <svg xmlns="http://www.w3.org/2000/svg" fill="100" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>

  );
    return(
        <div className="flex h-40 w-96  m-10 border-gray border-2 rounded-2xl">
            <div className="ml-3 overflow-hidden">
              <span className="h-5 w-12 absolute z-10 m-1 bg-green-300 flex rounded-full  text-xs">
                <span>{allUrunadaiLightningIcon}</span>
                -33%
              </span>
                <img className="h-40 w-40 object-cover  relative  hover:scale-125 duration-500" src={urundaiIMG}/>
            </div>
            <div className="text-md mt-10 m-5 font-bold ">
                <p className="m-3 text-sm">Urundai</p>
                <p className="m-3 text-orange-500 text-sm">Rs.60.00<span className="text-sm ml-2 text-gray-400 line-through">Rs.90.00</span></p>
            </div>
        </div>
    );
}


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className="max-sm:hidden">
        
    <Slider {...settings}>
      <div>
        <span className=" ">{urundiaCard()}</span>
        <span className=" ">{urundiaCard()}</span>
      </div>
      <div>
        <span className=" ">{urundiaCard()}</span>
        <span className=" ">{urundiaCard()}</span>
      </div>
      <div>
        <span className=" ">{urundiaCard()}</span>
        <span className=" ">{urundiaCard()}</span>
      </div>
      <div>
        <span className=" ">{urundiaCard()}</span>
        <span className=" ">{urundiaCard()}</span>
      </div>
      <div>
        <span className=" ">{urundiaCard()}</span>
        <span className=" ">{urundiaCard()}</span>
      </div>
      <div>
        <span className=" ">{urundiaCard()}</span>
        <span className=" ">{urundiaCard()}</span>
      </div>
    </Slider>
    </div>


    <div>
    <div className="lg:hidden">
        
        <Slider {...settings2}>
          <div>
            <span className=" ">{urundiaCard()}</span>
            <span className=" ">{urundiaCard()}</span>
          </div>
          <div>
            <span className=" ">{urundiaCard()}</span>
            <span className=" ">{urundiaCard()}</span>
          </div>
          <div>
            <span className=" ">{urundiaCard()}</span>
            <span className=" ">{urundiaCard()}</span>
          </div>
          <div>
            <span className=" ">{urundiaCard()}</span>
            <span className=" ">{urundiaCard()}</span>
          </div>
          <div>
            <span className=" ">{urundiaCard()}</span>
            <span className=" ">{urundiaCard()}</span>
          </div>
          <div>
            <span className=" ">{urundiaCard()}</span>
            <span className=" ">{urundiaCard()}</span>
          </div>
        </Slider>
        </div>
    </div>
    </>

  );
}



