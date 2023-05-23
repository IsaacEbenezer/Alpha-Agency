import React from 'react'
import LandingPage from '../LandingPage'

import Footer from '../Footer'
import WhyUs from '../WhyUs'

function Home() {
  return (
    <div>
        <LandingPage/>
        <WhyUs/>
        <Footer/> 
        <p className='relative top-[565px]  text-center mt-2 '>&copy; 2023 Avery Dennison Label Packaging Material. All rights reserved.</p>
    </div>
  )
}

export default Home