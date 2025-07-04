import React from 'react'
import Hero from '@/components/PowerPlant/Hero'
import Aboutpower from '@/components/PowerPlant/Aboutpower'
import Power from '@/components/PowerPlant/Power'
const PowerPlant = () => {
    return (
      <div className='w-full overflow-hidden'>
        <Hero/>
        <Aboutpower />
        <Power />
       
      </div>
    )
  }
  
  export default PowerPlant
  