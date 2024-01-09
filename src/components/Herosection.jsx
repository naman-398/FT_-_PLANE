import React, { useState } from 'react'
import hero1 from "../assets/images/herobg-img.png";
import pagelogo from "../assets/images/pagelogo.png";
import aeroplane from "../assets/images/bigaero.png";
import aviation from "../assets/images/Aviation.png";

const Herosection = () => {
  const [show, setShow] = useState(false);
  function mobileview() {
    setShow(!show);
    if (show === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <div className=' bg-[url(../src/assets/images/herobg-img.png)] bg-no-repeat 900:h-[810px] h-[400px] bg-100% relative' >
     
      <nav className=' py-[20px]'>
        <div className=' max-w-[1200px] px-3 mx-auto flex items-center justify-between'>
          <div className=' cursor-pointer flex items-center gap-2'>
            <img src={pagelogo} alt="pagelogo" />
            <p className=' font-ff-mont text-white text-[22px] tracking-[1.1px] font-extrabold '>FT PLANE</p>
          </div>
          <ul className={`${show ? "left-0" : "left-[-100%]"} flex items-center gap-[15px] 900:gap-[25px] lg:gap-[50px] menu-bar`}>
            <li><a href="#all" className=' font-ff-mont text-base font-semibold ease-in text-white nav-icon hover:text-[#313EF7]'>All Flight</a></li>
            <li><a href="#book" className=' font-ff-mont text-base font-semibold ease-in text-white nav-icon hover:text-[#313EF7]'>Schedule</a></li>
            <li><a href="#what" className=' font-ff-mont text-base font-semibold ease-in text-white nav-icon hover:text-[#313EF7]'>Passengers</a></li>
            <li><a href="#your" className=' font-ff-mont text-base font-semibold ease-in text-white nav-icon hover:text-[#313EF7]'>Your Orders</a></li>
            <li><a href="" className='hover:border-[#1C1D4B] hover:bg-[#313EF7] duration-300 font-ff-mont text-base font-semibold text-white py-[10px] px-[40px] border-[1px] border-[#FFF] rounded-[59px]'>Let’s Fly</a></li>
          </ul>
          <button
            className={`${show ? "" : "unshow"} z-[4] hover:border-[#1C1D4B] hover:bg-[#313EF7] duration-300 relative md:hidden font-ff-mont text-base font-semibold text-white xs:py-[10px] xs:px-[40px] py-[7px] px-[22px] border-[1px] border-[#FFF] rounded-[59px]`}
            onClick={mobileview}>
            show
          </button>
        </div>
      </nav>
      <div className=' max-w-[1200px] px-3 mx-auto overflow-hidden'>
        <h1 className='relative text-center pt:[30px] sm:pt-[70px] avia' ><img src={aviation} alt="avia" />
        <img src={aeroplane} alt=""  className=' hidden 900:block absolute 1200:top-[23%] top-[42%] left-[4%] lg:left-[9%] 1200:left-[-1%] 900:max-w-[880px] aeroanimation max-w-[1000px] 1200:max-w-[1140px]'/></h1>
        <img src={aeroplane} alt=""  className=' block 900:hidden w-full aeroanimation max-w-[1100px] 1200:max-w-[1140px] -mt-5'/>
        <div className=' font-ff-mont text-[#FFF] text-[25px] xxs:text-[30px] xs:text-[40px] sm:text-[46px] md:text-[48px] font-bold tracking-[0.72px] xs:leading-[150%] pt-4 900:pt-[231px] text-center'>Travel Around The World
        </div>
        <p className=' font-inter text-[#B8B8C4] text-center text-[12px] font-normal pt-2 pb-5 900:pb-0'>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
      </div>
    </div>
  )
}

export default Herosection