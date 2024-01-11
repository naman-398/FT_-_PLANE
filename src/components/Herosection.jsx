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
    <div className=' bg-[url(../src/assets/images/herobg-img.png)] bg-no-repeat 900:min-h-[810px] min-h-[400px] bg-100% relative' >

      <nav className=' py-[20px] overflow-hidden'>
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
            <li><a href="" className='hover:border-[#1C1D4B] hover:bg-[#313EF7] duration-300 font-ff-mont text-base font-semibold text-white py-[10px] px-[40px] border-[1px] border-[#FFF] rounded-[59px] btn'>Let’s Fly</a></li>
          </ul>
          <button
            className={`${show ? "" : "unshow"} z-[4] hover:border-[#1C1D4B] hover:bg-[#313EF7] duration-300 relative md:hidden rotate-90 font-ff-mont text-base font-semibold text-white p-[10px_15px] mr-8 border-[1px] border-[#FFF] rounded-[59px]`}
            onClick={mobileview}>
            {show === false ? "|||" : "X"}
          </button>
        </div>
      </nav>
      <div className=' max-w-[1200px] px-3 mx-auto overflow-hidden flex justify-center items-center flex-col'>
        <div className='relative pt:[30px] avia text-transparent md:text-[117.637px] sm:text-[96.637px] xs:text-[86.637px] xxs:text-[62.637px] text-[38.637px] tracking-[12.582px] md:tracking-[12.582px] lg:tracking-[54.582px] 1200:tracking-[70.582px] leading-[150%] font-black font-ff-mont  flex w-[100%] max-w-[1120px] text-center' >
          <h1 className=' text-center mx-auto'> AVIATIO<span className=' tracking-normal'>N</span></h1>
        </div>
        <img src={aeroplane} alt="" className=' w-full aeroanimation max-w-[1100px] 1200:max-w-[1140px] -mt-[13%] relative z-[1]' />
        <div className=' font-ff-mont text-[#FFF] text-[25px] xxs:text-[30px] xs:text-[40px] sm:text-[46px] md:text-[48px] font-bold tracking-[0.72px] xs:leading-[150%] pt-[30px] md:pt-[54px] text-center'>Travel Around The World
        </div>
        <p className=' font-inter text-[#B8B8C4] text-center text-[12px] font-normal pt-2 pb-5 900:pb-0'>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
      </div>
    </div>
  )
}

export default Herosection