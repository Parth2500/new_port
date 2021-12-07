import React, { useEffect, useState } from 'react';

const btt = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);
    
      // This function will scroll the window to the top 
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

    return (
        <>
            {showButton && (
                <div className = "bg-turquoise p-4 fixed bottom-8 right-8 z-20 cursor-pointer rounded-md" onClick = {scrollToTop} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
                </div>
            )}
        </>
    )
}

export default btt;
