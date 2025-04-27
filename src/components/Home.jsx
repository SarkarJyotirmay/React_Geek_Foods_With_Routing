import React from "react";
import reviewCardData from "./ReviewCardData";
import ShowMyReviewCards from "./ShowMyReviewCards";

function Home() {
  return (
    <>
      {/* hero section */}
      <div className="hero-container min-h-screen  p-12 bg-[url(../public/restaurant.webp)] bg-cover bg-center">
        <div className="horo-content w-1/2 flex flex-col gap-8 text-center">
          <h1 className="text-6xl font-bold flex flex-col ">
            <span className="text-white">Let us find your</span>
            <span className="text-[#e11d48]">Forever Food.</span>
          </h1>

          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="buttons flex gap-4 font-semibold text-sm px-6">
            <button className="w-4xs py-2 px-8 bg-[#e11d48] text-white hover:bg-[#e11f32]  rounded-lg cursor-pointer">
              Search Now
            </button>
            <button className="w-4xs py-2.5 px-8 bg-red-50 text-[#e11d48] hover:bg-red-100 rounded-lg cursor-pointer">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* house section */}
      <div className="flex flex-col md:flex-row min-h-screen items-center justify-center p-4 md:p-8 bg-white">
        {/* Left Image Section */}
        <div className="w-full md:w-[45%] relative flex justify-center items-center md:translate-x-8">
          <img
            src="/house.avif"
            alt="House"
            className="w-full  h-auto object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 bg-gray-300 flex flex-col justify-center items-start pl-12 pr-4 py-16 gap-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h1>

          <p className="text-gray-600 text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md">
            Get in Touch
          </button>
        </div>
      </div>

      {/* review card section */}
      <ShowMyReviewCards arr={reviewCardData} />
    </>
  );
}

export default Home;
