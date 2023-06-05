import React from "react";
import { Avatar, Button, Input } from "@chakra-ui/react";

const Settings = () => {
  return (
    <div className=" border-2 rounded-lg grid grid-cols-6 mt-4">
      <div className="col-span-2 justify-self-center mb-2">
        <div className="mt-6">
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/broken-link"
            className=" ml-8 hover:"
          />
        </div>
        <Button colorScheme="blue" variant="outline" className=" my-4">
          Change Profile Picture
        </Button>
      </div>
      <div className="col-span-4">
        <div className="text-4xl mt-6">Profile</div>
        <div className="mt-10 pr-4">
          <Input variant="outline" placeholder="Name" />
          <Button colorScheme="blue" variant="outline" className="mt-6">
          Update UserName
        </Button>
        </div>
        <div className="text-4xl mt-8">Security</div>
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
