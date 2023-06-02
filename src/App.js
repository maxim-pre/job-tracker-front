import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import authAxios from "./lib/authAxios";
import apiRoute from "./lib/apiRoute";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
import Account from "./components/account";
import Logout from "./components/logout";
function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [nav, setNav] = useState(false);
  const [jobs, setJobs] = useState([]);

  const fetchCurrentUser = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}current_user`);
      setCurrentUser(response.data);
    } catch (error) {
      console.log(error);
      setCurrentUser("");
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}jobs`);
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
    fetchJobs();
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
        <div className={`${nav ? "hidden" : "flex-1 p-4 bg-offwhite"}`}>
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route
              path={"/account"}
              element={
                <Account
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path={"/jobtracker"}
              element={<JobTracker jobs={jobs} setJobs={setJobs} />}
            />
            <Route path={"/contacts"} element={<Contacts />} />
            <Route path={"/logout"} element={<Logout />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
