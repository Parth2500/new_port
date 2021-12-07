import React from 'react';
import { Type } from '.';

const intro = () => {
    return (
        <div className = "grid md:grid-cols-2 p-8 lg:mb-16" id = "intro">
            
            <div className = "flex">
                <div className = "m-auto text-4xl font-bold text-arsenic-dark">
                    <div className = "py-4">
                        Hey There!
                    </div>
                    I'm <span className = " text-turquoise text-5xl">Makawana Parth</span>

                    <div className = "mt-12 text-2xl">
                        <Type/>
                    </div>
                </div>
            </div>
            <div className = "flex">
                <img src = "/dev1.png" className = "m-auto h-3/5" />
            </div>
        </div>
    )
}

export default intro;
