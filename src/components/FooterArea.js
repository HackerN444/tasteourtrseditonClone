import React from "react";
import footerLogo from "../assets/logo_mb.png";

const FooterArea = () => {
  return (
    <section>
      <div data-aos="fade-up" className=" h-auto w-full grid grid-cols-2 mt-10  max-sm:grid-cols-1 gap-10 bg-orange-500">
        <div className= "w-96">
          <img className=" pt-10 pl-5" src={footerLogo} />
          <p className="text-sm text-white leading-5 p-10 font-bold text-left">
            "In Taste Our Tradition every product is carefully crafted, using
            only the finest ingredients, ensuring a delightful experience for
            your taste buds." Products Manufactured By:{" "}
            <span className="text-2xl">
              Sri Sai Products Anandham Nagar South Extn., Ammaiyappa Nagar,
              Trichy - 17
            </span>
          </p>
        </div>

        <div className="w-96 p-10 pl-5 text-left leading-9">
          <p className="text-lg text-white font-bold">
            NEWSLETTER
            <br/>
            <span className="text-sm  "> Get exciting launch offers! Plus, be the first to know
            about sales new product launches and exclusive offers!</span>
          </p>
          <div>
            <input className="h-14 mt-10 w-96 rounded-full p-5 " placeholder="EMAIL" type="text"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterArea;
