import React, { useEffect, useState } from 'react'

const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Simulating data loading with a delay
    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); 
            document.body.style.overflow = ''; 
        }, 2000); 

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='flex items-center justify-center h-screen'>
                   <h1 className=' text-[#FFF] text-[50px] font-ff-mont font-black' data-aos="zoom-in">FT_PLANE</h1>
                </div>
            </div>
        </div>
    )
}

export default Loadersection