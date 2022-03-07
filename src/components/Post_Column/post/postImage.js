import React from "react";

export default function PostImage(props) {
  const images = props.images
  const imageCount = props.images.length

  if(images.length === 0){ return (<div> </div>)}

  if(props.images.length === 1){
    return (
      <div className={"w-full h-52 bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-lg "}>
        <a href={`${process.env.HOST}${props.images[0].file}`} target="_blank">
          <img
            src={`${process.env.HOST}${props.images[0].file}`}
            className={"object-contain h-52 w-full "}
            alt={"image"}
          />
        </a>
      </div>
    )
  }

  return (

    <div className={"grid grid-cols-2 py-2"}>
      {images.map((item, index) => {
        if(index === imageCount - 1 && imageCount % 2 === 1 ){
          return (
            <div className={"p-0.5 col-span-2 border-amber-100 border-2"} key={index}>
              <a href={`${process.env.HOST}${item.file}`} target="_blank">
                <img
                  src={`${process.env.HOST}${item.file}`}
                  className={"object-fill h-44 w-full px-0.5 py-2"}
                  alt={"image"}
                />
              </a>
            </div>
          )
        }
        return(
          <div className={"p-0.5 border-amber-100 border-2"} key={index}>
            <a href={`${process.env.HOST}${item.file}`} target="_blank">
              <img
                src={`${process.env.HOST}${item.file}`}
                className={"object-fill h-44 w-full px-0.5 py-2"}
                alt={"image"}
              />
            </a>
          </div>
        )
      })}
    </div>

    // <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
    //   <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     />
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     />
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     />
    //   </div>
    //   <div className="carousel-inner relative w-full overflow-hidden">
    //     <div className="carousel-item active relative float-left w-full">
    //       <img
    //         src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
    //         className="block w-full"
    //         alt="..."
    //       />
    //       <div className="carousel-caption hidden md:block absolute text-center">
    //         <h5 className="text-xl">First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item relative float-left w-full">
    //       <img
    //         src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
    //         className="block w-full"
    //         alt="..."
    //       />
    //       <div className="carousel-caption hidden md:block absolute text-center">
    //         <h5 className="text-xl">Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item relative float-left w-full">
    //       <img
    //         src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
    //         className="block w-full"
    //         alt="..."
    //       />
    //       <div className="carousel-caption hidden md:block absolute text-center">
    //         <h5 className="text-xl">Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"> </span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //     type="button"
    //     data-bs-target="#carouselExampleCaptions"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"> </span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}
