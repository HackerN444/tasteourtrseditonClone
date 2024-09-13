import React from "react";
import leafImage from "../assets/doubleLeaf.png";

const BestSelling = () => {
  return (
    <section>
      <div className="">
        <h1 className=" text-4xl p-5 text-orange-500  text-center font-bold">
          Best Selling urundai's
        </h1>

        <span className=" flex justify-center items-center gap-10">
          <button className="font-bold text-gray-500 active:text-orange-500 hover:text-orange-500">
            <img className=" h-5 " src={leafImage} />
            <h5>Top</h5>
          </button>

          <button className="font-bold text-gray-500 active:text-orange-500hover:text-orange-500">
            <img className=" h-5 ml-5 " src={leafImage} />
            <h5>Recent</h5>
          </button>
        </span>
      </div>
    </section>
  );
};

export default BestSelling;
