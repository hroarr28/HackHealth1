import DayButtons from "../Main-Page/Left-Side-Nav-Bar/Left-Side-Nav-Bar";
import "./App.css";
import MainPage from "../Main-Page/Main-Page";
import LoginPage from "../Login-Page/LoginPage";
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  function getUserName(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    // event.preventDefault();

    setUser(name);
    console.log(name);
  }

  useEffect(() => {
    if (user !== "") {
      navigate("/main");
    }
  }, [user, navigate]);

  return (
    <main className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              getUserName={getUserName}
              handleClick={handleClick}
              user={user}
              navigate={navigate}
            />
          }
        />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </main>
  );
}

export default App;
