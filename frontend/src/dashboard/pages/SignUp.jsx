import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    try {
      const res = await axios.post("/users/sign-up", {
        email,
        username,
        password,
      });
      console.log(res.data.message);
      if (res.data.sucess) navigate("/log_in");
    } catch (error) {
      console.log(error)
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
        className="flex flex-col  w-1/3 m-16 rounded-lg shadow-lg"
      >
        <span className="text-3xl font-semibold text-center">Sign Up</span>

        <div className="mx-12 mt-12">
          <label className="text-lg font-normal" htmlFor="name">
            Username
          </label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder=""
          />
        </div>

        <div className="mx-12 mt-4">
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

        <Button type="submit" className="mt-14 mx-12" colorScheme="blue">
          Sign Up
        </Button>

        <div className="flex mt-4 mr-14 mb-12 text-base font-medium  justify-end">
          <span className="font-normal">Already have an account?</span>
          <Link to="/log_in" className="ml-2">
            <div className=" text-blue-700 underline">Log In</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
