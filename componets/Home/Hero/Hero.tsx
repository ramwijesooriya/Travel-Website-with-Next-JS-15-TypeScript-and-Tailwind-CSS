import SearchBox from '@/componets/Helper/SearchBox'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* ovrerlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 '></div>
        {/* video */}
        < video src="/images/hero1.mp4" autoPlay muted loop preload="metadata" className="w-full h-full object-cover" />

        <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div  className="flex items-center justify-center flex-col w-full h-full">

             <div>
                <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] 1g:text-[45px] tracking-[®.7rem]
text-white font-bold uppercase" >Lets enjoy the neature</h1>
          <p className="d: text-base text-center text-1g text-white font-normal [word-spacing:5px]">
         Get the best prices on 2,000,000+ properties,worldwide</p>
             </div>
             <SearchBox/> 
            </div>

        </div>
        
        </div>
  )
}

export default Hero