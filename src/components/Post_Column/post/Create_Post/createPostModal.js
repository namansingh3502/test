import React, {useState} from "react";

import axios from "axios";
import Multiselect from 'multiselect-react-dropdown';
import TextareaAutosize from 'react-textarea-autosize';

import { AiOutlineClose } from "react-icons/all";
import ImageUploader from "../imageUploader";
import UserDetails from "../../../Post_Column/userDetails";
import {multiSelectStyle} from "../../../../globalData";


export default function CreatePostModal (props){
  const channel_list = props.ChannelList
  const [images, setImages] = useState([])
  const [PostText, updatePostText] = useState("")
  const [selectedValue, updateSelectedValue] = useState([])

  function selectedList(selectedList, selectedItem) {
    updateSelectedValue(selectedList)
  }

  function addImage(e){
    if ( images.length + e.target.files.length > 6 ){
      alert("You can upload only 6 images.")
      return;
    }
    setImages(images.concat([...e.target.files]))
  }

  function removeImage(index){
    let updateImage = []

    for( let i = 0; i < images.length; i++ ){
      if( index !== i ){
        updateImage.push(images[i])
      }
    }
    setImages(updateImage)
  }

  function createPost() {
    const data = {
      body : PostText,
      channel_list : selectedValue,
      media_count : images.length
    }

    const formData = new FormData()
    formData.append("data", JSON.stringify(data))
    images.forEach( image => {formData.append(image.name, image)})


    axios.post(
      `${process.env.HOST}/forum/new-post`, formData,
      {
        headers: {
          Authorization: localStorage.getItem("Token"),
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        }
      })
    .then((response) => {
      if (response.status === 200) {
        updatePostText("")
        updateSelectedValue([])
        props.updatePosts(response.data)
        props.showPostCreateModal()
      } else {
        console.log(response.status, response.data.msg)
      }
    })
    .catch((error) => {
      console.log("check error at new post \n",error)
    })
  }

  return(
    <div className="z-10 fixed inset-0 bg-black bg-opacity-40 h-full w-full overflow-auto ">
      <div
        className="h-auto w-1/3 relative top-20 mx-auto border-0 shadow-lg rounded-lg "
        style={{ backgroundColor: "#011627"}}
      >
        <div className="bg-gray-400 rounded-lg border-0 bg-opacity-20 backdrop-filter h-full w-full text-amber-50">
          <div className="text-2xl border-b pl-6 pr-4 py-4 flex justify-between items-center">
            <span className="font-medium text-center w-full">Create Post</span>
            <button
              onClick={()=>{
                updatePostText("")
                updateSelectedValue([])
                props.showPostCreateModal()
              }}
            >
              <AiOutlineClose/>
            </button>
          </div>

          <UserDetails/>

          <form onSubmit={(e) => {
              e.preventDefault();
              createPost()
            }}>
            <div className={"px-4"}>
              <Multiselect
                placeholder={"Select Channels...."}
                selectedValues={selectedValue}
                options={channel_list}
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
                value={PostText}
                minRows={5}
                maxRows={10}
                onChange={(e)=> {
                    updatePostText(e.target.value)
                }}
              />
            </div>

            <div className={"mx-1"}>
              <ImageUploader
                images={images}
                addImage={(e)=>addImage(e)}
                removeImage={(index)=>removeImage(index)}
              />
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