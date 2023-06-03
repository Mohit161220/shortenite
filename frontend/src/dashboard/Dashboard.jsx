import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
import Link from "./pages/Link";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-2 " >
      <Sidebar />
      <div className="col-span-10 mr-2 ">
        <Navbar />
        <Link/>
      </div>
    </div>
  );
};

export default Dashboard;
