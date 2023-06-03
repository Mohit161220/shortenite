import React from "react";

import SideList from "./SideList";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-white h-full border-r-2 ">
    <div className="fixed h-full w-64 px-2">
        <div className="border-b-2 text-3xl font-black h-16 text-center pt-2 text-indigo-600 ">
          SHORTENITE
        </div>
        <SideList />
      </div>
    </div>
  );
};

export default Sidebar;
