import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormRow } from "../components";
import { getFromLocal, setLocalStorage } from "../utils/helpers";
const apiUrl = process.env.REACT_APP_API_URL;

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Account = () => {
  const user = getFromLocal("user");
  const [isLoading, setIsLoading] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const toggleMember = () => {
    setValues((prev) => ({
      ...prev,
      isMember: !prev.isMember,
    }));
  };
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const setupUser = async ({ currentUser, endPoint }) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { data } = response;
      const { user, token } = data;
      console.log(apiUrl, data);
      console.log("USER", user, "TOKEN", token);
      if (user && token) {
        setLocalStorage("user", user);
        setLocalStorage("token", token);
      }
    } catch (error) {
      console.log("setupUser ERROR", error);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      console.log("Not a member");
      return;
    }
    const currentUser = { name, email, password };
    console.log("currentUser", currentUser);
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "signin",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "signup",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <div className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        <p>{alertText}</p>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Account;
