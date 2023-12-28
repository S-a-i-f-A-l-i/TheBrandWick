import React, { useState, useEffect } from "react";
import { getFromLocal, removeLocalStorage } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    setUser(() => getFromLocal("user") || {});
  }, [user]);
  const logOut = () => {
    removeLocalStorage("user");
    removeLocalStorage("token");
    setTimeout(() => {
      navigate("/account");
    }, 500);
  };
  return (
    <div>
      <h1>Welcome {user?.name} in our App</h1>
      <h3>Your email i'd is {user?.email}</h3>
      <p>
        Our App is Under development
        <br />
        We respect your patient
      </p>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Home;
