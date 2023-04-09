import React from 'react'
import Image from 'next/image'
import {TfiArrowTopRight} from 'react-icons/tfi'
function Left() {
  return (
    <div className='text-white ml-[14rem] mt-[9rem] '>


        <div className='relative ml-28 -top[-1]'>
            <Image src = "/e.png" alt ="pic" height={90} width={90} className=''/>
        </div>
        <div className='absolute top-64'>
        <div className='text-3xl font-medium tracking-normal'>Design Your</div>
        <div className='break-all text-7xl font-bold'>Setup.</div>
        </div>

<div>
<div className=' mt-52 relative '>
<Image src = "/e.png" alt ="pic" height={70} width={70} className=''/>
</div>
    <div className=' top-[35.5rem] left-60 absolute '>
      
<TfiArrowTopRight size={30}/>   
    </div>    
</div>
        
        
    </div>
  )
}

export default Left