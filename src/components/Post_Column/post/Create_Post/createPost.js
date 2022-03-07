import React, {useState} from "react";
import CreatePostModal from "./createPostModal";
import {user} from "../../../../globalData";

export default function CreatePost(props) {
  const [createPostModal, updatePostModalVisibility] = useState(false)
  const user = JSON.parse(localStorage.getItem('user_profile'))

  return (
    <div>
      <div className="py-3 px-4 bg-gray-400 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg text-white h-auto">
        <div className="flex items-center">
          <img
            src={`${process.env.HOST}${user.user_image}`}
            className="rounded-full bg-black"
            alt={"userprofile"}
            style={{ width: 45, height: 45 }}
          />
          <button
            className="bg-gray-400 rounded-full bg-opacity-20 w-full ml-4 h-12 px-4 text-left text-white text-lg"
            onClick ={() => {
              updatePostModalVisibility(true)
            }}
          >
            Start a Post...
          </button>
        </div>
      </div>
      { createPostModal ?
        <CreatePostModal
          showPostCreateModal={()=>{
            updatePostModalVisibility(!createPostModal)
          }}
          ChannelList={props.ChannelList}
          updatePosts={(newPost)=>{
            props.updatePosts(newPost)}}
        />
        : null
      }
    </div>
  );
}
