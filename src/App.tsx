import React from "react";
// import MainAppFooter from "./features/modules/views/MainAppFooter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./features/ForgotPassword";
import Home from "./features/Home";
import SignIn from "./features/SignIn";
import SignUp from "./features/SignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
