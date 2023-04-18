import React from "react";
import "./style/Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { getAuthUser, removeAuthUser } from "../helper/Storage";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuthUser();
  const Logout = () => {
    removeAuthUser();
    navigate("/register")
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <h3>Eeary</h3>
            <img src={logo} alt="LOGO" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            {/* Admin Routes */}
            {auth && auth.role==1 && (
              <>
                <li>
                  <Link to={"/admin"}>Manage user</Link>
                </li>
              </>
            )}


            {/* If user is not logged in then show login and register link */}
            {!auth && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {/* If user is logged in then show logout link */}
            {auth && (
              <>
              <li><Link onClick={Logout}>Logout</Link></li>
              <li><Link to="/user">Update Profile</Link></li>
                </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
