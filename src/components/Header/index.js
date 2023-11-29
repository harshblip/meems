import React from 'react'
import arpitB from '../../media/arpit-bala-celebration.gif';
import './index.css';

export default function index() {
    return (
        <div className='header h-[6rem] justify-center space-x-5 font-notosans flex flex-col rounded-xl p-8'>
            <div className='flex space-x-5'>

            <img
                src={arpitB}
                alt='feels'
                width='80'
                className='bg-transparent rounded-xl object-contain'
                />

            <h2 className='text-white text-[1em] mt-4 '> Meem Generator </h2>
                </div>
        </div>
    )
}
