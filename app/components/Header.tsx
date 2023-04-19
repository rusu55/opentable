import React from 'react'

const Header = () => {
  return (
    <>
    {/* Header */}
    <div className="h-96 overflow-hidden">
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className='text-7xl text-white capitalize text-shadow text-center'>
                Red Barn
            </h1>
        </div>
    </div>
    {/* Header */}
    {/* DESCRIPTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESTAURANT NAV */}
            <nav className="flex text-reg border-b pb-2">
                <a href="" className="mr-7">Overview</a>
                <a href="" className="mr-7">Menu</a>
            </nav>
            {/* RESTAURANT NAV */}
            {/* TILE */}
            <div className="mt-4 border-b pb-6">
                <h1 className=" font-bold text-6xl">Milesstone Grill</h1>
            </div>
            {/* TILE */}
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
            {/* DESC */}
            <div className="mt-4">
                <p className="text-lg font-light">
                        Step back in time to when going out for dinner meant something really special. From the decor to the jazz music, Wildfire has the style and warmth that makes it perfect for celebrating with friends or a quiet evening for two. The extensive menu features broiled steaks and chops, wood-roasted seafood and roasted meats, all prepared in an open kitchen. 
                </p>
            </div>
            {/* DESC */}
            {/* IMAGES */}
            <div className="">
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">7 Photos</h1>
                <div className="flex flex-wrap ">
                    <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23669322.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
                    <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23802772.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
                    <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23802773.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
                    <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23802774.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
                    <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23802774.jpg" alt="" className="w-56 h-44 mr-1 mb-1" />
                </div>
            </div>
            {/* IMAGES */}
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
        </div>
        {/* RESERVATION PORTION */}
        <div className="w-[27%] relative">
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
        </div>
        {/* RESERVATION PORTION */}
    </div>
    {/* DESCRIPTION */}
    
    </>
  )
}

export default Header