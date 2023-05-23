import React from 'react'
import wall from "../assests/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable.png"
import icon1 from "../assests/Group 110.png"

function WhyUs() {
  return (
    <div className='flex  bg-gray-300'>
      <img src={wall} alt="wall" className='h-screen w-auto max-w-1/2 mr-4' />
      <div className='flex flex-col justify-center  mx-10'>
        <h1 className='text-2xl font-bold mb-4'>Why us?</h1>
        <div className='flex items-start mt-4'>
          <div className='w-14 h-10 flex items-center justify-center bg-white rounded-full'>
            <img src={icon1} alt="icon" className='w-6 h-6' />
          </div>
          <div>
            <span className='font-bold mx-2'>Quality Products</span>
            <p className='ml-2'>
              Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.
            </p>
          </div>
        </div>
        <div className='flex items-start mt-4'>
          <div className='w-[66px] h-10 flex items-center justify-center bg-white rounded-full'>
            <img src={icon1} alt="icon" className='w-6 h-6' />
          </div>
          <div>
            <span className='font-bold mx-4'>Multiple Options</span>
            <p className='ml-4'>
                  We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. allows you choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.
            </p>
          </div>
        </div>
        <div className='flex items-start mt-4'>
          <div className='w-14 h-10 flex items-center justify-center bg-white rounded-full'>
            <img src={icon1} alt="icon" className='w-6 h-6' />
          </div>
          <div>
            <span className='font-bold mx-3'>Expertise and Support</span>
            <p className='ml-3'>
              Our team of experts is available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.
            </p>
          </div>
        </div>
        <div className='flex items-start mt-4'>
          <div className='w-10 h-10 flex items-center justify-center bg-white rounded-full'>
            <img src={icon1} alt="icon" className='w-6 h-6' />
          </div>
          <div>
            <span className='font-bold mx-3'>Durability Assurance</span>
            <p className='ml-3'>
              Trust our products with confidence, as we offer industry-leading durability assurance for our overlaminate films.
            </p>
          </div>
        </div>
        <div>
          <button className='text-lg bg-[#f26621] px-6 mt-4 py-2 rounded-md text-white'>Request a callback</button>
        </div>
      </div>
    </div>
  )
}

export default WhyUs