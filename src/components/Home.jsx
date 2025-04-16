import React from 'react'
import reviewCardData from './ReviewCardData'
import ShowMyReviewCards from './ShowMyReviewCards'

function Home() {
  return (
    <>
    {/* hero section */}
    <div className="hero-container h-screen  p-12 bg-[url(../public/restaurant.webp)] bg-cover bg-center">
      <div className="horo-content w-1/2 flex flex-col gap-8 text-center">
        <h1 className='text-6xl font-bold flex flex-col '>
        <span className='text-white'>Let us find your</span>
        <span className='text-[#e11d48]'>Forever Food.</span>
        </h1>

        <p className='text-lg text-white'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="buttons flex gap-4 font-semibold text-sm px-6">
          <button className='w-4xs py-2 px-8 bg-[#e11d48] text-white hover:bg-[#e11f32]  rounded-lg cursor-pointer'>
            Search Now
          </button>
          <button className='w-4xs py-2.5 px-8 bg-red-50 text-[#e11d48] hover:bg-red-100 rounded-lg cursor-pointer'>
            Know More
          </button>
        </div>
      </div>
      

    </div>

    {/* house section */}
    <div className="house-container h-screen  py-16 px-8 flex flex-row-reverse relative">
      <div className="right-content w-[55%] h-[100%] bg-sky-100 px-20 flex flex-col justify-center gap-8">
        <h1 className='text-4xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, ipsam.</h1>

        <p className='text-lg text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquam ex id temporibus quia non repudiandae esse soluta possimus mollitia!</p>

        <button className='bg-[#4f46e5] text-white text-sm font-semibold w-[150px] h-[2.5rem] rounded-md cursor-pointer'>
          Get in Touch
          </button>
      </div>

      <img src="/house.avif" alt=""
        className='absolute left-10 top-1/2 -translate-y-1/2 w-[45%] z-20'
      />

    </div>

    {/* review card section */}
    <ShowMyReviewCards arr={reviewCardData}/>
    

    </>
  )
}

export default Home