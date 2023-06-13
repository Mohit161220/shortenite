import React from "react";
import { Avatar, Button, Input } from "@chakra-ui/react";
import { useMediaQuery } from "@uidotdev/usehooks";
const Settings = () => {
  
  let isScreenMid = useMediaQuery("(min-width : 768px)");
  return (
    <div className=" border-2 rounded-lg lg:grid lg:grid-cols-6 mt-4 w-4/5 mx-auto lg:w-full">
      <div className="lg:col-span-2 lg:justify-self-center mb-2 ml-5">
        <div className="mt-6">
          {isScreenMid?
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/broken-link"
              className=" ml-8"
            />:
            <Avatar
              size="xl"
              name="Segun Adebayo"
              src="https://bit.ly/broken-link"
              className=" ml-8"
            />

          }
        </div>
        <Button colorScheme="blue" variant="outline" className=" my-4">
          Change Profile Picture
        </Button>
      </div>
      <div className="lg:col-span-4 ml-4">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 ">Profile</div>
        <div className="mt-10 pr-4">
          <Input variant="outline" placeholder="Name" />
          <Button colorScheme="blue" variant="outline" className="mt-6">
          Update UserName
        </Button>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8">Security</div>
        <div className="mt-8 pr-4">
          <Input className="mb-6" type='password' variant="outline" placeholder="New Password" />
          <Input className="mb-6" type='password' variant="outline" placeholder="Confirm New Password" />
          <Input className="mb-6" type='password' variant="outline" placeholder="Old Password" />
          <Button colorScheme="blue" variant="outline" className="mb-16">
          Change Password
        </Button>
        </div>
      </div>
    </div>
    
  );
};

export default Settings;
