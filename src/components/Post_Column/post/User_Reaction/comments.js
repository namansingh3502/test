import React from 'react'

export default function Comments(props) {

  return(
    <div className="flex py-1" key={props.data.id}>
      <img
        src={`${process.env.HOST}${props.data.user.user_image}`}
        className="rounded-full"
        style={{ height: 35, width: 35 }}
        alt={"user"}
      />
      <div className="ml-2 px-2 py-1 rounded-xl bg-gray-300 bg-opacity-20 backdrop-filter">
        <h1 className="text-sm font-bold" >
          {props.data.user.username}
        </h1>
        <p className={"text-sm"}>
          {props.data.body}
        </p>
      </div>
    </div>
  )
}