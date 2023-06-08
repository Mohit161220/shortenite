import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios"

const Home = () => {
  const ChangeUrl=async ()=>{
    const res= await axios.get('/$2b$10$hQoW10fhk4X2MYq1q3fJBuz3DQ7pTsOxVxQP1UIbqMxdWQPZM7vC.');

  }
  return (
    <div>
      <div className="mx-10">
        <nav className="flex justify-items-center items-center  h-16 border-b-2">
          <Link to="/" className="ml-20">
            <div className="text-3xl font-black  text-center text-indigo-600">
              SHORTENITE
            </div>
          </Link>

          <div className="flex flex-grow ml-24">
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
      <div >
        <button onClick={ChangeUrl} className="border-4 bg-blue-300 p-8">Press Me</button>
      </div>
      <div><img src="" alt="" /></div>
    </div>
  );
};

export default Home;
