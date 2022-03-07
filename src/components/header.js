import React from "react";
import "../styles.css";
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";

export default function Header (props) {
  let navigate = useNavigate();

  function logout(){
    axios.post(
      `${process.env.HOST}/auth/token/logout/`, {},
      {
        headers: {
          Authorization: localStorage.getItem("Token"),
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        }
      }
    )
    .then((response) => {
      if ((response.status === 204)) {
        localStorage.clear()
        props.updateLoggedIn()
        navigate(`/login`)
      } else {
        console.log(response.status, response.data.msg)
      }
    })
    .catch((error) => {
      console.log("check error at login page. \n",error)
    })
  }

  return (
    <div className="h-12 sticky top-0 z-10 bg-opacity-60 backdrop-blur-md bg-gray-800 border-b" >
      <div className={"mx-auto w-3/5 text-2xl py-2 px-8"}>
        <div className={"relative float-left text-amber-50 font-semibold"}>
          <NavLink to={``} >
            <h1 className="font-bold text-center text-3xl text-yellow-500">
              College<span className="text-blue-500 ml-2">Forum</span>
            </h1>
          </NavLink>
        </div>
        <div className={"relative float-right"}>
          <button
            className={"text-white text-2xl"}
            onClick={ ()=>{logout()}}
          >
          Logout
        </button>
      </div>
    </div>
  </div>
  )
};