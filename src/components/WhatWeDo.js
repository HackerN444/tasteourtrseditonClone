import React from "react";
import "../components/CSS.Styles/whatwedo.css";
import Authentic from "../assets/Authenic.svg";
import Healthy from "../assets/Healthy.svg";
import Express from "../assets/express.svg";
import urundaiImage from "../assets/urundaiImage.webp";

const WhatWeDo = () => {
  const telephoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 bg-orange-500 text-white p-2 rounded-full h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
      />
    </svg>
  );
  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
  return (
    <section>
      <div  className="  grid max-sm:grid-cols-1 grid-cols-3 max-sm:mt-10">
        <div data-aos="fade-right" id="whatwedomaindiv" className="ml-20 container mt-20">
          <div id="whatwedomain">
            <img className=" h-10 w-10" src={Authentic} />
            <p>Authentic</p>
            <p>{arrowIcon}</p>
          </div>
          <div id="whatwedomain">
            <img className=" h-10 w-10" src={Healthy} />
            <p>Authentic</p>
            <p>{arrowIcon}</p>
          </div>
          <div id="whatwedomain">
            <img className=" h-10 w-10" src={Express} />
            <p>Authentic</p>
            <p>{arrowIcon}</p>
          </div>
        </div>
        <div data-aos="zoom-in"  className="max-sm:mt-10">
          <img className="h-95 w-96" src={urundaiImage} />
        </div>
        <div data-aos="fade-left" className=" max-sm:text-center max-sm:mt-10 mt-24">
          <p className=" text-3xl font-bold">
            Who we are
            <br />
            What We Do?
          </p>
          <p>
            At TOT! our handcrafted treats embody rich traditions. Committed to
            pure, organic goodness for a nostalgic journey in every bite.
            Embrace tradition with our curated
          </p>
          <div className=" flex mt-10 lg:mr-40 max-sm:m-0  text-sm font-bold max-sm:mt-5 justify-center items-center">
            {telephoneIcon}
            <p>
              For More Details
              <br />
              9894795764
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
