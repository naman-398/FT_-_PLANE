import React, { useEffect } from 'react'
import bestimg1 from "../assets/images/bestimg1.png";
import best1 from "../assets/images/best1.png";
import bestimg2 from "../assets/images/bestimg2.png";
import best2 from "../assets/images/best2.png";
import bestimg3 from "../assets/images/bestimg3.png";
import best3 from "../assets/images/best3.png";
import bestimg4 from "../assets/images/bestimg4.png";
import best4 from "../assets/images/best4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const mycardinfo1 = [

    {
        AOS1: "flip-left",
        img: bestimg1,
        img2: best1,
        text1: "Raju Mullah",
        text2: "@rajumulllah"
    },
    {
        AOS1: "flip-right",
        img: bestimg2,
        img2: best2,
        text1: "Zaire Vetrovs",
        text2: "@zairevetrovs"
    },
    {
        AOS1: "flip-left",
        img: bestimg3,
        img2: best3,
        text1: "Marcus Dias",
        text2: "@marcusdias"
    },
    {
        AOS1: "flip-right",
        img: bestimg4,
        img2: best4,
        text1: "Davis Schleifer",
        text2: "@davisschleifer"
    },
]
const Bestsection = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    const mycard1 = mycardinfo1.map((mycard1) => (
        <div className='w-1/2 md:w-1/3 lg:w-1/4 px-3' id='what'>
        <div className=' max-w-[282px] pb-[40px] max-h-[420px] rounded-[213px] bg-[#FFF] shadow-shadow w-full mt-[15px] xs:mt-[25px] md:mt-[40px] mx-auto md:mx-0' data-aos={mycard1.AOS1}>
            <img src={mycard1.img} alt="" className=' w-full' />
            <div className=' -mt-[15px] 400:-mt-[20px]'><img src={mycard1.img2} alt="best1" className='mx-auto max-w-[40px] 400:max-w-[50px] xs:max-w-[80px] max-h-[50px] xs:max-h-[80px] h-full w-full' /></div>
            <p className=' text-[#011736] text-center font-ff-mont text-[16px] 400:text-[18px] sm:text-[24px] font-semibold leading-[normal] xxs:leading-[150%] mt-1 xxs:mt-2'>{mycard1.text1}</p>
            <p className=' text-[#979797] text-center font-ff-mont text-[12px] 400:text-[14px] sm:text-[16px] font-medium leading-[normal] xxs:leading-[150%] xxs:mt-1'>{mycard1.text2}</p>
        </div>
    </div>
    ))
    return (
        <div className=' max-w-[1200px] px-3 mx-auto mt-[100px] '>
            <div className=' text[#011736] text-center text-[32px] xs:text-[35px] md:text-[40px] font-bold leading-[normal] xs:leading-[150%] tracking-[0.6px] -mt-[90px] xs:-mt-[70px] md:-mt-[45px]'>Best travelars of this month</div>
            <div className=' flex flex-row flex-wrap -mx-3 justify-center'>
                {mycard1}
            </div>
        </div>
    )
}

export default Bestsection