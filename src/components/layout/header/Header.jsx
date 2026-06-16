import React from 'react'
import LoginBtn from './LoginBtn'
import DarkLightModeBtn from './DarkLightModeBtn'
import Navbar from './Navbar'
import SignUpBtn from './SignUpBtn'

export default function Header() {
  return (
    <header className="w-[60%] h-15 flex justify-between items-center mx-auto relative z-10">
      <div>
        <h2 className="capitalize text-white text-2xl">aedifico</h2>
      </div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className='flex'>
        <div className='flex gap-1'>
           <LoginBtn></LoginBtn>
        <SignUpBtn></SignUpBtn>
        </div>
      </div>
    </header>
  )
}
