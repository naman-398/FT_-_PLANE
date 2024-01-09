import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Sunscribesec = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    return (
        <div className=' bg-[#F5F5FF] md:pt-[80px] xs:pt-[60px] pt-[40px] lg:pt-[100px] xs:pb-[60px] pb-[40px] lg:pb-[70px] overflow-hidden' id='your'>
            <div className=' max-w-1200px px-3 mx-auto flex justify-center items-center flex-col'>
                <p className=' leading-[normal] xs:leading-[150%] font-ff-mont text-[#011736] max-w-[534px] text-center font-bold tracking-[0.6px] text-[28px] xs:text-[32px] md:text-[35px] lg:text-[40px]'  data-aos="fade-left">Subscribe Newsletter &  Get Letest News</p>
                <div className='p-[15px_11px_15px_20px] xs:p-[11px_11px_11px_20px] rounded-[150px] shadow-[0px_100px_200px_0px] shadow-[#0117361a] bg-[#FFFFFF] max-w-[493px] w-full flex xs:mt-[25px] mt-[15px] lg:mt-[40px]'  data-aos="fade-right">
                    <input type="email" placeholder='Enter your email address' className=' outline-0 font-Rubik font-normal leading-[24px] text-[20px] text-[#AEB5BF] w-full' />
                    <button className=' duration-300 border-[2px] border-[transparent] hover:border-[#313EF7] hover:bg-transparent hover:text-[#313EF7] font-ff-mont text-[16px] font-semibold text-[#FFF] leading-[28px] xs:p-[10px_25px] bg-[#313EF7] rounded-[56px] hidden xs:block'>Subscribe</button>
                </div>
                <button className=' duration-300 border-[2px] border-[transparent] hover:border-[#313EF7] hover:bg-transparent hover:text-[#313EF7] font-ff-mont text-[16px] font-semibold text-[#FFF] leading-[28px] p-[10px_25px] bg-[#313EF7] rounded-[56px]  xs:hidden xs:mt-4 mt-2'>Subscribe</button>
            </div>
        </div>
    )
}

export default Sunscribesec