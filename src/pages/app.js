import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {StrictMode} from "react";

// import Login from "../components/authentication/login";
// import RequireAuth from "../components/authentication/RequireAuth";
// import Forum from "../components/forum";

export function App (){

  console.log("process.env : ", process.env.NODE_ENV)

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

ReactDOM.render(<App />, document.getElementById("root"));
