import React from 'react';
import Link from 'next/link';

const Header = () => {
    const aa = [{name: 'Projects'}, {name: 'about'}, {name: 'Contact Us'}]

    return (
        <div className = "w-full px-4 sticky top-0 z-10 lg:px-24 bg-arsenic-dark bg-opacity-70 backdrop-blur shadow">
            <div className = "w-full inline-block py-4">
                <div className = "text-center float-left block">
                    <Link href = "/">
                        <span className = "cursor-pointer transition duration-1000 ease-in-out hover:text-turquoise font-bold text-4xl text-white">
                            Mp.
                        </span>
                    </Link>
                </div>
                <div className = "hidden md:float-left md:contents px-3">
                    <div className = "mr-2">
                        <Link href = "#contact">
                            <div  className = "md:float-right mt-2 align-middle transition duration-1000 ease-in-out text-white ml-12 font-semibold cursor-pointer hover:text-turquoise">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                                <span>
                                    Contact Us
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className = "mr-2">
                        <Link href = "#about">
                            <div  className = "md:float-right mt-2 align-middle transition duration-1000 ease-in-out text-white ml-12 font-semibold cursor-pointer hover:text-turquoise">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                                <span>
                                    About
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className = "mr-2">
                        <Link href = "#project">
                            <div  className = "md:float-right mt-2 align-middle transition duration-1000 ease-in-out text-white ml-12 font-semibold cursor-pointer hover:text-turquoise">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>
                                    Projects
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
