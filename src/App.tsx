import React, { Suspense } from "react";
// import MainAppFooter from "./features/modules/views/MainAppFooter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./features/About";
import ForgotPassword from "./features/ForgotPassword";
import MainAppBar from "./features/modules/views/MainAppBar";
import MainAppFooter from "./features/modules/views/MainAppFooter";
import SignIn from "./features/SignIn";
import SignUp from "./features/SignUp";
import withRoot from "./features/withRoot";
const HomePage = React.lazy(() => import("./features/Home"));

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />{" "}
              </Suspense>
            }
          />
        </Routes>
      </Router>
      <MainAppFooter />
    </div>
  );
}

export default withRoot(App);
