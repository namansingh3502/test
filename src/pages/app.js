import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {StrictMode} from "react";

// import Login from "../components/authentication/login";
// import RequireAuth from "../components/authentication/RequireAuth";
// import Forum from "../components/forum";

export default function App (){

  return (
    <div className={"text-white"}>Forum</div>
  )
}

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
