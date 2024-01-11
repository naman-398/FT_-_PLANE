import React, { useEffect } from 'react'
import s3_imh1 from "../assets/images/s3-img.png";
import { Bluedot } from '../Common/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Letsection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    return (
        <div className=' max-w-[1200px] px-3 mx-auto my-[40px] xs:my-[60px] md:my-[80px] lgg:my-[100px] overflow-hidden'>
            <div className=' flex flex-wrap flex-row -mx-3 '>
                <div className='w-full md:w-1/2 px-3 flex justify-center lgg:block'>
                    <img src={s3_imh1} alt="" className=' mx-auto' data-aos="fade-right"/>
                </div>
                <div className=' md:w-1/2 px-3 mt-3 lgg:mt-0'>
                    <p className=' font-ff-mont text-[20px] font-black leading-[24px] text-[#313EF7] flex items-center gap-4'  data-aos="fade-left">Let’s&nbsp;Fly
                    <hr  className=' w-full border-[2px] border-dashed border-[#E5E7EB] max-w-[483px]'/></p>
                    <p className=' font-ff-mont text-[20px] xxs:text-[23px] xs:text-[31px] font-bold leading-[normal] md:leading-[35px] lg:leading-[45px] text-[#030303] ' data-aos="fade-left">It’s one of the leading online flight booking platforms in the world</p>
                    <div className='py-[10px] xs:py-[25px] lgg:py-[40px] flex flex-col gap-[10px] relative'>
                        <p className=' flex items-center gap-[10px]' data-aos="fade-left">
                      <span className='w-[12px] xxs:w-[10px] md:w-[12px] lgg:w-[10px] h-[10px] rounded-full bg-[#313EF7] relative z-1'></span>
                            <p className='text-[14px] xs:text-base font-medium leading-[normal] sm:leading-[28px] md:leading-[20px] lg:leading-[28px] text-[#030303]'>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                        </p>
                        <p className=' flex items-center gap-[10px]' data-aos="fade-left">
                        <span className=' w-[10px] h-[10px] rounded-full bg-[#313EF7] relative z-1'></span>
                            <p className='text-[14px] xs:text-base font-medium leading-[normal] sm:leading-[28px] md:leading-[20px] lg:leading-[28px] text-[#030303]'>If you are going to use a passage of Lorem Ipsum</p>
                        </p>
                        <p className=' flex gap-[10px]' data-aos="fade-left">
                        <span className='w-[19px] xxs:w-[13px] sm:w-[10px] md:w-[19px] lgg:w-[14px] h-[10px] rounded-full bg-[#313EF7] mt-2 relative z-1'></span>
                            <p className='text-[14px] xs:text-base font-medium leading-[normal] sm:leading-[28px] md:leading-[20px] lg:leading-[28px] text-[#030303]'>Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </p>
                        <p className=' flex gap-[10px]' data-aos="fade-left">
                        <span className='w-[20px] xxs:w-[15px] sm:w-[10px] md:w-[22px] lgg:w-[15px] h-[10px] rounded-full bg-[#313EF7] mt-2 relative z-1'></span>
                            <p className='text-[14px] xs:text-base font-medium leading-[normal] sm:leading-[28px] md:leading-[20px] lg:leading-[28px] text-[#030303]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </p>
                        <hr className=' border-dashed border-[2px] rotate-[90deg] w-[140px] absolute left-[-11.4%] top-[46%] z-[-1] hidden xl:block'/>
                    </div>
                    <button className=' duration-300 border-[2px] border-[transparent] hover:border-[#313EF7] hover:bg-transparent btn hover:text-[#313EF7] font-ff-mont text-[16px] font-semibold leading-[28px] text-[#FFF] bg-[#313EF7] py-[10px] px-[25px] sm:py-[14px] sm:px-[45px] rounded-[56px]'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Letsection