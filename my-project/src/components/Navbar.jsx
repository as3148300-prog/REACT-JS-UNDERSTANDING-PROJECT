import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 w-screen  flex items-center justify-between px-10'>
      <h1 className='text-3xl italic text-grey font-bold text-white '>Music</h1>
      <h1 className='text-3xl  italic text-grey font-light bg-red-300 p-2 rounded-full px-5'>Add Freind <span>0</span></h1>
    </div>
  )
}

export default Navbar
