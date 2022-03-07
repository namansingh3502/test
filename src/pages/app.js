import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {StrictMode} from "react";

import Login from "../components/authentication/login";
import RequireAuth from "../components/authentication/RequireAuth";
import Forum from "../components/forum";

export default function App (){

  // console.log("process.env : ", process.env.HOST)

  return (

    <div>
      Forum 
    </div>

    // <Routes>
    //   <Route path="login/" element={<Login />} />
    //   <Route
    //     path="/*"
    //     element={
    //       <RequireAuth>
    //         <Forum />
    //       </RequireAuth>
    //     }
    //   />
    // </Routes>
  )
}

ReactDOM.render(
  {/*<StrictMode>
    <BrowserRouter>*/}
      <App />
  {/*  </BrowserRouter>
  </StrictMode>*/}
  ,
  document.getElementById("root")
);
