import React from 'react'
import BgImg from "../../assets/images/img/bg-slate.png";

const bgImage = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

const Hero = () => {
  return (
   <div style = {bgImage} >
        <section className='min-h[750px] w-full'>
            <div className="container">
                {/* Navbar section */}
                {/* Hero section */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2">

                    </div>
                </div>
            </div>
    </section>
   </div>
  )
}

export default Hero
