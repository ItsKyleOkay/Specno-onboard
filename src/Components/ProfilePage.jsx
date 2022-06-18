import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import RegisterCourse from "../StudentMainPage/RegisterCourse";
import classes from "./ProfilePage.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { displayName, email } = user;

  return (
    <div>
      <span className={classes.header}>
        <NavLink to="/profile" className="home-button">
          <a href="/profile" className="logolink">
            <img
              className="rocket"
              src="https://uploads-ssl.webflow.com/5f479f688ac92ece1c89402b/5f7493fd8458dfb8308ed725_specno-logo.svg"
              alt=""
              loading="lazy"
            />{" "}
            <h1>Specno</h1>
          </a>{" "}
        </NavLink>
        <nav>
          <ul>
            <li>
              <a href="/profile">Home</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/de-register">De-register</a>
            </li>
            <li>
              <a href="/marks">Marks</a>
            </li>
          </ul>
        </nav>
      </span>
      <div className={classes.welcome}>
        <h1>Welcome!</h1>
        <h2>
          Designing And Building World Class Digital Products Specno Partners
          With You To Validate, Design And Develop Industry Leading Solutions
        </h2>
      </div>
      <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
        <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
          <div className="border border-blue-300"></div>
          <div className="md:pl-4">
            <h2 className="text-2xl font-semibold">{displayName}</h2>
            <h3 className="italic">{email}</h3>
          </div>
        </div>
        <button
          className="w-full py-3 bg-red-600 mt-4 text-white"
          onClick={() => {
            auth.signOut();
            navigate("/login");
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
