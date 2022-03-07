import React from "react";

export default function ChannelTags(props) {

  return (
    <div className="m-2 flex flex-wrap">
      {props.channels.map((channel) => {
        return (
          <p
            className="bg-gray-400 bg-opacity-40 text-sm rounded-full px-2 m-1 text-black"
            key={channel.id}
          >
            {channel.name}
          </p>
        );
      })}
    </div>
  );
}
