import React from 'react'
const SearchHeader = () => {
  return (
    <main>
      {/* HEADER */}
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        <div className="text-center pt-10">
          <h1 className='text-white font-bold text-4xl'>Find your table for any occasion</h1>
          {/* Search Bar */}
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input className='rounded mr-3 p-2 w-[450px]' type="text" placeholder='State, City'/>
            <button className='bg-red-600 px-9 py-2 text-white rounded'>Let's Go</button>
          </div>
          {/* Search Bar */}
        </div>
      </div>
      {/* HEADER */}
    </main>
  )
}

export default SearchHeader