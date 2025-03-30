import SectionHeading from '@/componets/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCards from './HotelCards'

const Hotel = () => {
  return (
    <div className='mt-20 mb-20'> 
    {/* section heading */}
    <SectionHeading heading="Recommended Hotels" />
    <div className="w- [80%] mx-auto grid grid-cols-1 md:grid-cols-2 1g:grid-cols-3 xl:grid-cols-4 items-center mt-16">
  {/* hotelCard */}
  {
    hotelsData.map((data)=>{
        return <div key={data.id}> 
        <HotelCards />
        </div>
    })
  }
  
  
    </div>
    
    </div>
  )
}

export default Hotel