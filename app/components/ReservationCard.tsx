import React from 'react'

const ReservationCard = () => {
  return (
   <>
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
            <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>
            <div className="flex flex-col my-3">
                <label htmlFor="">Part Size</label>
                <select name="" id="" className='py-3 border-b font-light'>
                    <option value="">1 person</option>
                    <option value="">2 person</option>
                </select>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="">Date</label>
                    <input type="text" className='py-3 border-b font-light w-28'/>
                </div>
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="">Time</label>
                    <select name="" id="" className="py-3 border-b font-light">
                        <option value="">7:30 PM</option>
                        <option value="">8:30 PM</option>
                    </select>
                </div>
            </div>
            <div className="mt-5">
                <button className='bg-red-600 rounded w-full text-white font-bold p-4'>Find a date</button>
            </div>
        </div>
   </>
  )
}

export default ReservationCard
