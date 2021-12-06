import React from 'react';

const project = () => {
    return (
        <div className = "flex m-8 ">
            <div className = "m-auto p-8 rounded-md bg-arsenic-dark bg-opacity-50 backdrop-blur shadow text-justify">
                <img src = "/memories.jpg" className = "rounded-md mb-8"/>
                <span className = "sm:text-2xl text-sm text-turquoise block md-2 text-center">
                    Title
                </span>
                <span className = "sm:text-lg text-xs text-white block mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue nulla ut ipsum tincidunt semper. Nam hendrerit, mi eu faucibus suscipit, mauris eros placerat velit, eu tincidunt ligula nisl ut mauris. Aliquam erat volutpat. Donec tortor diam, elementum sed lectus vitae, congue auctor sapien.
                </span>
                <span className = " bg-turquoise text-center block p-2 rounded-md text-lg font-bold cursor-pointer">
                    Visit
                </span>
            </div>
        </div>
    )
}

export default project;
