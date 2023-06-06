import React from 'react'
import { Input, Button,  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
const LogIn = () => {
    return(
       <div className="flex flex-col place-content-center place-items-center">
          
          <nav className="flex place-content-start place-items-center w-2/3 h-20 border-b-2">
            <Link to="/" className="ml-20">
              <div className="text-3xl font-black  text-center text-indigo-600">
                SHORTENITE
              </div>
            </Link>
          </nav>

          <div className="flex flex-col  w-1/3 m-20 rounded-lg shadow-lg">
            <span className="text-3xl font-semibold text-center">Log In</span>

            <div className="mx-12 mt-16">
                <label className="text-lg font-normal" for="name">Email address or username</label>
                <Input className="mt-3" variant="outline" placeholder="" />
            </div>

            <div className="mx-12 mt-4">
                <label className="text-lg font-normal" for="title">Password</label>
                <Input className="mt-3 " variant="outline" placeholder="" />
            </div>

            <Link to="/forgot_password" className="mx-14 mt-2">
              <div className="text-sm font-medium text-end text-blue-700 underline">
              Forgot your password?
              </div>
            </Link>

            <Button className="mt-10 mx-12" colorScheme='blue'>Log In</Button>

            <div className="flex mt-4 mr-14 mb-12 text-base font-medium  justify-end">
              <span className='font-normal'>Didn't have a account?</span>
              <Link to="/sign_up" className="ml-2">
                <div className=" text-blue-700 underline">
                Sign up
                </div>
              </Link>
            </div>

          </div>

      </div>
      

    )
}

export default LogIn