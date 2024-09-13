import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../components/CSS.Styles/BannerSlide.css";

import slideimg from "../assets/IMG_5867.webp";
import slideimg1 from "../assets/BodyBanner2.webp";
import slideimg2 from "../assets/iditha-kadalai-urundai6-pcs-125-gm-324081.webp";

export default class extends React.Component {
  render() {
    return (
      <div className="Banner-slide-section">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
          interval={3000}
          isPlaying={true}
        >
          <Slider className="slider-area  rounded-2xl bg-yellow-400 max-sm:h-72">
            <Slide index={0}>
              <div className="bg-slate-400 Banner-main  rounded-2xl">
                <img className=" object-cover" src={slideimg} />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="bg-slate-400 Banner-main  rounded-2xl">
                <img className=" object-cover" src={slideimg1} />
              </div>
            </Slide>
            <Slide index={2}>
              <div className="bg-slate-400 Banner-main  rounded-2xl">
                <img className=" object-cover" src={slideimg2} />
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    );
  }
}
