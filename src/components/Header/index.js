import React from 'react'
import feels from '../../media/feels.png';

export default function Header() {
  return (
    <div className='header justify-center  font-notosans flex bg-black/80 p-8'>

       <img src = {feels} alt = 'feels' />

       <h2 className='text-white text-2xl'> Meem Generator </h2>
    </div>
  )
}