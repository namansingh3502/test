import React from "react";

export default function UserDetails(){
  const user = JSON.parse(localStorage.getItem('user_profile'))
  return(
    <div className={"mt-4"}>
      <div className="flex px-4 items-center">
        <img
          src={`${process.env.HOST}${user.user_image}`}
          className="rounded-full"
          style={{ height: 60, width: 60 }}
          alt={"user"}
        />
        <div className="ml-4 text-bold">
          <h1 className="text-xl font-bold" id={user.user_id}>
            {user.username}
          </h1>
        </div>
      </div>
    </div>
  )
}