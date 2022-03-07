import React, {Component} from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import {BsArrowRightCircleFill} from "react-icons/all";
import axios from "axios";
import Comments from "./comments";

export default class CommentModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      CommentText: "",
      Comments: [],
      CommentsLoadStatus: false,
      CommentPostStatus: false,
    }
  }

  loadComments(){
    const post_id =this.props.post_id

    axios.get(
      `${process.env.HOST}/forum/${post_id}/comments`,
      {
        headers: {
          Authorization: localStorage.getItem("Token")
        }
    })
    .then((response) => {
      if ((response.status === 200)) {
        this.setState({
          Comments: response.data,
          CommentsLoadStatus: true
        })
      } else {
        console.log(response.status, response.data.msg)
      }
    })
    .catch((error) => {
      console.log("check error at new comment \n",error)
    })
  }

  submitComment(){
    const data = {
      body : this.state.CommentText,
      post : this.props.post_id
    }

    axios.post(
      `${process.env.HOST}/forum/new-comment`, data,
      {
        headers: {
          Authorization: localStorage.getItem("Token"),
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        }
      })
    .then((response) => {
      if ((response.status === 200)) {
        this.setState({
          CommentText:"",
          Comments:this.state.Comments.concat(response.data)
        })
      } else {
        console.log(response.status, response.data.msg)
      }
    })
    .catch((error) => {
      console.log("check error at new comment \n",error)
    })
  }

  componentDidMount() {
    this.loadComments()
  }

  render() {
    if( !this.state.CommentsLoadStatus){
      return( <div> </div>)
    }

    const user = JSON.parse(localStorage.getItem('user_profile'))
    const comments = this.state.Comments

    return(
      <div className={"text-white border-t mt-1 ml-1 border-gray-600 pt-2"}>
        <div className={"flex"}>
          <img
            src={`${process.env.HOST}${user.user_image}`}
            className="rounded-full"
            style={{ height: 35, width: 35 }}
            alt={"user-image"}
          />
          <form
            className={"w-full mr-2 flex"}
            onSubmit={(e)=>{
              e.preventDefault()
              this.submitComment()
            }}
          >
            <TextareaAutosize
              minRows={1}
              maxRows={5}
              value={this.state.CommentText}
              placeholder={"Write a comment..."}
              className={"ml-2 py-1 pl-3 text-md w-11/12 outline-0 bg-transparent text-white resize-none rounded-xl bg-gray-300 bg-opacity-20 backdrop-filter"}
              onChange={(e)=>{
                this.setState({ CommentText: e.target.value })
              }}
            />
            <button>
              <BsArrowRightCircleFill className={"ml-1 h-8 text-lg fill-gray-500 w-full"}/>
            </button>
          </form>
        </div>
        <div className={"mt-2"}>
          {comments.map((item)=>{return(
            <Comments
              data={item}
              key={item.id}
            />
          )})}
        </div>
      </div>
    )
  }
}