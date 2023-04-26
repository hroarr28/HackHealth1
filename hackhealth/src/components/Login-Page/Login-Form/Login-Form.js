import { useEffect } from "react";
import "./LoginFormStyles.css";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ getUserName, handleClick, user }) {
  const isLoggedIn = user !== "" ? true : false;

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

        <div>
          {isLoggedIn ? (
            <button disabled>Logging In...</button>
          ) : (
            <button onClick={handleClick}>LOGIN</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
