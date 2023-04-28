import { useEffect } from "react";
import "./LoginFormStyles.css";
// import { Link, useNavigate } from "react-router-dom";

function LoginForm({ getUserName, handleClick, user }) {
  const isLoggedIn = user !== "" ? true : false;

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="Login-Form-Container">
    <div className="Login">
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
      

        <div className="input-form">
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={getUserName}
          onKeyDown={handleKeyDown}
        />
          {isLoggedIn ? (
            <button disabled>Logging In...</button>
          ) : (
            <button onClick={handleClick}>LOGIN</button>
          )}
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
