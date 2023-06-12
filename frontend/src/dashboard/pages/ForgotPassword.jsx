import React from "react";
import { Input, Button,  } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return(
        <div>
            <div className="flex flex-col place-content-center place-items-center">
           
            <nav className="flex place-content-center place-items-center w-full h-16 border-b-2
                      sm:place-content-start sm:h-20 sm:w-2/3">
                <Link to="/" className="mx-auto sm:ml-20 ">
                <div className="text-2xl sm:text-3xl font-black  text-center text-indigo-600">
                    SHORTENITE
                </div>
                </Link>
            </nav>
    
            <div className="flex flex-col m-16 sm:w-2/3 sm:m-16  md:w-2/5  rounded-lg shadow-lg">
                <span className="text-2xl sm:text-3xl m-4  font-semibold text-center">Forgot Password</span>
    
                <div className="mx-10 sm:mx-16 mt-12  sm:mt-12">
                    <label className="text-md sm:text-lg font-normal" for="name">Username or Email Address</label>
                    <Input className="mt-3" variant="outline" placeholder="" />
                </div>

                <Button className="my-12 mx-16" colorScheme='blue'>Reset</Button>
    
            </div>
    
        </div>
        </div>
    )
}

export default ForgotPassword