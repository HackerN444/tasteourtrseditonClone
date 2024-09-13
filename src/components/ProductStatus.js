import React from "react";
import Premeium from "../assets/premiumQuality.svg";
import Nutrent from "../assets/nutrent.svg";
import Organic from "../assets/organic.svg";

function ProductStatus() {
  return (
    <section>
      <div className=" grid max-sm:grid-cols-1 container mx-auto lg:grid-cols-3">
        <div className="my-5">
          <div
            className=" ml-24 group flex justify-center items-center h-40 w-40  rounded-full
                            hover:rotate-180 shadow-2xl duration-500 "
          >
            <div>
              <img
                className="h-10 w-10 group-hover:-rotate-180 "
                src={Premeium}
              />
            </div>
          </div>
          <p className=" text-sm text-center max-sm:mr-16 lg:mr-20  font-bold mt-5">
            Premium Quality
          </p>
          <p className=" text-xs w-52 text-center ml-20 mt-5 text-wrap ">
            The quality and safety of our products is our top priority. We
            continue to quest for even greater product quality
          </p>
        </div>

        <div className="my-5">
          <div
            className=" ml-24 group flex justify-center items-center h-40 w-40  rounded-full
                            hover:rotate-180 shadow-2xl duration-500 "
          >
            <div>
              <img
                className="h-10 w-10 group-hover:-rotate-180 "
                src={Organic}
              />
            </div>
          </div>
          <p className=" text-sm font-bold text-center ml-10  max-sm:mr-36 lg:mr-20 mt-5">Organic</p>
          <p className=" text-xs w-52 ml-20  text-center mt-5 text-wrap ">
            Our commitment to quality ensures that every product is made with
            the finest organic ingredients without any preservatives added!
          </p>
        </div>

        <div className="my-5">
          <div
            className=" ml-24 group flex justify-center items-center h-40 w-40  rounded-full
                            hover:rotate-180 shadow-2xl duration-500 "
          >
            <div>
              <img
                className="h-10 w-10 group-hover:-rotate-180 "
                src={Nutrent}
              />
            </div>
          </div>
          <p className=" text-sm font-bold text-center max-sm:mr-20 lg:mr-20 mt-5">Nutrient-Rich</p>
          <p className=" w-52 ml-20 text-xs  text-center mt-5  ">
            Packed with essential nutrients, our products go beyond just flavor.
            Kadali Urundai, Pasiparuppu Urundai, Kambu Urundai - each variant is
            a powerhouse of goodness, contributing to your overall well-being.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductStatus;
