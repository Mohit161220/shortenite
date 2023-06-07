import React from 'react'
import { Input, Button,  } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <div className="flex flex-col place-content-center place-items-center">
           
           <nav className="flex place-content-start place-items-center w-2/3 h-20 border-b-2">
             <Link to="/" className="ml-20">
               <div className="text-3xl font-black  text-center text-indigo-600">
                 SHORTENITE
               </div>
             </Link>
           </nav>
 
           <div className="flex flex-col  w-1/3 m-16 rounded-lg shadow-lg">
             <span className="text-3xl font-semibold text-center">Sign Up</span>
 
             <div className="mx-12 mt-12">
                 <label className="text-lg font-normal" for="name">Username</label>
                 <Input className="mt-3" variant="outline" placeholder="" />
             </div>

             <div className="mx-12 mt-4">
                 <label className="text-lg font-normal" for="name">Email address</label>
                 <Input className="mt-3" variant="outline" placeholder="" />
             </div>
 
             <div className="mx-12 mt-4">
                 <label className="text-lg font-normal" for="title">Password</label>
                 <Input className="mt-3 " variant="outline" placeholder="" />
             </div>
 
             <Button className="mt-14 mx-12" colorScheme='blue'>Sign Up</Button>
 
             <div className="flex mt-4 mr-14 mb-12 text-base font-medium  justify-end">
               <span className='font-normal'>Already have an account?</span>
               <Link to="/log_in" className="ml-2">
                 <div className=" text-blue-700 underline">
                 Log In
                 </div>
               </Link>
             </div>
 
           </div>
 
       </div>
     )
}

export default SignUp