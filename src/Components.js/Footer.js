import React from 'react'
import logo from "../assests/Vector Smart Object.png"
function Footer() {
  return (
    <div>
    <div className='flex h-[146px] bg-[#1a1a1a] top-[60px]'>
      <div className='flex justify-between items-center w-full px-4 text-white'>
        <div className=''>
          <h1 className='mx-10 text-w'>Best solutions from</h1>
          <img src={logo} alt="logo" className='ml-2 mt-4' />
        </div>
        <div className='flex'>
          <div className='flex flex-col items-center'>
            <h3 className='font-bold'>DOL Max Overlaminate films</h3>
            <p>why us</p>
            <p>enquire now</p>
          </div>
        </div>
          <div className='flex flex-col items-center mx-4'>
            
            <p>Avery Dennison DOL max</p>
            <p>Avery Dennison DOL max</p>
            <p>Avery Dennison DOL max</p>
          </div>
         
      </div>
    </div>
  </div>
  )
}

export default Footer