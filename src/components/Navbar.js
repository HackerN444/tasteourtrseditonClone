import React from 'react'
import '../components/CSS.Styles/Navbar.css';

const Navbar = () => {
  const searchicon =(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 rounded-full text-white font-bold p-2 bg-orange-500 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
);
  return (
    <section >
      <div className='navMainClass'>
        <ul>
          <li>Home</li>
          <li>Whishlist</li>
          <li>All Products</li>
          <li>Urundai's Varities</li>
          <li>Contact Us</li>
        </ul>
        <div>
          <span className=' absolute float right-4 top-4 z-10'>{searchicon}</span>
        <input className=' relative' type="text" placeholder="Enter the search"/>
        </div>
      </div>
    </section>
  )
}

export default Navbar