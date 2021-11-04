import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import User from "./components/User";
import "./css/style.scss";

function App() {
  const [user, setUser] = useState(null);

  //it create a id it creates a reference for element
  //virtuall dom copy this, virtuall dom give us the input value information
  //ref={useRef} ===>put this inside input tag
  //her türlü element icin kullanilabilir
  //tekrar tekrar render etmiyor her harf girdigimizde
  //
  const inputRef = useRef(); //reference //tag

  useEffect(() => {
    fetchedUserProfile("ademten7");
  }, []);

  const fetchedUserProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const result = await response.json();
    setUser(result);
  };

  const searchNewUser = (e) => {
    e.preventDefault();
    //current==target
    console.log(inputRef.current.value);
    //to prevent the error 404
    if (inputRef.current.value.trim() !== "") {
      fetchedUserProfile(inputRef.current.value);
    }
    inputRef.current.value = "";
  };
  console.log("render");
  return (
    <div className="App">
      <Header />
      <form onSubmit={searchNewUser}>
        <input
          type="text"
          name="username"
          placeholder="Enter your GitHub user name"
          ref={inputRef}
        />
        <input type="submit" value="search"></input>
      </form>
      {user && <User userdata={user} />}
    </div>
  );
}

export default App;
