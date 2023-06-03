import React from "react";
import {Routes,Route} from "react-router-dom"

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
import Link from "./pages/Link";
import Qr from "./pages/Qr"
import Settings from "./pages/Settings";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-2 min-h-screen" >
      <Sidebar />
      <div className="col-span-10 mr-2 ">
        <Navbar />
        <Routes>
          <Route exact path="/links" element={<Link/>}/>
          <Route exact path="/qrs" element={<Qr/>}/>
          <Route exact path="/settings" element={<Settings/>}/>
          <Route path="*" element={<Link/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
