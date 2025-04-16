import React from 'react'

function ShowMyReviewCards({arr}) {
  return (
    <>
    <div className="review-card-container min-h-screen px-6 py-12 columns-3 gap-8">
        {
            arr.map((obj)=>{
                return <div className="card flex flex-col gap-3 mb-8 break-inside-avoid">
                <div className="text text-gray-700 bg-sky-50 p-4 rounded-lg shadow-xl ">
                    <p>
                    {obj.text}
                    </p>
                </div>

                <div className="reviewer flex gap-4">
                    <div className="reviewer-image-div w-[4rem] h-[4rem] rounded-[50%]">
                        <img src={obj.image} alt="" className='w-[4rem] h-[4rem] rounded-[50%] object-cover' />
                    </div>
                    <div className="reviewer-detail-div">
                        <h4 className='text-lg font-semibold'>{obj.designation[0]}</h4>
                        <p>{obj.designation[1]}</p>
                    </div>
                </div>
            </div>
            })
        }
    </div>
    </>
  )
}

export default ShowMyReviewCards