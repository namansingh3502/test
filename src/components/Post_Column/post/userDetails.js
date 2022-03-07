import React from "react";

export default function UserDetails(props) {

  return (
    <div className="flex">
      <img
        src={`${process.env.HOST}${props.user.user_image}`}
        className="rounded-full"
        style={{ height: 45, width: 45 }}
        alt={"user"}
      />
      <div className="ml-4 mt-1 text-xl">
        <h1 className="text-md" id={props.user.id}>
          {props.user.username}
        </h1>
      </div>
    </div>
  );
}
