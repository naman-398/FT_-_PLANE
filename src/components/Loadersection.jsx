import React, { useEffect, useState } from 'react'

const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Simulating data loading with a delay
    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); 
            document.body.style.overflow = ''; 
        }, 3500); 

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='flex items-center justify-center h-screen'>
                    <div class="loader" data-aos="fade-up">
                        <div class="animate-charcter font-ff-mont font-black text-[40px] xs:text-[60px] md:text-[100px]">FT_PLANE..</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loadersection