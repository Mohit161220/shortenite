import React, { useState } from "react";
import {
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import useAuth from "../hooks/useAuth";

const LogIn = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/sign-in", { email, password });
      console.log(response);
      if (response.data.success) {
        setAuth(true);
        navigate("/dashboard");
      }
      setDisplay(true);
    } catch (err) {
      console.log(err);
      setDisplay(true);
      setAuth(false);
    }
  };

  return (
    <div className="flex flex-col place-content-center place-items-center">
      <nav
        className="flex place-content-center place-items-center w-full h-16 border-b-2
                      sm:place-content-start sm:h-20 sm:w-2/3"
      >
        <Link to="/" className="mx-auto sm:ml-20 ">
          <div className="text-2xl sm:text-3xl font-black  text-center text-indigo-600">
            SHORTENITE
          </div>
        </Link>
      </nav>
      <div className={display ? "mt-1" : "hidden"}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error Signing In</AlertTitle>
          <AlertDescription>Incorrect Email or Password</AlertDescription>
        </Alert>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col m-16 sm:w-2/3 sm:m-16  md:w-2/5  rounded-lg shadow-lg"
      >
        <span className="text-2xl sm:text-3xl m-4  font-semibold text-center">
          Log In
        </span>

        <div className="mx-10 sm:mx-12 mt-8  sm:mt-12">
          <label className="text-md sm:text-lg font-normal" htmlFor="name">
            Email Address
          </label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder=""
          />
        </div>

        <div className="mx-10 sm:mx-12 mt-8  sm:mt-12">
          <label className="text-md sm:text-lg font-normal" htmlFor="title">
            Password
          </label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 "
            variant="outline"
            placeholder=""
          />
        </div>

        <Link to="/forgot_password" className="mx-auto sm:mx-14 mt-4">
          <div className="text-xs sm:text-sm font-medium text-end text-blue-700 underline">
            Forgot your password?
          </div>
        </Link>

        <Button
          type="submit"
          className="mx-auto mt-8 text-md sm:text-lg sm:mx-12 sm:mt-12"
          colorScheme="blue"
        >
          Log In
        </Button>

        <div className="flex mx-auto sm:mx-14 mt-4 mb-4 sm:mb-8 font-medium  justify-center sm:justify-end">
          <span className="text-xs sm:text-sm font-normal">
            Didn't have a account?
          </span>
          <Link to="/sign_up" className="ml-2 text-xs sm:text-sm">
            <div className=" text-blue-700 underline">Sign up</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
