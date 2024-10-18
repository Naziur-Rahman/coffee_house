import React from 'react'
import BgImg from "../../assets/images/img/bg-slate.png";
import CupImg from "../../assets/images/img/black.png";
import { motion } from 'framer-motion';
const bgImage = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

const Hero = () => {
  return (
   <div style = {bgImage} >
        <section className='min-h-screen w-full'>
            <div className="container">
                {/* Navbar section */}
                {/* Hero section */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-screen">
                        {/* 1ST cols section */}
                        <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24'>
                            < motion.h1 
                            initial ={{opacity: 0, y: -100}} 
                            animate={{opacity: 1, y:0}} 
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                delay: 0.8
                            }}
                            className='text-7xl font-bold leading-tight ml-14 font-FatFace'>Blvck Tumbler</motion.h1>
                            <motion.div 
                                initial ={{opacity: 0, y: -100}} 
                                animate={{opacity: 1, y:0}} 
                                transition={{
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 100,
                                    delay: 1.2
                                }}
                                className='relative '>
                            <div
                            className='relative z-10 space-y-4'>
                                <h1 className='text-2xl font-MerriWeather'>Black Lifestyle Lovers</h1>
                                <h1 className='text-sm opacity-55 leading-loose text-justify'>Black coffee is the purest form of coffee, with no added ingredients. It's a bold, rich drink, loved for its simplicity and full-bodied flavor. This no-calorie, antioxidant-rich beverage offers an energy boost and mental clarity, making it a go-to for coffee aficionados worldwide. ☕</h1>
                            </div>
                            <div className='absolute -top-6 -left-10 w-[420px] h-[210px] bg-gray-700/25 rounded-md'></div>
                            </motion.div>
                            
                        </div>
                        {/* Hero Image section */}
                        <div className='relative'>
                            <motion.img 
                            initial ={{opacity: 0, y: 0}} 
                            animate={{opacity: 1, y:1}} 
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                delay: 0.8
                            }} 
                            src={CupImg} alt="Cup Img" className='relative z-40 h-[400px] md:h-[600px]  img-shadow'/>
                            <motion.div
                             initial ={{opacity: 0, y: 0}} 
                             animate={{opacity: 1, y:1}} 
                             transition={{
                                 type: "spring",
                                 damping: 10,
                                 stiffness: 100,
                                 delay: 0.8
                             }} 
                             className=' h-[180px] w-[180px] absolute top-12 -right-16 border-primary rounded-full border-[20px] z-10'>

                            </motion.div>
                            <div className='absolute top-20 left-[200px]'>
                                <h1 className='text-[120px] scale-150 font-bold text-darkGray/40 font-FatFace leading-none'>Blvck Tumbler</h1>
                            </div>
                        </div>
                        {/* 3rd cols section */}
                        <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14 font-FatFace'>Blvck Tumbler</h1>
                            <motion.div 
                                initial ={{opacity: 0, y: -100}} 
                                animate={{opacity: 1, y:0}} 
                                transition={{
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 100,
                                    delay: 1.2
                                }} 
                            className='relative '>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl font-MerriWeather'>Black Lifestyle Lovers</h1>
                                <h1 className='text-sm opacity-55 leading-loose text-justify'>Black coffee is the purest form of coffee, with no added ingredients. It's a bold, rich drink, loved for its simplicity and full-bodied flavor. This no-calorie, antioxidant-rich beverage offers an energy boost and mental clarity, making it a go-to for coffee aficionados worldwide. ☕</h1>
                            </div>
                            <div className='absolute -top-6 -left-10 w-[420px] h-[210px] bg-gray-700/25 rounded-md'></div>
                            </motion.div>
                            
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
    </section>
   </div>
  )
}

export default Hero
