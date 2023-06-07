import React from "react";
import error_img from "./Error_IMG.png";

const Error = () => {
    return (
        <div className="flex flex-col place-content-center place-items-center ">
            <div className="flex flex-col place-content-center place-items-center mt-24">
                <img src={error_img} alt="Error 404" className="w-1/5 h-1/5 "/>
                <h1 className="font-bold text-2xl mt-12">Something's wrong here.</h1>
                <span className="font-semibold text-xl mt-4 w-2/5 text-center">
                    This is a 404 error, which means you've clicked on a bad link or 
                    entered an invalid URL.
                </span>
            </div>
        </div>
    )
}

export default Error