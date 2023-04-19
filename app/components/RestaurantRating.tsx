import React from 'react'

const RestaurantRating = () => {
  return (
    <>
     {/* RATINGS */}
     <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className='text-reg ml-3'>4.9</p>
            </div>
            <div className="">
                <p className="text-reg ml-4">600 Reviews</p>
            </div>
        </div>
        {/* RATINGS */}
    </>
  )
}

export default RestaurantRating
