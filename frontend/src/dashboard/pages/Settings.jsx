import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";

const Settings = () => {
  let isScreenMid = useMediaQuery("(min-width : 768px)");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [same, setSame] = useState(true);

  const updateUserName = async (e) => {
    e.preventDefault()
    console.log(username)
    try {
      const res = await axios.post("/users/update-username", {
        username: username,
      });
      console.log(res)
      if(res.data.success)
      window.location.reload(false);
      if(!res.data.success) setDisplay1(true)
    } catch (error) {
      setDisplay1(true)
    }
  };

  const changePassword = async (e) => {
    e.preventDefault()
    console.log(password)
    try {
      const res = await axios.post("/users/update-password", {
        OldPassword:oldPassword,
        newPassword:password,
        confirmPassword:confirmPassword
      });
      if(!res.data.success) setDisplay2(true)
      if(res.data.success)
      window.location.reload(false);
    } catch (error) {
      setDisplay2(true)
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get("/users/me");
      console.log(res);
      if (res.data.success) {
        setUsername(res.data.data.username);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (password === confirmPassword && password!=="" && confirmPassword!="") setSame(true);
    else setSame(false);
  }, [password, confirmPassword]);

  return (
    <div className=" border-2 rounded-lg lg:grid lg:grid-cols-6 mt-4 w-4/5 mx-auto lg:w-full">
      <div className="lg:col-span-2 lg:justify-self-center mb-2 ml-5">
        <div className="mt-6">
          {isScreenMid ? (
            <Avatar
              size="2xl"
              name={username}
              src="https://bit.ly/broken-link"
              className=" ml-8"
            />
          ) : (
            <Avatar
              size="xl"
              name={username}
              src="https://bit.ly/broken-link"
              className=" ml-8"
            />
          )}
        </div>
        <Button colorScheme="blue" variant="outline" className=" my-4">
          Change Profile Picture
        </Button>
      </div>
      <div className="lg:col-span-4 ml-4">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 ">
          Profile
        </div>
        <div className={display1 ? "mt-4 mr-2" : "hidden mt-4"}>
          <Alert status="error" className="rounded-lg">
            <AlertIcon />
            <AlertTitle>UserName Already exists</AlertTitle>
          </Alert>
        </div>
        <form onSubmit={updateUserName} className="mt-6 pr-4">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            variant="outline"
            placeholder={username}
          />
          <Button
            colorScheme="blue"
            variant="outline"
            className="mt-6"
            type="submit"
          >
            Update UserName
          </Button>
        </form>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8">
          Security
        </div>
        <div className={display1 ? "mt-4 mr-2" : "hidden mt-4"}>
          <Alert status="error" className="rounded-lg">
            <AlertIcon />
            <AlertTitle>Incorrect Password</AlertTitle>
          </Alert>
        </div>
        <form onSubmit={changePassword} className="mt-4 pr-4">
          <Input
            className="mb-6"
            type="password"
            variant="outline"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            className="mb-6"
            type="password"
            variant="outline"
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Input
            className="mb-6"
            type="password"
            variant="outline"
            placeholder="Old Password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          {same?(
            <Button
              type="submit"
              colorScheme="blue"
              variant="outline"
              className="mb-16"
            >
              Change Password
            </Button>):(<Button
              className="cursor-not-allowed mb-16"
              colorScheme="gray"
              variant="outline"
            >
              Change Password
            </Button>)
          }
        </form>
      </div>
    </div>
  );
};

export default Settings;
