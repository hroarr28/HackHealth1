import DayButtons from "../Main-Page/Left-Side-Nav-Bar/Left-Side-Nav-Bar";
import "./App.css";
import MainPage from "../Main-Page/Main-Page";
import LoginPage from "../Login-Page/LoginPage";
import { useState } from "react";
import {Route, Routes, Link} from "react-router-dom";
function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  function getUserName(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setUser(name);
    console.log(name);
  }

  return (
    <main className="App">


      <Routes>
        <Route path="/" element={ <LoginPage getUserName={getUserName}
        handleClick={handleClick}
        user={user}/>}/>
        <Route path="/main" element={ <MainPage/>}/>  
      </Routes>

    </main>
  );
}

export default App;
