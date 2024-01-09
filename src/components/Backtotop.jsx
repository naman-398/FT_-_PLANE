import React, { useState } from 'react'


const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
};

// Event listener to show/hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
});
  return (
    <div>
    <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-[20px] right-[20px] z-[9]`}
    onClick={scrollToTop}
    style={{ display: isVisible ? 'block' : 'none',}} >
        <div className='w-[30px] h-[30px] xs:w-[50px] xs:h-[50px] rounded-full bg-[#313ef7] flex justify-center items-center'>
<svg className='pb-1 m-auto' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
</div>
</button>
</div>
  )
}

export default Backtotop