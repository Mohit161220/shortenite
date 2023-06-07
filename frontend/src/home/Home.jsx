import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mx-10">
        <nav className="flex justify-items-center items-center  h-16 border-b-2">
          
          <Link to="/" className="ml-20">
            <div className="text-3xl font-black  text-center text-indigo-600">
              SHORTENITE
            </div>
          </Link>
          
          <div className='flex flex-grow ml-24'>
            <Link to="/">
              <div className=" text-xl font-medium  text-center hover:font-bold">
                Home
              </div>
            </Link>

            <Link to="/dashboard" className="ml-12">
              <div className=" text-xl font-medium text-center hover:font-bold">
                Dashboard
              </div>
            </Link>
          </div>

          <Link to="log_in" className="mr-6">
            <div className=" text-xl font-medium text-center hover:font-bold">
              Log In
            </div>
          </Link>

          <Link to="/sign_up" className="mr-10">
          <div className=" text-xl font-medium text-center hover:font-bold">
                Sign up
                </div>
          </Link>

        </nav>
      </div>

      
    </div>
  )
}

export default Home