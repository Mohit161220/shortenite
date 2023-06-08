import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Dashboard from "./dashboard/Dashboard.jsx";
import Home from "./home/Home.jsx";
import Links from "./dashboard/pages/Links.jsx";
import Qr from "./dashboard/pages/Qr.jsx";
import Settings from "./dashboard/pages/Settings.jsx";
import LinkInBio from "./dashboard/pages/LinkInBio.jsx";
import Details from "./dashboard/pages/Details.jsx";
import CreateNewLink from "./dashboard/components/CreateNewLink.jsx";
import CreateNewQr from "./dashboard/components/CreateNewQr.jsx";
import LogIn from "./dashboard/pages/LogIn.jsx";
import SignUp from "./dashboard/pages/SignUp.jsx"
import ForgotPassword from "./dashboard/pages/ForgotPassword.jsx"
import Loading from "./home/Loading.jsx";

function App() {
    return (
    <ChakraProvider>
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/log_in" element={<LogIn />} />
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route exact path="/forgot_password" element={<ForgotPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route exact path="links" element={<Links />} />
          <Route path="links/create_new_link" element={<CreateNewLink />} />
          <Route path="links/:id" element={<Details />} />
          <Route exact path="qrs" element={<Qr />} />
          <Route path="qrs/create_new_qr" element={<CreateNewQr />} />
          <Route path="qrs/:id" element={<Details />} />
          <Route exact path="settings" element={<Settings />} />
          <Route exact path="link_in_bio" element={<LinkInBio />} />
        </Route>
        <Route exact path="/:shortUrl" element={<Loading />} />
      </Routes>
    </ChakraProvider>
  );
}
export default App;
