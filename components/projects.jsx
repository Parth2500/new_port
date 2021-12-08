import React from 'react';
import { Project } from '.';

const projects = () => {
    const projects = [{
            img:"./memories.jpg",
            title: "Memories", 
            description: "Memories is an MERN stack project in which you can create, edit, like, and delete a post called memory. you can create an account or sign in using your google account.",
            link: "https://silly-archimedes-131e91.netlify.app/",
        },
        {
            img:"./graphcms.jpg",
            title: "GraphCMS", 
            description: "GraphCMS is a nextjs project with graphql. It is a blogging website in which you can read blogs from various authors and comment on blogs. You can find blogs from the same categories and recent blogs.",
            link: "https://silly-archimedes-131e91.netlify.app/",
        },
        {
            img:"./logcabin.png",
            title: "Log Cabin", 
            description: "It is a 3d model of a wooden log cabin with a tree. Modelling, Rendering, and Composing all was done in blender.",
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
