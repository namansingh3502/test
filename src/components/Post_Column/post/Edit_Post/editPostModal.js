import EditPost from "./editPost";
import React from "react";


export default function (props){

  return(
    <div>
      {props.modalVisibility ?
        <EditPost
          ChannelList={props.ChannelList}
          data={props.data}
          showEditPostModal={()=>{props.showEditPostModal()}}
          updatePost={(post)=>{props.updatePost(post)}}
        /> : null
      }
    </div>
  )
}