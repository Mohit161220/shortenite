import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import SideList from "./SideList";
import { Link } from "react-router-dom"; 

const Sidebar = () => {

  let isScreenMid = useMediaQuery("(min-width : 768px)");

  return (
    <div className="col-span-1 lg:col-span-2 flex flex-col  place-items-center h-full w-full border-r-2">
        {isScreenMid &&
          <Link to="/" className="w-full fixed">
          <div className="border-b-2 md:max-lg:text-xl text-3xl font-black  h-20 text-center text-indigo-600 hover:text-indigo-400  pt-6">
            SHORTENITE
          </div>
          </Link> 
        }
        <SideList />
    </div>
    
  );
};

export default Sidebar;
