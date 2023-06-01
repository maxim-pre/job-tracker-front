import "./App.css";
import authAxios from "./lib/authAxios";
import apiRoute from "./lib/apiRoute";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/nav/nav";
import MobileNavBar from "./components/nav/mobileNavBar";
import MobileNavMenu from "./components/nav/mobileNavMenu";
import LandingPage from "./components/templates/LandingPage";
import LoginForm from "./components/forms/loginForm";
import SignupForm from "./components/forms/signupForm";
import Dashboard from "./components/dashboard";
import JobTracker from "./components/jobTracker";
import Contacts from "./components/contacts";
function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [nav, setNav] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}current_user`);
      setCurrentUser(response.data);
    } catch (error) {
      console.log(error);
      setCurrentUser("");
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!currentUser) {
    return (
      <div className="App">
        <Routes>
          <Route
            path={"/"}
            element={<LandingPage childComponent={LoginForm} />}
          />
          <Route
            path={"/signup"}
            element={<LandingPage childComponent={SignupForm} />}
          />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col min-h-screen md:flex-row App">
        <MobileNavBar nav={nav} setNav={setNav} />
        {nav && <MobileNavMenu setNav={setNav} currentUser={currentUser} />}
        {/* side Nav */}
        <Nav currentUser={currentUser} />
        {/* content */}
        <div className={`${nav ? "hidden" : ""}`}>
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/jobtracker"} element={<JobTracker />} />
            <Route path={"/contacts"} element={<Contacts />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
