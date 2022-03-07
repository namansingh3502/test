import React, { Component } from "react";

import MenuColumn from "../components/Menu_Column/menuColumn";
import PostColumn from "../components/Post_Column/postColumn";
import ActivityColumn from "../components/activityColumn";
import axios from "axios";

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoadChannelStatus: false,
      ChannelList: []
    };
  }

  loadChannelList() {
    axios.get(
      `${process.env.HOST}/forum/channel-list`,
      {
        headers: {
          Authorization: localStorage.getItem("Token")
        }
    })
    .then((response) => {
      if( response.status === 200) {
        this.setState({
          ChannelList: response.data,
          LoadChannelStatus: true
        })
      } else {
        console.log("some error happened while getting channel list")
      }
    })
    .catch((error) => {
      console.log("check login error", error);
    });
  }

  componentDidMount() {
    this.loadChannelList();
  }

  render() {
    return (
      <div className="min-h-screen">
        <div className="flex w-4/5 mx-auto mt-4 justify-center ">
          <MenuColumn
            ChannelList={this.state.ChannelList}
          />
          <PostColumn
            ChannelList={this.state.ChannelList}
          />
          <ActivityColumn />
        </div>
      </div>
    );
  }
}