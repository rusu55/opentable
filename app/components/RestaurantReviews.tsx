import React from 'react'

const RestaurantReviews = () => {
  return (
    <>
     {/* REVIEWS */}
     <div className="">
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
            </h1>
            {/* REVIEW CARD */}
            <div>
                <div className="border-b pb-7 mb-7">
                        <div className="flex">
                            <div className="w-1/6 flex flex-col items-center">
                                <div className=" rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                                    <h2 className="text-white text-2xl">BR</h2>
                                </div>
                                <p className="">Rusu Bogdan</p>
                            </div>  
                             <div className="ml-10 w-5/6">
                                <div className="flex items-center">
                                    <div className="flex mr-5">
                                        *****
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p className="text-lg font-light">Came in for soup and salad. The perfect light meal on a cold day. Delicious with a nice bottle of wine. Appreciate the excellent service.</p>
                                </div>
                            </div>                             
                        </div>
                </div>
            </div>
            {/* REVIEW CARD */}
        </div>
        {/* REVIEWS */}
    </>
  )
}

export default RestaurantReviews
