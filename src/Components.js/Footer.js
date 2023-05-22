import React from 'react'
import logo from "../assests/Vector Smart Object.png"
function Footer() {
  return (
    <div>
        <div className=' flex h-[246px] bg-[#1a1a1a] top-[60px] '>
            <div className=' left-[124px] text-[#FFFFFF]'>
                Best solutions from
                <img src={logo} alt= "logo"/>
                </div>
        </div>
        
    </div>
  )
}

export default Footer