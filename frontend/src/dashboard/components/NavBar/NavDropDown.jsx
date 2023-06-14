import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const NavDropDown = () => {
  let isScreenMid = useMediaQuery("(min-width : 768px)");
  const [userName,setUserName]=useState("");
  const {setAuth}=useAuth()
  const signOut=async()=>{
    try {
      const res=await axios.get('/users/sign-out')
      if(res.data.success){
        setAuth(false)
      }
    } catch (error) {
      
    }
  }
  const getUser=async()=>{
    try {
      const res=await axios.get('/users/me')
      console.log(res)
      if(res.data.success){
        setUserName(res.data.data.username)
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className="col-span-2 md:col-span-6 justify-self-end px-2 cursor-pointer">
      <Menu>
        <MenuButton className="hover:bg-gray-100 hover:rounded p-1">
          <div className="flex items-center space-x-4-end mr-4 ">
            <Avatar
              size="md"
              name={userName}
              src="https://bit.ly/broken-link"
            />
           {isScreenMid && <div className="text-sm sm:text-xl pl-3">{userName}</div> }
          </div>
        </MenuButton>
        <MenuList>
            {!isScreenMid &&
              <MenuItem>
                <span>{userName}</span>
              </MenuItem>
            }
          <MenuItem onClick={signOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 text-red-600 z-40"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavDropDown;
