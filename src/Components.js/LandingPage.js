import React from "react";
import banner from "../assests/banner image copy.png";
import logo from "../assests/Asset 3@4x-8.png";
import back from "../assests/Group 217.png";

function LandingPage() {
  return (
    <div>
      <div className="relative h-screen">
        <img src={logo} alt="logo" className="absolute top-10 left-[8rem]" />
        <img src={banner} alt="banner" className="object-cover w-full h-full" />
        <div className="absolute top-[34%] left-[8rem] font-bold w-[32rem] text-3xl font-serif text-gray-900">
          <span> Take your graphics protection </span> <br />{" "}
          <span>to the next level with DOL</span>
          <br /> <span>Max overlaminates</span>
          <br />
          <br />
          <span className="font-thin text-gray-600">
            Pair with MPI 1105 wrapping film
          </span>
          <br />
          <span className="font-thin text-gray-600">
            for ramped up protection
          </span>
        </div>
      </div>
      <div className="relative h-screen">
        <img src={back} alt="truck" className=" w-full h-full" />
        <div className="absolute top-[19%] left-[8rem]">
          <span className="text-4xl font-bold">DOL Max Overlaminate Films</span>
          <br />
          <span>
            Printed graphics deserve maximum protection.DOL max is solution
          </span>
          <br />
          <br />
          <span className="font-semibold text-gray-900">
            Features and benefits :
          </span>
          
          <ul className="list-disc">
            <br/>
            <li>
              Premium vertical durability of upto 7 years and upto 2 years
              horizontal <br />
              <span>durability protextion</span>
            </li>
            <br/>
            <li>The high gloss finish ehances the apperance of graphic and adds a <br/><span>
              special touch to help your graphics standout</span></li><br/>
            <li>Our digital overLaminates can be used on a variety of substrates <br/><span>
              including banners vehicle graphics,outdoor signage and more</span></li>
          </ul>
      <button className="bg-[#f26621] text-white text-lg px-[24px] py-[3px] rounded-md mt-6">Inquire now &rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
