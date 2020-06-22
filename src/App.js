import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><strong>Hello, World!</strong></p>
        <p>
          I'm a React.js app, living in a Docker Container on an AWS EC2/EB
          instance,
          <br></br>
          which was brought to you by triggering a merge to Master that notified
          <br></br>
          Travis CI to perform tests and if those tests all pass, then deploy this app to Production.
        </p>
        <a
          className="App-link"
          href="https://github.com/adamdubey/docker-spa-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Repo
        </a>
        <br />
        <p>

        </p>
      </header>
    </div>
  );
}

export default App;
