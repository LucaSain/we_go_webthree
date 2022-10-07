import React from "react";
import './AuthWeb3.css'
export default function AuthWeb3({ IsAuth }) {
  async function Auth() {
    console.log("init");
    let Provider = window.ethereum;

    if (typeof Provider !== "undefined") {
      Provider.request({ method: "eth_requestAccounts" }).then((accounts) => {
        //Send data to App component
        IsAuth("connected");
        window.ethereum.on("accountsChanged", function (accounts) {
          if (accounts.length === 0) IsAuth("disconnected");
        });
      });
    } else {
      IsAuth("noeth");
    }
  }
  return (
    <div className="AuthWeb3-Base" onClick={() => Auth()}>
      
    </div>
  );
}
