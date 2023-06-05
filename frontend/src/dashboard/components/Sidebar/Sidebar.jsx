import React from "react";

import SideList from "./SideList";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-white h-full border-r-2 ">
      <div className="fixed h-full w-64 px-2">
        <Link to="/">
        <div className="border-b-2 text-3xl font-black h-20 text-center text-indigo-600 hover:text-indigo-400 pt-6">
          SHORTENITE
        </div>
        </Link>
        <SideList />
      </div>
    </div>
  );
};

export default Sidebar;
