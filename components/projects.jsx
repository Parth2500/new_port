import React from 'react';
import { Project } from '.';

const projects = () => {
    const projects = [{
            img:"./memories.jpg",
            title: "Memories", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nulla ut ipsum tincidunt semper. Nam hendrerit, mi eu faucibus suscipit, mauris eros placerat velit, eu tincidunt ligula nisl ut mauris. Aliquam erat volutpat. Donec tortor diam, elementum sed lectus vitae, congue auctor sapien.",
            link: "https://silly-archimedes-131e91.netlify.app/",
        },
        {
            img:"./graphcms.jpg",
            title: "GraphCMS", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nulla ut ipsum tincidunt semper. Nam hendrerit, mi eu faucibus suscipit, mauris eros placerat velit, eu tincidunt ligula nisl ut mauris. Aliquam erat volutpat. Donec tortor diam, elementum sed lectus vitae, congue auctor sapien.",
            link: "https://silly-archimedes-131e91.netlify.app/",
        }
    ]

    return (
        <div className = " pt-16 grid p-8 mb-16" id = "project">

            <div className = "grid md:grid-cols-1">

                <div className = "flex">
                    <div className = "m-auto text-4xl font-bold text-arsenic-dark p-8">
                        My Projects
                    </div>
                </div>

            </div>

            <div className = "grid md:grid-cols-3">
                {projects.map((project) => (
                    <Project project = {project}/>
                ))}
            </div>
            
        </div>
    )
}

export default projects;
