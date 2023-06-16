import * as React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Dashboard from "./dashboard/Dashboard.jsx";
import Home from "./home/Home.jsx";
import Links from "./dashboard/pages/Links.jsx";
import Qr from "./dashboard/pages/Qr.jsx";
import Settings from "./dashboard/pages/Settings.jsx";
import Details from "./dashboard/pages/Details.jsx";
import CreateNewLink from "./dashboard/components/CreateNewLink.jsx";
import CreateNewQr from "./dashboard/components/CreateNewQr.jsx";
import LogIn from "./home/LogIn.jsx";
import SignUp from "./home/SignUp.jsx";
import EditLink from "./dashboard/components/EditLink.jsx";
import Error from "./home/Error.jsx";
import EditQR from "./dashboard/components/EditQR.jsx"


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/log_in" element={<LogIn />} />
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route exact path="links" element={<Links />} />
          <Route
            exact
            path="links/create_new_link"
            element={<CreateNewLink />}
          />
          <Route exact path="links/edit/:id" element={<EditLink/>}/> 
          <Route exact path="links/:id" element={<Details />} />
          <Route exact path="qrs" element={<Qr />} />
          <Route exact path="qrs/create_new_qr" element={<CreateNewQr />} />
          <Route exact path="qrs/:id" element={<Details />} />
          <Route exact path="settings" element={<Settings />} />
          <Route path="" element={<Navigate to="links" replace />} />
          <Route exact path="qrs/edit/:id" element={<EditQR/>}/> 
        </Route>
        <Route exact path="/error" element={<Error />} />
      </Routes>
    </ChakraProvider>
  );
}
export default App;
