import logo from "./logo.svg";
import "./App.css";
import authAxios from "./lib/authAxios";
import apiRoute from "./lib/apiRoute";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  const [currentUser, setCurrentUser] = useState("");

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
          <Route path={"/"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
        </Routes>
      </div>
    );
  } else {
    return <div>Logged in!</div>;
  }
}

export default App;
