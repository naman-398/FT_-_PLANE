import React, { useEffect } from 'react'
import earth from "../assets/images/earth.png";
import { Arrowleft, Arrowright, Barcode, Card1, Card2, Card3, Cardline, Smallaero } from '../Common/Icon';
import linebest from "../assets/images/linebest.png";
import linebest2 from "../assets/images/bestline2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Booksection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    return (
        <div className='bg-[#010223] xs:pt-[50px] pt-[40px] pb-[40px] xs:pb-[50px] lgg:pb-[110px] overflow-hidden' id='book'>
            <div className=' max-w-[1110px] px-3 mx-auto'>
                <div className=' flex flex-row flex-wrap -mx-3'>
                    <div className=' w-full md:w-1/2 px-3'>
                        <div className=' font-ff-mont text-[32px] lgg:text-[40px] text-[#FFF] font-bold leading-[normal ] xs:leading-[150%] tracking-[0.6px] text-center md:text-start' data-aos="fade-right">Book Popular Flight Tickets</div>
                        <p className=' font-ff-mont text-[14px] xs:text-base text-[#ffffffa6] leading-[normal] xs:leading-[150%] font-normal pt-[10px] xs:pt-[16px] text-center md:text-start' data-aos="fade-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <img src={earth} alt="earth" className=' max-w-[315px] max-h-[315px] md:pt-6 mx-auto md:mx-0' data-aos="fade-right"/>
                    </div>
                    <div className=' w-full relative z-[5] cursor-pointer md:w-1/2 px-3 flex flex-col lgg:flex-row lgg:justify-between gap-4  md:gap-[80px] lgg:gap-[unset] '>
                        <div className=' bg-[#FFFFFF] px-[12px] xs:px-[17px] py-[20px] xs:py-[30px] rounded-[30px] max-w-[390px] border-[unset]  overflow-hidden relative xxs:mx-auto md:mx-0 -mt-4' data-aos="fade-left">
                            <div className=' flex flex-wrap flex-row -mx-3 px-[13px]'>
                                <div className=' w-1/2 px-3'>
                                    <button className='text-[#313EF7] font-ff-mont text-[10px] xxs:text-[14px] lgg:text-[16px] font-medium p-[8px_10px] rounded-[49px] bg-[#313ef71a] cursor-pointer hover:shadow-[#313ef71a]'>Economy Saver</button>
                                    <p className=' text-[#030522] text-[13px] xxs:text-base font-bold font-ff-mont leading-[normal] xss:leading-[150%] mt-[24px]'>6 Flight Tickets</p>
                                    <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[24px]'>Passenger</p>
                                    <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Raju Mullah</p>
                                    <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Flight</p>
                                    <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>#5486626661</p>
                                    <p className=' text-[#9CA3AF] text-[12px] xxs:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Class</p>
                                    <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>Economy</p>
                                </div>
                                <div className=' w-1/2 px-3'>
                                    <div className=' flex items-center gap-[7.5px] justify-end'><p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>UK</p>
                                        <Smallaero />
                                        <p className=' text-[#030522] text-[14px] xxs:text-[16px] font-ff-mont font-semibold'>BD</p>
                                    </div>
                                    <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[60px] xxs:pt-[80px]'>Date</p>
                                    <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 Nov 2022</p>
                                    <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Gate</p>
                                    <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>20 A</p>
                                    <p className=' text-[#9CA3AF] text-[12px] xss:text-[14px] font-medium font-ff-mont leading-[normal] xxs:leading-[150%] pt-[16px]'>Seats</p>
                                    <p className=' text-[#030522] text-[13px] xxs:text-[16px] font-ff-mont font-semibold leading-[normal] xxs:leading-[150%] pt-[5px]'>5B - 11B</p>
                                </div>
                            </div>
                            <div className='pt-[25px] xxs:pt-[38px]'> <Cardline /></div>
                            <div className='pt-[20px] xxs:pt-[47px] max-w-[356px] overflow-hidden'><Barcode/></div>
                            <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] left-[-5%]'></div>
                            <div className=' w-[37px] h-[35px] bg-[#010223] rounded-full absolute bottom-[24%] right-[-5%]'></div>
                        </div>
                        <div className='lgg:flex lgg:flex-col flex-row  items-center lgg:-mt-[0] -mt-[40px] hidden'>
                          <img src={linebest2} alt="" className=' lgg:py-[60px] py-[40px] lgg:px-[unset] rotate-[270deg] lgg:rotate-[0deg] text-center'/>
                          <img src={linebest} alt="" className=' max-h-[151px] w-[1px] h-full hidden lgg:block'/>
                          <button className=' rounded-full duration-300 hover:bg-[#FFFFFF1A] bg-[#313EF7] p-[12px_16px] xs:mt-[51px] ml-[20px]'><Arrowleft/></button>
                          <button className='rounded-full hover:bg-[#FFFFFF1A] duration-300 bg-[#313EF7] p-[12px_16px] xs:mt-[11px] ml-[20px]'><Arrowright/></button>
                        </div>
                        <div className=' absolute z-[-3] top-[60px] left-[70px] hidden lg:block' data-aos="fade-left"> <Card1/></div>
                        <div className=' absolute z-[-2] top-[40px] left-[50px] hidden lg:block' data-aos="fade-left"> <Card2/></div>
                        <div className=' absolute z-[-1] top-[20px] left-[30px] hidden lg:block' data-aos="fade-left"> <Card3/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booksection