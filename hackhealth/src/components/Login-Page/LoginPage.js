import React from "react";
import "./LoginPageStyles.css";
import LeftImage from "./Image/Image";
import LoginForm from "./Login-Form/Login-Form";

function LoginPage({ getUserName, user, handleClick }) {
  return (
    <div className="login-page">
      <LoginForm
        getUserName={getUserName}
        handleClick={handleClick}
        user={user}
      />

      <LeftImage />
    </div>
  );
}

export default LoginPage;
