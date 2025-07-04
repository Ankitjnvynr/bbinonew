import React from 'react'
import Herobanner from '@/components/Sectors/Herobanner'
import Herobanner1 from '@/components/Sectors/Herobanner1'
import Herobanner2 from '@/components/Sectors/Herobanner2'
import Herobanner3 from '@/components/Sectors/Herobanner3'
import Herobanner4 from '@/components/Sectors/Herobanner4'
import Herobanner5 from '@/components/Sectors/Herobanner5'
import Herobanner6 from '@/components/Sectors/Herobanner6'
// import Herobanner7 from '@/components/Sectors/Herobanner7'
import Herobanner8 from '@/components/Sectors/Herobanner8'
import Herobanner9 from '@/components/Sectors/Herobanner9'

const page = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Herobanner/>
      <Herobanner1/>
      <Herobanner2/>
      <Herobanner3/>
      <Herobanner4/>
      <Herobanner5/>
      <Herobanner6/>
      {/* <Herobanner7/> */}
      <Herobanner9/>
      <Herobanner8/>
    </div>
  )
}

export default page