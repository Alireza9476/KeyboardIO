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
import { ACCOUNT_SETTINGS_URL } from "./config/URLs.js";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/standard" element={<Standard />} />
            <Route path="/register" element={<Register />} />

            <Route element={<RequireAuth />}>
              <Route path="/advanced" element={<Advanced />} />
              <Route path="/profile-settings" element={<AccountSettings />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/custom-settings" element={<CustomSettings />} />
              <Route path="/expriment" element={<Experiment />} />
              <Route path=":id" element={<Profile />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/copyright" element={<Copyright />} />
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
