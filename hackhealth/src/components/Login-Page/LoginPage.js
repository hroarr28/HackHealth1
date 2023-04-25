import React from "react";
import "./LoginPageStyles.css";
import LeftImage from "./Image/Image";
import LoginForm from "./Login-Form/Login-Form";
function LoginPage({ getUserName }) {
  return (
    <div className="login-page">
      <LoginForm getUserName={getUserName} />
      <LeftImage />
    </div>
  );
}

export default LoginPage;
