import React from "react";

import SideList from "./SideList";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-white h-screen border-r-2">
      <div className="border-b-2 text-4xl font-black h-16 text-center pt-2 text-indigo-600" >
        SHORTENITE
      </div>
    <SideList/>
    </div>
  );
};

export default Sidebar;
