import React, { useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const [username, updateUsername] = useState("")
  const [password, updatePassword] = useState("")
  const [errorMsg, updateErrorMsg] = useState('')

  function login(){
    const data = {
      username: username,
      password: password
    }
    axios.post(`${process.env.HOST}/auth/token/login/`, data, {})
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('Token','Token ' + response.data.auth_token)
        navigate(from, { replace: true })
      }
    })
    .catch((error) => {
      updateErrorMsg('Username or Password incorrect.')
      console.log("Error while login. \n",error)
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('Token')
    if(token){
      navigate(`/`)
    }
  },[errorMsg])

  return(
    <div className="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
      <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
        <h1 className="font-bold text-center text-4xl text-yellow-500">
          Campus<span className="text-blue-500 ml-2">Forum</span>
        </h1>
          <form onSubmit={(e) => {
              e.preventDefault();
              login()
            }}
          >
            <div className="flex flex-col bg-white p-10 rounded-lg shadow ">
              <div className={"text-center"}>
                <span className="font-bold text-xl">Sign in to your account</span>
              </div>
              <div className="flex flex-col space-y-4 mt-6">
                <input
                  type="text"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Username"
                  value={username}
                  onChange={(e => {updateUsername(e.target.value)})}
                  autoFocus
                />
                <input
                  type="password"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Password"
                  value={password}
                  onChange={(e => {updatePassword(e.target.value)})}
                />
              </div>
              <div className={"my-3 px-1 text-sm text-red-700"}>
                {errorMsg}
              </div>
              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center w-full">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold text-center py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">
                  Log In
                </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}