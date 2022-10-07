import "./App.css";
import React from "react";
import CoreElement from "./Three/Core";
import AuthWeb3 from "./Web3/AuthWeb3";
import { useState } from "react";


function App() {
  const [Auth, SetAuth] = useState('init');

  function UpdateMsg() {
    if (Auth === "disconnected") return <h1>Goodbye!</h1>;
    if (Auth === "connected") return <h1>Welcome!</h1>;
    if (Auth === "noeth") return <h1>Metamask Is Not Installed</h1>;
    else return <h1>Click Anywhere To Login</h1>;
  }

  const IsAuth = (AuthData) => {
    SetAuth(AuthData);
  };

  return (//temporary

    <div className="App">
      <div className="App-Msg">
      {UpdateMsg()}
      </div>
      <div className="App-Overlay">
      <AuthWeb3 IsAuth={IsAuth} />
      </div>
      <CoreElement IsAuth={Auth} />
    </div>

  );
}

export default App;
