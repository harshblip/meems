import React from 'react'
import feels from '../../media/feels.png';
import './index.css';

export default function Header() {
  return (
    <div className='header font-notosans flex'>

       <img src = {feels} alt = 'feels' />

       <h2 className='text-white'> Meem Generator </h2>
    </div>
  )
}