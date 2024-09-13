import React from 'react'
import BodyBanner1 from '../assets/BodyBanner1.webp';
import BodyBanner2 from '../assets/BodyBanner2.webp';

const BodyBanner = () => {
  return (
    <section>
        <div className='gap-5 grid lg:grid-cols-2 '>
            <div className=' overflow-hidden'>
                <img className='rounded-2xl hover:scale-105 duration-500' src={BodyBanner1}/>
            </div>
            <div className=' overflow-hidden'>
                <img className='rounded-2xl hover:scale-105 duration-500' src={BodyBanner2}/>
            </div>
        </div>
    </section>
  )
} 

export default BodyBanner;