import React from "react";
import "./LoginFormStyles.css";

function LoginForm({ getUserName, handleClick, user }) {
  console.log(getUserName);
  return (
    <div className="Login-Form">
      <header>
        <img src="https://i.ibb.co/tsP0RjZ/Hack-9.png" alt="LogoImg" />
      </header>
      <form>
        <h3>Profile image</h3>
        <img
          src="https://i.ibb.co/LCrMT1R/Untitled-800-800px-300-300px.png"
          alt="AvatarImg"
          className="avatar-img"
        />
        <h3>Username</h3>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={getUserName}
        />
        <button onClick={handleClick}>LOGIN</button>
      </form>
    </div>
  );
}

export default LoginForm;