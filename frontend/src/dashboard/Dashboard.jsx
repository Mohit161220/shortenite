import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/NavBar/Navbar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-2 min-h-screen">
      <Sidebar />
      <div className="col-span-10 mr-2 ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
