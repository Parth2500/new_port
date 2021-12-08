import React from 'react';
import Link from 'next/link';

const project = ({project}) => {
    return (
        <div className = "flex m-8 ">
            <div className = "m-auto p-8 rounded-md bg-arsenic-dark bg-opacity-50 backdrop-blur shadow text-justify">
                <img src = {project.img} className = "rounded-md mb-8"/>
                <span className = "sm:text-2xl text-sm text-arsenic-dark block mb-4 text-center">
                    {project.title}
                </span>
                <span className = "sm:text-lg text-xs text-white block mb-8">
                    {project.description}
                </span>
                <span className = " bg-turquoise text-center block p-2 rounded-md text-lg font-bold cursor-pointer text-arsenic-dark">
                    <Link href = {project.link}>
                        Visit
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default project;
