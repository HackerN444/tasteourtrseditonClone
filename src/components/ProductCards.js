import React from "react";
import cardIMG from "../assets/iditha-kadalai-urundai6-pcs-125-gm-324081.webp";

const ProductCards = () => {
  const productCardLightningIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="100"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4  text-center h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
  // ------------------------------like icon----------------------------->
  const productCardLikeicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 bg-white fill-white active:bg-black hover:bg-black text-gray-500 rounded-full p-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
  // ---------------------------------photo image-------------------------->
  const productCardPhotIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 bg-white fill-white active:bg-black hover:bg-black text-gray-500 rounded-full p-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  );
  return (
    <section>
      <div
        className=" overflow-hidden group max-sm:h-40 max-sm:w-40 bg-slate-700 m-5 rounded-3xl relative
        lg:h-72 lg:w-72
      "
      >
        <div className=" absolute z-10 top-0 bottom-0 right-32 m-4 opacity-0 group-hover:translate-x-28 group-hover:opacity-100 duration-500">
          {productCardLikeicon}
        </div>
        <div className=" absolute z-10 top-10 m-4 right-32  opacity-0 group-hover:translate-x-28 group-hover:opacity-100 duration-500 max-sm:hidden">
          {productCardPhotIcon}
        </div>

        <div className=" z-10 m-3 h-5 w-auto absolute flex rounded-2xl text-xs px-auto pl-1 pr-1 text-center  bg-green-400">
          {productCardLightningIcon}
          <span className="text-center">-32 %</span>
        </div>
        <div
          className=" max-sm:pt-2 max-sm:p-1 max-sm:rounded-md max-sm:pb-2 max-sm:w-28 mx-auto text-gray-600 bg-gray-300 text-center absolute left-0 right-0 bottom-2
                     font-bold text-xs rounded-sm  opacity-0 group-hover:opacity-100
                     hover:text-white z-10 hover:bg-orange-500 duration-500
                     lg:mx-5 lg:p-3
                     "
        >
          QUICK ADD
        </div>
        <div className="max-sm:h-40 z-20 group max-sm:w-40 ">
          <img
            className="rounded-3xl group-hover:scale-125 duration-500"
            src={cardIMG}
          />
        </div>
      </div>
      <div className="ml-5">
          <span className=" font-bold text-sm">Kambu Urundai</span>
          <br/>
          <span className="font-bold text-xs">Rs.60</span>
          <span className="font-bold text-xs line-through ml-5 text-gray-500">Rs.90.00</span>
        </div>
    </section>
  );
};

export default ProductCards;
