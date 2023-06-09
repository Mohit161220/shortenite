import React, { useState } from "react";
import {
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [display,setDisplay]=useState(false)
  const navigate = useNavigate();

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    try {
      const res = await axios.post("users/sign-up", {
        email: email,
        username: username,
        password: password,
      });
      console.log(res);
      if (res.data.success) navigate("/log_in");
      else setDisplay(true)
    } catch (error) {
      console.log(error);
      setDisplay(true)
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
      <div className={display?"mt-1":"hidden"}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error Signing Up</AlertTitle>
          <AlertDescription>
            Email Already Exists
          </AlertDescription>
        </Alert>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col m-12 sm:w-2/3 sm:m-12  md:w-2/5  rounded-lg shadow-lg"
      >
        <span className="text-2xl sm:text-3xl m-4  font-semibold text-center">
          Sign Up
        </span>

        <div className="mx-10 sm:mx-12 mt-6  sm:mt-8">
          <label className="text-md sm:text-lg font-normal" htmlFor="name">
            Username
          </label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder=""
          />
        </div>

        <div className="mx-10 sm:mx-12 mt-6  sm:mt-8">
          <label className="text-md sm:text-lg font-normal" htmlFor="name">
            Email address
          </label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            variant="outline"
            placeholder=""
          />
        </div>

        <div className="mx-10 sm:mx-12 mt-6  sm:mt-8">
          <label className="text-md sm:text-lg font-normal" htmlFor="title">
            Password
          </label>
          <InputGroup size='md'>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3"
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'className="mt-3">
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>

        <Button
          type="submit"
          className="mx-auto mt-6 text-md sm:text-lg sm:mx-12 sm:mt-8"
          colorScheme="blue"
        >
          Sign Up
        </Button>

        <div className="flex mt-4 mr-14 mb-12 text-base font-medium justify-center sm:justify-end">
          <span className="text-xs sm:text-sm font-normal">
            Already have an account?
          </span>
          <Link to="/log_in" className="ml-2 text-xs sm:text-sm">
            <div className=" text-blue-700 underline">Log In</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
