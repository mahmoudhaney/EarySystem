import React from 'react';
import {Link} from "react-router-dom";
import '../login/login.css'

const Login = () => {



    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Welcome to our Free Online Hearing Test</h3>
                    <span className="loginDesc">
                        Do you have hearing loss? Take our online hearing test to find out.
                    </span>
                </div>
                <form >
                <div className="loginRight">
                    <div className="loginBox">
                        <input  placeholder="Email" className="loginInput"  />
                        <input  placeholder="Password" className="loginInput"  />
                        <button  className="loginButton" type="submit">Log In</button>
                        <Link className="loginRegisterButton" to="/register">Create a New Account</Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;