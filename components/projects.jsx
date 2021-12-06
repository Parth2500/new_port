import React from 'react';
import { Project } from '.';

const projects = () => {
    return (
        <div className = " pt-16 grid p-8 mb-16" id = "project">

            <div className = "grid md:grid-cols-1">

                <div className = "flex">
                    <div className = "m-auto text-4xl font-bold text-white p-8">
                        My Projects
                    </div>
                </div>

            </div>

            <div className = "grid md:grid-cols-3">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
            
        </div>
    )
}

export default projects;
