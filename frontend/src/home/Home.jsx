import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Home = () => {
  const { auth, setAuth } = useAuth();
  const getAuth = async () => {
    try {
      const res =await  axios.get("/users/auth");
      if (res.data.success) setAuth(true);
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {
    getAuth();
  });
  return auth ? (
    <Navigate to="/dashboard/links" replace />
  ) : (
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
    </div>
  );
};

export default Home;
