import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  return (
    <nav className='absolute top-0 left-0 w-full pt-8 text-white z-20'>
      <div className='container'>
      <div className='flex justify-between items-center'>
        {/* Logo Section */}
        <h1 className='font-semibold text-2xl font-MerriWeather '> <span className='text-primary'>Coffee</span> House</h1>
        {/* Navbar Menu Section */}
        <GiHamburgerMenu className='text-3xl cursor-pointer'>

        </GiHamburgerMenu>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
