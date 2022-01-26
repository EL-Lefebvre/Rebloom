import React from "react";
// import MainAppFooter from "./features/modules/views/MainAppFooter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./features/ForgotPassword";
import Home from "./features/Home";
import MainAppBar from "./features/modules/views/MainAppBar";
import MainAppFooter from "./features/modules/views/MainAppFooter";
import SignIn from "./features/SignIn";
import SignUp from "./features/SignUp";
import withRoot from "./features/withRoot";
function App() {
  return (
    <div className="App">
      <MainAppBar />
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <MainAppFooter />
    </div>
  );
}

export default withRoot(App);
