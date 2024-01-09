import React, { useEffect, useState } from 'react'
import { Loctionicon, Wrongicon } from "../Common/Icon";
import { Travelicon } from "../Common/Icon";
import { Checkicon } from "../Common/Icon";
import { Aeroicon } from "../Common/Icon";
import { Rightaero } from "../Common/Icon";
import { Moreicon } from "../Common/Icon";
import { Lockicon } from "../Common/Icon";
import { Earphoneicon } from "../Common/Icon";
import AOS from 'aos';
import 'aos/dist/aos.css';
const mycardinfo = [

    {
        aos: 'flip-right',
        para1: 'Best Guide',
        svg: <Aeroicon />
    },
    {
        aos: 'flip-right',
        para1: 'More Discount',
        svg: <Moreicon />
    },
    {
        aos: 'flip-left',
        para1: 'Private',
        svg: <Lockicon />
    },
    {
        aos: 'flip-left',
        para1: 'Online Support',
        svg: <Earphoneicon />
    },
]
const Oursection = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
  
    const openModal1 = () => {
      setShowModal1(true);
      setShowModal2(false);
      setShowModal3(false);
    };
  
    const openModal2 = () => {
      setShowModal1(false);
      setShowModal2(true);
      setShowModal3(false);
    };
  
    const openModal3 = () => {
      setShowModal1(false);
      setShowModal2(false);
      setShowModal3(true);
    };
  
    const closeModal = () => {
      setShowModal1(false);
      setShowModal2(false);
      setShowModal3(false);
    };
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    const [first, setFirst] = useState('tab1')
    function tabs(tab) {
        setFirst(tab);
    }
    const mycard = mycardinfo.map((mycard, index) => (
        <div className={`${index === 0 || index === 2 ? "md:mt-[30px]" : ""} xs:w-1/2 md:w-1/3 lg:w-1/4 px-3`}>
            <div className='px-[10px] lg:px-[21px] py-[42px] bg-[#FFF] rounded-[185px]  shadow-shadow max-w-[281px] mt-4 md:mt-0 mx-auto md:mx-0' data-aos={mycard.aos}>
                <div className=' w-[70px] h-[70px] rounded-full bg-[#F5F5FF] flex justify-center items-center mx-auto'>
                    {mycard.svg}
                </div>
                <p className=' text-center text-[#030522] text-[20px] xs:text-[24px] font-extrabold leading[150%] pt-[16px] font-ff-mont'> {mycard.para1} </p>
                <p className=' font-ff-mont text-[##5B5D6F] text-[16px] leading-[normal] xs:leading-[150%] font-normal text-center pt:[5px] xs:pt-[10px] '>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
                <div className=' bg-[#030522] w-[50px] h-[50px] rounded-full mx-auto mt-[15px] xs:mt-[32px] flex justify-center items-center'>
                    <Rightaero />
                </div>
            </div>
        </div>
    ))
    return (
        <div className='bg-[#FEFEFE] relative z-0' id='all'>
            { showModal1 && (
                <div className=' absolute w-full h-full top-[-20%] xs:top-[-50%] start-0 flex justify-center xs:items-center z-[5] backdrop-blur-md'>
            <span className=' max-w-[300px] xs:max-w-[500px] max-h-[220px] xs:max-h-[350px] w-full h-full rounded-3xl bg-[#FFF] shadow-shadow p-[20px] flex flex-col justify-center items-center relative mt-[300px] xs:mt-0'>
                            <div className=' absolute right-[15px] top-[15px] cursor-pointer' onClick={closeModal}> <Wrongicon />
                            </div>
                            <p className=' text-center font-ff-mont font-black text-[20px] xs:text-[30px] text-[#000] '> Congratulation</p>
                            <p className=' text-center font-ff-mont font-semibold text-[15px] xs:text-[18px] text-[#313EF7] mt-1 xs:mt-3'> Your Economy Class Ticket Is Booked</p>
                            <button className=' p-[6px_12px] xs:p-[10px_15px] bg-[#313EF7] text-[#FFF] text-[14px] xs:text-[18px] font-ff-mont font-normal rounded-[56px] mt-1 xs:mt-[15px] border-[2px] border-transparent hover:border-[#313EF7] hover:text-[#313EF7] duration-300 hover:bg-transparent' onClick={closeModal}> Done</button>
                        </span></div>)}
            { showModal2 && (
                <div className=' absolute w-full h-full top-[-20%] xs:top-[-50%]  start-0 flex justify-center xs:items-center z-[5] backdrop-blur-md'>
            <span className=' max-w-[300px] xs:max-w-[500px] max-h-[220px] xs:max-h-[350px] w-full h-full rounded-3xl bg-[#FFF] shadow-shadow p-[20px] flex flex-col justify-center items-center relative mt-[300px] xs:mt-0'>
                            <div className=' absolute right-[15px] top-[15px] cursor-pointer' onClick={closeModal}> <Wrongicon />
                            </div>
                            <p className=' text-center font-ff-mont font-black text-[20px] xs:text-[30px] text-[#000] '> Congratulation</p>
                            <p className=' text-center font-ff-mont font-semibold text-[15px] xs:text-[18px] text-[#313EF7] mt-1 xs:mt-3'> Your Busniness Class Ticket Is Booked</p>
                            <button className=' p-[6px_12px] xs:p-[10px_15px] bg-[#313EF7] text-[#FFF] text-[14px] xs:text-[18px] font-ff-mont font-normal rounded-[56px] mt-1 xs:mt-[15px] border-[2px] border-transparent hover:border-[#313EF7] hover:text-[#313EF7] duration-300 hover:bg-transparent' onClick={closeModal}> Done</button>
                        </span></div>)}
            { showModal3 && (
                <div className=' absolute w-full h-full top-[-20%] xs:top-[-50%]  start-0 flex justify-center xs:items-center z-[5] backdrop-blur-md'>
            <span className=' max-w-[300px] xs:max-w-[500px] max-h-[220px] xs:max-h-[350px] w-full h-full rounded-3xl bg-[#FFF] shadow-shadow p-[20px] flex flex-col justify-center items-center relative mt-[300px] xs:mt-0'>
                            <div className=' absolute right-[15px] top-[15px] cursor-pointer' onClick={closeModal}> <Wrongicon />
                            </div>
                            <p className=' text-center font-ff-mont font-black text-[20px] xs:text-[30px] text-[#000] '> Congratulation</p>
                            <p className=' text-center font-ff-mont font-semibold text-[15px] xs:text-[18px] text-[#313EF7] mt-1 xs:mt-3'> Your First Class Ticket Is Booked</p>
                            <button className=' p-[6px_12px] xs:p-[10px_15px] bg-[#313EF7] text-[#FFF] text-[14px] xs:text-[18px] font-ff-mont font-normal rounded-[56px] mt-1 xs:mt-[15px] border-[2px] border-transparent hover:border-[#313EF7] hover:text-[#313EF7] duration-300 hover:bg-transparent' onClick={closeModal}> Done</button>
                        </span></div>)}
            <div className='max-w-[1200px] px-3 mx-auto relative z-[0]'>
                <div className=' pt-4 900:pt-0 900:translate-y-[-54%]'>
                    <div className=' flex overflow-x-scroll xs:overscroll-x-none'>
                        <button onClick={() => tabs('tab1')} className={`${first === "tab1" ? "tab" : ""} font-ff-mont text-[16px] xs:text-[18px] font-medium leading-[normal] sm:leading-[28px] text-[#030522] py-[16px] px-[23px] sm:px-[42px] rounded-tl-[20px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}>Economy</button>
                        <button onClick={() => tabs('tab2')} className={`${first === "tab2" ? "tab" : ""} font-ff-mont text-[16px] xs:text-[18px] font-medium leading-[normal] sm:leading-[28px] text-[#030522] py-[16px] px-[20px] sm:px-[39px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}>Busniness </button>
                        <button onClick={() => tabs('tab3')} className={`${first === "tab3" ? "tab" : ""} font-ff-mont text-[16px] xs:text-[18px] font-medium leading-[normal] sm:leading-[28px] text-[#030522] py-[16px] px-[47px] sm:px-[66px] rounded-tr-[20px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}>First</button>
                    </div>
                    <div className='p-[15px] xs:p-[25px] lgg:p-[40px] bg-[#FFFFFF] xs:rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]  shadow-shadow '>
                        {first === "tab1" && <div>

                            <div className='hidden 900:block'>
                                <div className=' flex flex-wrap justify-between  max-w-[1060px]'>
                                    <div className=' flex items-center gap-2'>
                                        <div className=' sm:w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Loctionicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[16px] xs:text-[18px] font-semibold text-[#030522] leading-[normal] xs:leading-[150%]'>Location</p>
                                            <p className=' font-ff-mont text-[14px] xs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] xs:leading-[28px]'>Where are you going?</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Travelicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Travelers</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add guest</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Checkicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Check-in</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add date</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Checkicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Check-out</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add guest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' block 900:hidden w-full'>
                                <div className=' flex flex-wrap flex-row -mx-3 justify-center'>
                                    <div className='w-1/2 md:w-1/3 xxs:px-3 px-1 pt-4'>
                                        <div className=' flex items-center gap-2'>
                                            <div className=' sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Checkicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Check-in</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add date</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 md:w-1/3 xxs:px-3 px-1 pt-4'>
                                        <div className=' flex items-center gap-2'>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Checkicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Check-out</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add guest</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-1/2 md:w-1/3 xxs:px-3 px-1 md:pt-0'>
                                        <div className=' flex items-center gap-2 pt-4 '>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Loctionicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Location</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF]  leading-[normal] sm:leading-[28px]'>Where are you going?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 md:w-1/3  xxs:px-3 px-1'>
                                        <div className=' flex items-center gap-2 pt-4'>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Travelicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Travelers</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add guest</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-center mt-[8px] xs:mt-[25px]'>
                            <button onClick={openModal1} className=' font-ff-mont text-[16px] font-semibold duration-300 border-[2px] border-[transparent] hover:border-[#313EF7] hover:bg-transparent hover:text-[#313EF7] leading-[28px] text-[#FFF] py-[10px] xs:py-[14px] px-[25px] xs:px-[45px] bg-[#313EF7] rounded-[56px] shadow-button'>Book Now </button>
                        </div>
                        </div>}
                        {first === "tab2" && <div>

                            <div className='hidden 900:block'>
                                <div className=' flex flex-wrap justify-between  max-w-[1060px]'>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Checkicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Check-in</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add date</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Checkicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Check-out</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add guest</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Loctionicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Location</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Where are you going?</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Travelicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Travelers</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add guest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' block 900:hidden w-full'>
                                <div className=' flex flex-wrap flex-row -mx-3 justify-center'>
                                    <div className='w-1/2 md:w-1/3 xxs:px-3 px-1 pt-4'>
                                        <div className=' flex items-center gap-2'>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Checkicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Check-out</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add guest</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 md:w-1/3 xxs:px-3 px-1 pt-4'>
                                        <div className=' flex items-center gap-2'>
                                            <div className=' sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Checkicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Check-in</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add date</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 md:w-1/3  xxs:px-3 px-1'>
                                        <div className=' flex items-center gap-2 pt-4'>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Travelicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Travelers</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add guest</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' w-1/2 md:w-1/3 xxs:px-3 px-1 md:pt-0'>
                                        <div className=' flex items-center gap-2 pt-4 '>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Loctionicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Location</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF]  leading-[normal] sm:leading-[28px]'>Where are you going?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-center mt-[8px] xs:mt-[25px]'>
                            <button onClick={openModal2} className=' font-ff-mont text-[16px] font-semibold duration-300 border-[2px] border-[transparent] hover:border-[#313EF7] hover:bg-transparent hover:text-[#313EF7] leading-[28px] text-[#FFF] py-[10px] xs:py-[14px] px-[25px] xs:px-[45px] bg-[#313EF7] rounded-[56px] shadow-button'>Book Now </button>
                        </div>
                        </div>}
                        {first === "tab3" && <div>

                            <div className='hidden 900:block'>
                                <div className=' flex flex-wrap justify-between  max-w-[1060px]'>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Checkicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Check-out</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add guest</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Loctionicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Location</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Where are you going?</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Checkicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Check-in</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add date</p>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                        <div className='w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                            <Travelicon />
                                        </div>
                                        <div className=' '>
                                            <p className='font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]'>Travelers</p>
                                            <p className=' font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]'>Add guest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' block 900:hidden w-full'>
                                <div className=' flex flex-wrap flex-row -mx-3 justify-center'>
                                    <div className=' w-1/2 md:w-1/3 xxs:px-3 px-1 md:pt-0'>
                                        <div className=' flex items-center gap-2 pt-4 '>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Loctionicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Location</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF]  leading-[normal] sm:leading-[28px]'>Where are you going?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 md:w-1/3  xxs:px-3 px-1'>
                                        <div className=' flex items-center gap-2 pt-4'>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Travelicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Travelers</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add guest</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 md:w-1/3 xxs:px-3 px-1 pt-4'>
                                        <div className=' flex items-center gap-2'>
                                            <div className=' sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Checkicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Check-in</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add date</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 md:w-1/3 xxs:px-3 px-1 pt-4'>
                                        <div className=' flex items-center gap-2'>
                                            <div className='sm:w-[56px] sm:h-[56px] w-[42px] h-[42px] bg-[#F5F5FF] flex justify-center items-center rounded-full'>
                                                <Checkicon />
                                            </div>
                                            <div className=' '>
                                                <p className='font-ff-mont text-[16px] xxs:text-[18px] font-semibold text-[#030522] leading-[normal] sm:leading-[150%]'>Check-out</p>
                                                <p className=' font-ff-mont text-[12px] xxs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] sm:leading-[28px]'>Add guest</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-center mt-[8px] xs:mt-[25px]'>
                            <button onClick={openModal3} className=' font-ff-mont text-[16px] font-semibold duration-300 border-[2px] border-[transparent] hover:border-[#313EF7] hover:bg-transparent hover:text-[#313EF7] leading-[28px] text-[#FFF] py-[10px] xs:py-[14px] px-[25px] xs:px-[45px] bg-[#313EF7] rounded-[56px] shadow-button'>Book Now </button>
                        </div>
                        </div>}
                    </div>
                </div>
                <div className=' text[#030522] text-center text-[40px] font-bold leading-[150%] tracking-[0.6px] 900:-mt-[45px] sm:sm-[15px] md:mb-[40px] mt-3'>Our Features</div>
                <div className="flex flex-wrap flex-row -mx-3 justify-center">
                    {mycard}
                </div>
            </div>
        </div>
    )
}

export default Oursection