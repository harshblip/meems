import React from 'react'
import arpitB from '../../media/arpit-bala-celebration.gif';
import './index.css'

export default function Header() {

  const consoleOutput = () => {
    console.log("hi babe");
  }

  return (
    <div className='header justify-center space-x-5 font-notosans flex rounded-xl  p-8'>

      <img
        src={arpitB}
        alt='feels'
        width='80'
        onMouseEnter={consoleOutput}
        className='bg-transparent rounded-xl object-contain  hover:{consoleOutput} '
      />

      <h2 className='text-white text-2xl mt-4'> Meem Generator </h2>
    </div>
  )
}