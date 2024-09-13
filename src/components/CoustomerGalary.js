import { Swiper, SwiperSlide } from 'swiper/react';
import CoustomerGalaryCard from './CoustomerGalaryCard';

// Import Swiper styles
import 'swiper/css';

const CoustomerGalary =() => {
  return (
    <section>
   <div className='max-sm:hidden'>
     <Swiper
      spaceBetween={0}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='m-0 max-sm: p-0'
    >
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
    </Swiper>
   </div>
   <div className='lg:hidden max-sm:visible'>
   <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='m-0 max-sm: p-0'
    >
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
      <SwiperSlide><CoustomerGalaryCard/></SwiperSlide>
    </Swiper>
   </div>
   </section>
  );
};
export default CoustomerGalary;