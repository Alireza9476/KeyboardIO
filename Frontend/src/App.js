import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";

import About from "./pages/About.js";
import Footer from "./components/Footer.js";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Copyright from "./pages/Copyright";
import AccountSettings from "./pages/AccountSettings";

import Standard from "./pages/Standard";
import Advanced from "./pages/Advanced";
import CustomSettings from "./pages/CustomSettings";
import Experiment from "./pages/Experiment.js";

import { AuthProvider } from "./context/AuthProvider.js";
import RequireAuth from "./components/RequireAuth";
import {
  ABOUT_URL,
  ACCOUNT_SETTINGS_URL,
  ADVANCED_URL,
  COPYRIGHT_URL,
  CUSTOM_SETTINGS_URL,
  EXPRIMENT_URL,
  FORGOT_PASSWORD_URL,
  HOMEPAGE_URL,
  LOGIN_URL,
  REGISTER_URL,
  STANDARD_URL,
} from "./config/URLs.js";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path={HOMEPAGE_URL} element={<Home />} />
            <Route path={LOGIN_URL} element={<Login />} />
            <Route path={STANDARD_URL} element={<Standard />} />
            <Route path={REGISTER_URL} element={<Register />} />
            <Route path={FORGOT_PASSWORD_URL} element={<ForgotPassword />} />

            <Route element={<RequireAuth />}>
              <Route path={ADVANCED_URL} element={<Advanced />} />
              <Route
                path={ACCOUNT_SETTINGS_URL}
                element={<AccountSettings />}
              />
              <Route path={CUSTOM_SETTINGS_URL} element={<CustomSettings />} />
              <Route path={EXPRIMENT_URL} element={<Experiment />} />
              <Route path=":id" element={<Profile />} />
            </Route>

            <Route path={ABOUT_URL} element={<About />} />
            <Route path={COPYRIGHT_URL} element={<Copyright />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
          {/* <Footer /> */}
        </AuthProvider>
      </Router>
    </>
  );
}

const Error = () => {
  return <div>Error404</div>;
};

export default App;
