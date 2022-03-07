import React from "react";
import background from "../../images/background.jpeg"
import {user} from "../../globalData";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user_profile'))

  return (
    <div className="bg-gray-400 h-auto rounded-xg bg-opacity-10 backdrop-filter backdrop-blur-lg text-lg pb-4">
      <div className="h-36 w-full rounded-t-xl">
        <div
          className="h-full w-full bg-contain bg-no-repeat rounded-t-xl flex justify-center items-center"
          style={{backgroundImage: `url(${background})`}}
        >
          <img
            className="rounded-full h-28 w-28 border-2 border-amber-100 p-0.5 "
            src={`${process.env.HOST}${user.user_image}`}
            alt={"profile"}
          />
        </div>
      </div>
      <div className="text-center text-amber-50">
        <h1 className={"font-extrabold text-xl"}>{user.first_name} {user.middle_name} {user.last_name}</h1>
        <h1 className={"text-sm"}>{user.username}</h1>
        <h1 className={"text-sm"}>{user.department}</h1>
      </div>
    </div>
  );
};

export default UserProfile;
