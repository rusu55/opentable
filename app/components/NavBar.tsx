'use client'
import React from 'react';

import userRegisterModal from '../hooks/userRegisterModal';

const NavBar = () => {

  const registerModal = userRegisterModal()

  return (
    <>
    {/* NAVBAR */}
    <nav className='bg-white p-2 flex justify-between'>
      <a href="" className=' font-bold text-gray-700 text-2xl'>OpenTable</a>
      <div>
        <div className="flex">
          <button className='bg-blue-400 text-white p-1 px-4 border rounded mr-3'>Sign in</button>
          <button onClick = {registerModal.onOpen} className='border rounded p-1 px-4'>Sign up</button>
        </div>
      </div>
    </nav>
    {/* NAVBAR */}     
    </>
  )
}

export default NavBar