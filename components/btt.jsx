import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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
                    <img src = "./up.png" className = "w-6"/>
                </div>
            )}
        </>
    )
}

export default btt;
