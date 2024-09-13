import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TestimonialAvatar from '../components/TestimonialAvatar';


export default class extends React.Component {
  render() {
    return (
      <section>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        isPlaying={true}
        interval={4000}
      >
        <Slider className=' h-40 w-96 lg:w-auto container  text-lg text-gray-500 mx-auto text-center line '>
          <Slide className=' leading-10' index={0}>"As a health-conscious individual, finding snacks that are nutritious and tasty can be a challenge. Taste Our Tradition's Sathumaavu Urundai is the perfect solution. It's my go-to snack without compromising on health."</Slide>
          <Slide className=' leading-10' index={1}>Ada ada en tastetuu evanga kadalai and pasiparuppu urundai..romba nalla irruthu taste and quality also packing so good.kadalai urundai highly recommended for all.</Slide>
          <Slide className=' leading-10' index={2}>"I love how Taste Our Tradition combines modern health trends with traditional flavors in the Thinai Arisi Urundai. It's a crispy, delicious snack that I feel good about enjoying. Highly recommended!"</Slide>
        </Slider>
      </CarouselProvider>
     <div className='mt-10'>
     <TestimonialAvatar /> 
     </div>
      </section>
    );
  }
}