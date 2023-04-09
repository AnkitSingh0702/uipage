import React from 'react'
import Image from 'next/image'
export default function Navbar() {

  return (
    <div>
        <div className=' flex  items-center justify-between relative  p-4'>
        

        <div className='  ml-2 '>
            <p className=' text-[#ffff] font-semibold text-[30px] tracking-wide'>set-<span className='text-[#0B68FF] text-[30px]'>UP</span></p>
        </div>

        <div className="  w-full md:block md:w-auto" id="navbar-default">
         
        <div className="font-medium flex flex-row p-4 gap-16 ">

        <div>
          <a  className="block  py-2 text-slate-300 cursor-pointer bg-no-repeat w-fit duration-500 ease-in-out bg-[0_100%] [background-size:0_2px] border-b-0 bg-gradient-to-r from-white to-white hover:[background-size:100%_2px]">Products</a>
        </div> 

        <div>
          <a  className="block  py-2 text-slate-300 cursor-pointer bg-no-repeat w-fit duration-500 ease-in-out bg-[0_100%] [background-size:0_2px] border-b-0 bg-gradient-to-r from-white to-white hover:[background-size:100%_2px]">Custom</a>
        </div>

        <div>
          <a  className="block  py-2 text-slate-300 cursor-pointer bg-no-repeat w-fit duration-500 ease-in-out bg-[0_100%] [background-size:0_2px] border-b-0 bg-gradient-to-r from-white to-white hover:[background-size:100%_2px]">Support</a>
        </div>

        <div>
          <a  className="block  py-2 text-slate-300 cursor-pointer bg-no-repeat w-fit duration-500 ease-in-out bg-[0_100%] [background-size:0_2px] border-b-0 bg-gradient-to-r from-white to-white hover:[background-size:100%_2px]">Contact</a>
        </div>

        <div>
          <a  className="block  py-2 text-slate-300 cursor-pointer bg-no-repeat w-fit duration-500 ease-in-out bg-[0_100%] [background-size:0_2px] border-b-0 bg-gradient-to-r from-white to-white hover:[background-size:100%_2px]">LOG-In</a>
        </div>
      </div>
      </div>
        </div>
    </div>
  )
}
