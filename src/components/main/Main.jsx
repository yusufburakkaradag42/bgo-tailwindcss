import React from 'react'
import "./main.css"
const Main = ({isNavOpen}) => {
  return (
   
<div className={`body w-full h-screen flex items-center justify-center ${isNavOpen ? "active" : ''}`}>
  <div className='flex flex-col items-center justify-center text-white gap-4'>
    <p className='text-5xl'>Hello, Rust!</p>
    <p className='text-xs'>Always on display.</p>
  </div>
</div>

  )
}

export default Main