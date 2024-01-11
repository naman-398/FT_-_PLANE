import React, { useEffect } from 'react'
import pagelogo from "../assets/images/pagelogo.png";
import { Cfooter, Facebook, Inicon, Twitter } from '../Common/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
    useEffect(() => {
        AOS.init(
            {
                once: true,
                duration: 2000,
            }
        );
    }, [])
    return (
        <div className='bg-[url(../src/assets/images/footerimg.png)] bg-no-repeat bg-100% min-h-[454px] md:pt-[80px] xs:pt-[60px] pt-[40px] lg:pt-[100px] overflow-auto'>
            <div className=' max-w-[1200px] mx-auto px-3'>
                <div className=' flex flex-wrap flex-row -mx-3 justify-between'>
                    <div className=' md:w-1/3 px-3'>
                        <div className=' cursor-pointer flex items-center gap-2'>
                            <img src={pagelogo} alt="pagelogo" />
                            <p className=' font-ff-mont text-white text-[22px] tracking-[1.1px] font-extrabold '  data-aos="fade-right">FT PLANE</p>
                        </div>
                        <p className=' text-[#A7A7A7] font-ff-mont text-base font-normal leading-[150%] xxs:max-w-[300px] pt-6'  data-aos="fade-right">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <div className="flex items-center  gap-5 xs:pt-[24px] pt-[15px]"  data-aos="fade-right">
                            <a
                                href="https://www.facebook.com/"
                                className="rounded-full bg-white w-[42px] h-[42px] flex items-center justify-center duration-300 hover:translate-y-[-5px] hover:scale-[.9]">
                                <Facebook />
                            </a>
                            <a
                                href="https://in.linkedin.com/"
                                className="rounded-full bg-white w-[42px] h-[42px] flex items-center justify-center duration-300 hover:translate-y-[-5px] hover:scale-[.9]"
                            >
                                <Inicon />
                            </a>
                            <a
                                href="https://twitter.com/"
                                className="rounded-full bg-white w-[42px] h-[42px] flex items-center justify-center duration-300 hover:translate-y-[-5px] hover:scale-[.9]"
                            >
                                <Twitter />
                            </a>
                        </div>
                    </div>
                    <div className='md:w-7/12 px-3 w-full mt-4 md:mt-0'>
                        <div className=' flex flex-wrap flex-row -mx-3'>
                            <div className='w-1/2 xs:w-1/3 px-3 flex flex-col md:items-center'>
                                <ul>
                                    <li><a href="" className=' font-ff-mont text-[24px] leading-[normal] xs:leading-[150%] font-bold text-[#FFF]'  data-aos="fade-right">Address</a></li>
                                    <li className='mt-[10px] xs:mt-[10.27px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-left">Integrations</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-left">Hello</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-left">Intercom</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-left">Customer</a></li>
                                </ul>
                            </div>
                            <div className='w-1/2 xs:w-1/3 px-3 flex flex-col md:items-center'>
                                <ul>
                                    <li><a href="" className=' font-ff-mont text-[24px] leading-[150%] font-bold text-[#FFF]' data-aos="fade-right">About</a></li>
                                    <li className='mt-[10px] xs:mt-[10.27px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Our Blog</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Customers</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Our Team</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Careers</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Integrations</a></li>
                                </ul>
                            </div>
                            <div className='w-1/2 xs:w-1/3 px-3 flex flex-col md:items-center'>
                                <ul>
                                    <li><a href="" className=' font-ff-mont text-[24px] leading-[150%] font-bold text-[#FFF]' data-aos="fade-right">Support</a></li>
                                    <li className='mt-[10px] xs:mt-[10.27px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Test Zoom</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Account</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Support Center</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Live Training</a></li>
                                    <li className='mt-[10px] xs:mt-[15px]'><a href="" className=' font-ff-mont text-[16px] leading-[normal] xs:leading-[150%] font-normal text-[#A7A7A7] relative after:h-[2px] after:w-0 after:bg-[#FFF] after:bottom-[-2px] after:left-[50%] hover:text-[#FFF] duration-300 after:duration-300 after:absolute hover:after:w-full hover:after:left-0' data-aos="fade-right">Accessibility</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' w-full rounded-[1px] h-[3.5px] stroke-[#43ff64d9] my-[40px] opacity-50' />
               <div className=' flex justify-center pb-[30px]'> <p className='text-[10px] xs:text-[14px] font-normal font-ff-mont text-[#FFF] leading-[-0.28px] flex items-center gap-[1.5px]'><span>Copyright</span>  <Cfooter />
                <span>FT PLANE 2022 All right reserved</span></p></div>
            </div>
        </div>
    )
}

export default Footer