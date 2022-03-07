import React from "react";
import {Link} from "react-router-dom";

export default function ChannelList(props) {
  const Channel = props.ChannelList;

  if (Channel === []) {
    return (
      <div
        className="p-4 bg-gray-400 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg text-lg mt-2"
        style={{ height: 400 }}
      />
    );
  } else {
    return (
      <div className="p-4 mt-2 bg-gray-400 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg text-lg text-white font-medium">
        <h1 className="text-center text-xl border-b-2 border-gray-500 pb-2">Channels</h1>
        <div className="overflow-auto max-h-96">
          <ul>
            {Channel.map((item) => (
              <li className="pl-4 my-1" key={item.id}>
                <Link
                  to={`/Channel-Post/${item.id}`}
                  key={item.id}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            </ul>
          </div>
      </div>
    )
  };
}