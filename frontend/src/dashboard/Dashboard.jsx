import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/NavBar/Navbar";

const Dashboard = () => {
  const { auth } = useAuth();
  return auth ? (
    <div className="grid grid-cols-12 gap-2 min-h-screen">
      <Sidebar />
      <div className="col-span-10 mr-2 ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dashboard;
