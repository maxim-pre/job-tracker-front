import "./App.css";
import authAxios from "./lib/authAxios";
import apiRoute from "./lib/apiRoute";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/nav/nav";
import MobileNavBar from "./components/nav/mobileNavBar";
import LandingPage from "./components/templates/LandingPage";
import LoginForm from "./components/forms/loginForm";
import SignupForm from "./components/forms/signupForm";
import Dashboard from "./components/dashboard";
import JobTracker from "./components/jobTracker";
import Contacts from "./components/contacts";
function App() {
  const [currentUser, setCurrentUser] = useState("");

  const fetchCurrentUser = async () => {
    try {
      const response = await authAxios.get(`${apiRoute}current_user`);
      console.log(response);
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
      <div className="relative min-h-screen md:flex App">
        {/* side Nav */}
        <MobileNavBar />
        <Nav />
        {/* content */}
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/jobtracker"} element={<JobTracker />} />
          <Route path={"/contacts"} element={<Contacts />} />
        </Routes>
      </div>
    );
  }
}

export default App;
