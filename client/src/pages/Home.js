import React, { useState, useEffect } from "react";
import { getFromLocal, removeLocalStorage } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({ user: {}, token: "" });
  const navigate = useNavigate();

  useEffect(() => {
    setUser({
      user: getFromLocal("user") || {},
      token: getFromLocal("token") || "",
    });
  }, []);
  const logOut = () => {
    removeLocalStorage("user");
    removeLocalStorage("token");
    navigate("/account");
  };
  return (
    <div>
      <h1>Welcome, {user?.user?.name}, to Our App</h1>
      <div>&nbsp;</div>
      <h3>Your email ID is {user?.user?.email}</h3>
      <div>&nbsp;</div>
      <p>
        Thank you for joining us during the development phase of our app. We
        truly appreciate your patience.
      </p>
      <p>
        Here's a little secret: No need to worry about logging in again while
        you do logout. We securely store a token in your browser, and your
        unique token is:👇👇
      </p>
      <p className="token">{user?.token}</p>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Home;
