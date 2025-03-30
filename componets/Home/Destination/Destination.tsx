import SectionHeading from '@/componets/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
        {/* section heading  */}

<SectionHeading heading="exploring popular destination" />
  {/* section cotent  */}
  <div className="mt-14 w- [80%] mx-auto">
    {/* slider */}
     <DestinationSlider/>
  </div>
    </div>
  )
}

export default Destination