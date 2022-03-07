import React from "react";

import UserProfile from "./userProfile";
import ChannelList from "./channelList";
import Others from "./others";

export default function MenuColumn (props){
  return (
    <div className="w-1/6">
      <UserProfile />
      <ChannelList
        ChannelList={props.ChannelList}
      />
      <Others />
    </div>
  )
}
