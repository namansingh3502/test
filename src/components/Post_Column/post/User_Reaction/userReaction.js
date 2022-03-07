import React, {Component, useEffect, useState} from "react";
import LikeDetails from "./likeDetails";
import axios from "axios";
import CommentModal from "./commentModal";

export default function UserReaction (props){
  const user = JSON.parse(localStorage.getItem('user_profile'))
  const [postLiked, updatePostLiked] = useState(false)
  const [userLiked, updateUserLiked] = useState(props.likes)
  const [commentModalVisibility, showCommentModal] = useState(false)


  function getDerivedStateFromProps(props,state) {
    if (props.likes !== state.UserLiked) {
      return { UserLiked: props.likes }
    }
    return null;
  }

  function handleLike() {
    const user = JSON.parse(localStorage.getItem('user_profile'))

    axios
      .post(
        `${process.env.HOST}/forum/${props.post_id}/like-post`,{},
        {
          headers: {
            Authorization: localStorage.getItem("Token"),
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
          }
        }
      )
      .then((response) => {
        if (response.status === 200) {
          let data = userLiked

          postLiked ?
            data.pop()
            :
            data.push({
              username : user.username,
              user_id : user.user_id
            })

            updatePostLiked(!postLiked)
            updateUserLiked(data)
         }
      })
      .catch((error) => {
        console.log("check post like update.", error);
      });
  }

  useEffect(()=>{
    const data = props.likes;
    for (let i = 0; i < data.length; i++) {
      if (user.id === data[i].user_id) {
        updatePostLiked(true)
        break
      }
    }
    },[])

    return (
      <div>
        <LikeDetails
          Liked={postLiked}
          UserLiked={userLiked}
        />
        <div className="grid grid-cols-2 gap-x-3 justify-items-center border-t border-gray-600 pt-1">
          <button
            className="hover:bg-gray-400 rounded-full hover:bg-opacity-20 h-8 w-full"
            onClick={handleLike}
          >
            {postLiked ? "Liked" : "Like"}
          </button>
          <button
            className="hover:bg-gray-400 rounded-full hover:bg-opacity-20 h-8 w-full"
            onClick={()=>{showCommentModal(true)}}
          >
            Comment
          </button>
        </div>
        {commentModalVisibility ?
          <CommentModal
            post_id={props.post_id}
          />
          :
          null
        }
      </div>
    );
}
