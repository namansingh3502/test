import React, {useEffect, useState} from "react";
import {AiOutlineClose} from "react-icons/all";

export default function ImageUploader(props){

  return(
    <div className="flex my-2">
      <div className="w-full bg-transparent">
        <div className={"mx-2"}>
          <h1 className="inline-block mb-2 text-gray-400 text-xl font-medium ml-2">Add Images</h1>
          <div className="flex flex-wrap text-black">

            {props.images.map((image, index) => {
              return(
                <div className={"h-36 w-1/3 mb-1 px-1 relative"} key={index}>
                  <img className={"h-full w-full"} src={URL.createObjectURL(image)} alt={"image"} />
                  <div
                    className={"text-xl absolute top-1 right-2 bg-red-400 rounded-full text text hover:bg-red-600"}
                    onClick={()=>{props.removeImage(index)}}
                  >
                    <AiOutlineClose/>
                  </div>
                </div>
              )
            })}

            {props.images.length < 6 ?
              <div
                className={"h-36 w-1/3 mb-1 border-2 border-gray-500 hover:border-gray-200 hover:text-gray-200 border-dashed"}
              >
                <label className={"px-1 h-full w-full text-gray-500"}>
                  <div className="flex flex-col items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="w-8 h-8 "
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                    <p className="pt-1 text-sm tracking-wider">Attach a file</p>
                  </div>

                  <input
                    className="opacity-0 w-2 h-2"
                    type={"file"}
                    multiple={true}
                    accept="image/*"
                    onChange={props.addImage}
                  />
                </label>
              </div>
            :
             null
            }
          </div>
        </div>
      </div>
    </div>
  )
}