import "./register.css";
import {Link} from "react-router-dom";

export default function Register() {



  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Welcome to our Free Online Hearing Test</h3>
          <span className="registerDesc">
          Do you have hearing loss? Take our online hearing test to find out.
          </span>
        </div>
        <form  >
        <div className="registerRight">
          <div className="registerBox">
            <input  placeholder="Username" className="registerInput" />
            <input  placeholder="Email" className="registerInput" />
            <input  placeholder="Password" className="registerInput" />
            <input  placeholder="Phone" className="registerInput" />
            <button className="registerButton" type="submit">Sign Up</button>
            <Link to='/login' className="RegisterButton">
                Log in
              </Link>
          
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
