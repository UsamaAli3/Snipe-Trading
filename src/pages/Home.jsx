import React from "react";
import ReactPlayer from "react-player";

function Home() {
  return (
    <>
      <div className="flex w-full h-dvh bg-black text-white py-8 ">
        <div className="flex flex-col w-1/2 bg-black items-end ">
          <h1 className="bebas-neue text-6xl leading-[55px] font-bold text  w-[70%] mb-6">
            Elevating Traders to their Maximum Potential
          </h1>
          <p className="w-[70%] text-lg mb-6">
            Experience unique, awesome trading
          </p>
          <div className=" w-[70%]">
            <button className=" bg-[#D3e97a] text-black w-[50%] text-lg rounded-md h-[47px] hover:bg-[#c6d685]">
              JOIN THE TEAM
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex pb-48">
            <ReactPlayer
              width="400px"
              playing="true"
              muted="true"
              url="https://vimeo.com/1018731138"
              controls="true"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
