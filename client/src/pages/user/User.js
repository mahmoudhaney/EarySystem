import React from "react";
import "../user/user.css";
const User = () => {

    
    return (
    <div className="form-box">
        <h1 className="profile-head">Profile Information</h1>
    <div className="form-box-content">
    <form className="user-Form">
      <label className="label-user">
        Name:
        <input className="user-input" type="text" />
      </label>
      <label className="label-user">
        Email:
        <input className="user-input" type="email" />
      </label>
      <label className="label-user">
        Password:
        <input className="user-input" type="email" />
      </label>
      <label className="label-user">
        Phone:
        <input className="user-input" type="email" />
      </label>
      <button className="user-btn" type="submit">
        Update
      </button>
    </form>
    </div>
    </div>
  );
};

export default User;
