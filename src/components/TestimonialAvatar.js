import React from "react";
import Slider from "react-slick";
import boy1 from '../assets/boy1.svg';
import boy2 from '../assets/boy2.svg';
import boy3 from '../assets/boy3.svg';
import girl1 from '../assets/girl1.svg';

export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider className=" container mx-auto w-96" {...settings}>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={boy1}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={boy2}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={boy3}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={girl1}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={boy1}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={boy1}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={boy2}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={boy3}/>
      </div>
      <div>
        <img className="h-20 hover:scale-125 w-20" src={girl1}/>
      </div>
    </Slider>
  );
}