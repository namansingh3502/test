import React, {useEffect, useRef, useState} from "react"
import PageProfile from "../pageProfile";
import CreatePost from "./Create_Post/createPost";
import Posts from "../posts";
import PostModal from "./postModal";
import axios from "axios";
import {useParams} from "react-router-dom";
import CreatePostModal from "./Create_Post/createPostModal";
import {config} from "../../../globalData";

export default function ChannelPost (props){
  let {id} = useParams();
  const [post, updateChannelPosts] = useState([])
  const prevIdRef = useRef()

  function loadPost(){
    axios.get(
      `${process.env.HOST}/forum/channel/${id}/posts`,
      {
        headers: {
          Authorization: localStorage.getItem("Token")
        }
    })
    .then((response) => {
      if (response.status === 200) {
        updateChannelPosts(response.data)
      } else {
        console.log('error at channel post')
      }})
    .catch((error) => {
      console.log("check login error", error);
    });
  }

  function updatePosts(newPost){
    let data = post
    data.unshift(newPost)
    updateChannelPosts([...data])
  }

  useEffect( ()=>{
    if( prevIdRef.current !== id) loadPost()
    prevIdRef.current = id
  },[id,post])


  return(
    <div>
      <PageProfile/>
      <div className={"mt-4"}>
        <CreatePost
          ChannelList={props.ChannelList}
          updatePosts={(newPost)=>{
            updatePosts(newPost)
          }}
        />

      {post.map((item) => {
        return (
          <div key={item.post.id}>
            <PostModal
              data={item}
            />
          </div>
        );
      })}</div>
    </div>
  )
}