import React, { useEffect } from 'react'
import makeimg1 from "../assets/images/makeimg1.png";
import makeimg2 from "../assets/images/makeimg2.png";
import makeimg3 from "../assets/images/makeimg3.png";
import makeimg4 from "../assets/images/makeimg4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Makesection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    return (
        <div>

            <div className=' max-w-[1200px] px-3 mx-auto md:mt-[90px] mt-[80px] lg:mt-[117px] xs:mb-[60px] mb-[40px] md:mb-[80px] lg:mb-[100px] overflow-hidden'>
                <p className=' font-ff-mont leading-[normal] xs:leading-[150%] tracking-[0.6px] text-[#011736] text-[32px] xs:[text-35px] lg:text-[40px] font-bold text-center'>Make memories with us</p>
                <div className=' flex flex-row flex-wrap -mx-3 mt-[15px] xs:mt-[40px] justify-center'>
                    <div className='md:w-1/3 w-1/2 lg:w-1/4 px-3'>
                        <div className=' rounded-[200px] max-w-[262px] w-full relative border-img overflow-hidden mx-auto lg:mx-0'  data-aos="fade-right">
                            <img src={makeimg1} alt="makeimg1" className=' w-full h-full'/>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-1/2 lg:w-1/4 mt-[20px] md:mt-[50px] px-3'>
                        <div className=' rounded-[200px] max-w-[262px] w-full relative border-img overflow-hidden mx-auto lg:mx-0'  data-aos="fade-right">
                            <img src={makeimg2} alt="makeimg1" className=' w-full h-full '/>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-1/2 lg:w-1/4 px-3'>
                        <div className=' rounded-[200px] max-w-[262px] w-full relative border-img overflow-hidden mx-auto lg:mx-0'  data-aos="fade-left">
                            <img src={makeimg3} alt="makeimg1" className=' w-full h-full '/>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-1/2 lg:w-1/4 mt-[20px] md:mt-[50px] px-3'>
                        <div className=' rounded-[200px] max-w-[262px] w-full relative border-img overflow-hidden mx-auto lg:mx-0'  data-aos="fade-left">
                            <img src={makeimg4} alt="makeimg1" className=' w-full h-full '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Makesection