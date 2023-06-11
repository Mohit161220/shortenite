import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/sign-in", { email, password });
      console.log(response);
      setAuth(true);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setAuth(false);
    }
  };

  return (
    <div className="flex flex-col place-content-center place-items-center">
      <nav className="flex place-content-start place-items-center w-2/3 h-20 border-b-2">
        <Link to="/" className="ml-20">
          <div className="text-3xl font-black  text-center text-indigo-600">
            SHORTENITE
          </div>
        </Link>
      </nav>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col  w-1/3 m-20 rounded-lg shadow-lg"
      >
        <span className="text-3xl font-semibold text-center">Log In</span>

        <div className="mx-12 mt-16">
          <label className="text-lg font-normal" htmlFor="name">
            Email address
          </label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder=""
          />
        </div>

        <div className="mx-12 mt-4">
          <label className="text-lg font-normal" htmlFor="title">
            Password
          </label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 "
            variant="outline"
            placeholder=""
          />
        </div>

        <Link to="/forgot_password" className="mx-14 mt-2">
          <div className="text-sm font-medium text-end text-blue-700 underline">
            Forgot your password?
          </div>
        </Link>

        <Button type="submit" className="mt-10 mx-12" colorScheme="blue">
          Log In
        </Button>

        <div className="flex mt-4 mr-14 mb-12 text-base font-medium  justify-end">
          <span className="font-normal">Didn't have a account?</span>
          <Link to="/sign_up" className="ml-2">
            <div className=" text-blue-700 underline">Sign up</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;