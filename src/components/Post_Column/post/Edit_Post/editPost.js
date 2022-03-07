import {AiOutlineClose} from "react-icons/all";
import Multiselect from "multiselect-react-dropdown";
import TextareaAutosize from "react-textarea-autosize";
import React, {useState} from "react";
import axios from "axios";
import ImageUploader from "../imageUploader";
import UserDetails from "../../../Post_Column/userDetails";
import {multiSelectStyle, config} from "../../../../globalData";

export default function EditPost(props){
  const [postText, updatePostText] = useState(props.data.post.body)
  const [selectedValue, updateSelectedValues] = useState(props.data.post.posted_in)

  function selectedList(selectedList, selectedItem) {
    updateSelectedValues(selectedList)
  }

  function editPost(){
    const data = {
        post_id: props.data.post.id,
        body : postText,
        channel_list : selectedValue,
        media_count:0
      }

    axios.post(
      `${process.env.HOST}/forum/edit-post`, data,
      {
        headers: {
          Authorization: localStorage.getItem("Token"),
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        }
      })
    .then((response)=>{
      if(response.status === 200 ){
        props.updatePost(response.data)
      } else {
        console.log(response.status, response.data.msg)
      }
    })
    .catch((error) => {
      console.log("check error at edit post \n",error)
    })
  }

  return(
    <div className="z-10 fixed inset-0 bg-black bg-opacity-40 h-full w-full overflow-auto ">
      <div
        className="h-auto w-1/3 relative top-20 mx-auto border-0 shadow-lg rounded-lg "
        style={{ backgroundColor: "#011627"}}
      >
        <div className="bg-gray-400 rounded-lg border-0 bg-opacity-20 backdrop-filter h-full w-full text-amber-50">
          <div className="border-b pl-6 pr-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-medium text-center w-full">Edit Post</div>
            <button
              className={"text-2xl"}
              onClick={()=>{
                updatePostText(props.data.post.body)
                updateSelectedValues(props.data.post.posted_in)
                props.showEditPostModal()
              }}
            >
              <AiOutlineClose/>
            </button>
          </div>

          <UserDetails/>

          <form onSubmit={(e) => {
            e.preventDefault();
            editPost();
          }}>
            <div className={"p-4"}>
                <Multiselect
                  placeholder={"Select Channels...."}
                  selectedValues={selectedValue}
                  options={props.ChannelList}
                  onSelect={selectedList}
                  onRemove={selectedList}
                  displayValue="name"
                  showCheckbox={true}
                  style={multiSelectStyle}
                  avoidHighlightFirstOption={true}
                />
                <TextareaAutosize
                  className="resize-none w-full p-2 bg-transparent focus:outline-0 text-white text-lg"
                  placeholder="What do you want to talk about?"
                  value={postText}
                  minRows={5}
                  maxRows={10}
                  onChange={(e)=> {
                    updatePostText(e.target.value)
                  }}
                />
            </div>

            <div className={"mx-1"}>
              <ImageUploader/>
            </div>

            <div className={"m-2 pb-2"}>
              <button
                type={"submit"}
                className="w-full bg-blue-400 mx-auto text-xl font-semibold rounded-md p-2">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
