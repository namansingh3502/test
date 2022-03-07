import React, {useEffect, useState} from "react";
import background from "../../images/bg.jpeg";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function PageProfile() {
  let {id} = useParams();
  const [pageProfile, updatePageProfile]=useState({})
  const [profileLoadStatus, updateProfileLoadStatus]=useState(false)

  function loadPageProfile(){
    axios.get(
      `${process.env.HOST}/forum/channel/${id}/profile`,
      {
        headers: {
          Authorization: localStorage.getItem("Token")
        }
      }
    )
    .then((response) => {
      if (response.status === 200) {
        updatePageProfile(response.data)
        updateProfileLoadStatus(true)
      } else {
        this.setState({
          LoadStatus: "NotLoaded",
        });
      }
    })
    .catch((error) => {
      console.log("check login error", error);
    });
  }

  useEffect(()=>{
    loadPageProfile()
  },[id, profileLoadStatus])

  if( !profileLoadStatus ) {
    return <div>Loading...</div>
  }
  return (
    <div className={"bg-gray-400 rounded-2xl bg-opacity-10 backdrop-filter backdrop-blur-lg text-white h-auto"}>
      <div className="w-full rounded-lg h-40">
        <img
          src={background}
          className="w-full h-full rounded-t-lg"
          alt={"user"}
        />
      </div>
      <div className="p-4">
        <div className="relative w-full font-sans ">
          <h1 className={"text-3xl font-extrabold text-amber-50"}>{pageProfile.name}</h1>
          <h1 className={"mt-2 text-amber-50"}>Admin: {pageProfile.admin.username} </h1>
          <h1 className={"mt-1 text-amber-50"}>Total members: {pageProfile.member_count} </h1>
        </div>
      </div>
    </div>
  )


}