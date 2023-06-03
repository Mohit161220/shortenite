import React from "react";
import SideList from "./SideList";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-gray-400 h-screen">
      <div className="h-28 bg-slate-500"><h1>Title</h1></div>
    <SideList/>
    </div>
  );
};

export default Sidebar;
