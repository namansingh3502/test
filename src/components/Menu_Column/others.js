import React from "react";

const Others = () => {
  const Channels = [
    "Code of Conduct",
    "Privacy Policy",
    "Terms of use",
  ];

  return (
    <div className="bg-gray-400 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg text-lg mt-2 p-4 text-white font-medium text-center text-xl ">
      <h1 className="border-b-2 border-gray-500 pb-2">Extra</h1>
      {Channels.map((item) => (
        <h1 className="my-1 " key={item}>
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Others;
