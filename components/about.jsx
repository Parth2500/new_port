import React from 'react';

const about = () => {
    return (
        <div className = "pt-16 grid p-8 mb-16" id = "about">
            <div className = "grid md:grid-cols-1">
                <div className = "flex">
                    <div className = "m-auto text-4xl font-bold text-arsenic-dark p-8">
                        About My Self
                    </div>
                </div>
            </div>
            <div className = "grid md:grid-cols-3">
                <div className = "flex col-span-2">
                    <div className = "m-auto text-2xl text-arsenic-dark p-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>
                    Nunc posuere suscipit est porta gravida. Cras at rutrum nisl. Donec dapibus facilisis quam in tincidunt.<br/><br/>
                    Cras lobortis sem ipsum, et fringilla sapien rutrum vel. Morbi at tellus luctus, fermentum metus id, blandit velit. Sed a erat vitae turpis tincidunt sollicitudin id ac turpis. Quisque non dui lorem.<br/><br/>
                    Morbi vel porttitor nisi. Nam tristique dui sit amet lectus mattis, ut ornare leo aliquam. Nunc a nibh quis ex viverra suscipit.
                    </div>
                </div>
                <div className = "flex col-span-1">
                    <div className = "mx-auto p-8">
                        <img src = "./avatargreen.png" className = "w-4/5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;
