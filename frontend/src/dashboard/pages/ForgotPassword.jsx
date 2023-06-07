import React from "react";
import { Input, Button,  } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return(
        <div>
            <div className="flex flex-col place-content-center place-items-center">
           
           <nav className="flex place-content-start place-items-center w-2/3 h-20 border-b-2">
             <Link to="/" className="ml-20">
               <div className="text-3xl font-black  text-center text-indigo-600">
                 SHORTENITE
               </div>
             </Link>
           </nav>
 
           <div className="flex flex-col  w-1/3 mx-16 mt-24 rounded-lg shadow-lg ">
             <span className="text-3xl font-semibold text-center">Forgot Password</span>
 
             <div className="mx-16 mt-20">
                 <label className="text-lg font-normal" for="name">Username or Email Address</label>
                 <Input className="mt-3" variant="outline" placeholder="" />
             </div>

             <Button className="my-12 mx-16" colorScheme='blue'>Reset</Button>
 
           </div>
 
       </div>
        </div>
    )
}

export default ForgotPassword