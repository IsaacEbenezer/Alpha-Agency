import React from 'react'
import wall from "../assests/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable.png"

function WhyUs() {
  return (
    <div>
        <div className='flex bg-gray-300'>
            <img src={wall} alt ="wall" className='h-screen'/>
            <div >
                <h1>Why us?</h1>
                <div >
                <div className='flex' >
                <span>Quality Products</span> 
                 Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints. 
                 </div>
                 <div>
                 <span>Multiple Options</span> 
                 We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.
                 </div>
                 <div>
                 <span>Expertise and Support</span> 
                  Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</div>
                  <div>
                  <span>Durability Assurance </span>
                   Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.
                   </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs