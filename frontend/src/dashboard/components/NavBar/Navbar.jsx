import React from "react";
import NavDropDown from "./NavDropDown";
import { Link } from "react-router-dom"; 
import { useMediaQuery } from "@uidotdev/usehooks";

const Navbar = () => {

  let isScreenMid = useMediaQuery("(max-width : 768px)");

  return ( 
    <div className="h-15 sm:h-20 border-2 border-t-0 rounded-lg grid grid-cols-12 content-center sticky top-0 bg-white">
      {isScreenMid &&
        <div className="col-span-4">
          <Link to="/">
              <div className="text-sm sm:text-xl font-black text-center mt-4 text-indigo-600 hover:text-indigo-400">
                SHORTENITE
              </div>
            </Link> 
        </div>
      }
      <div className="col-span-6 ">
        <form className="max-w-sm px-4 pt-3">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-4 sm:h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-8 sm:h-10 py-2 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
      </div>
      <NavDropDown />
    </div>
  );
};

export default Navbar;
