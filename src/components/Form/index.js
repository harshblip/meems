import { useState } from 'react';
import './index.css'

export default function ControlledComponent() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  const handleChangeF = (e) => {
    setFirst(e.target.value);
  };

  const handleChangeS = (e) => {
    setSecond(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(first + ' ');
    console.log(second);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col font-notosans mb-4 mt-4'>
        <label className='flex space-x-4 ml-6'>
          <input
            type="text"
            first={setFirst}
            onChange={handleChangeF} 
            placeholder = 'Shut up'
            className = 'w-40 h-4 border p-4 text-xs rounded-lg f '
            />
          <input
            type="text"
            second={setSecond}
            onChange={handleChangeS}
            placeholder = 'Take my money'
            className = 'w-40 h-4 border p-4 text-xs rounded-lg f'
            />
        </label>
      </div>
      <button
        className='w-[90%] mr-4 ml-3 bg-white border hover:bg-slate-700  hover:border-white transition-all hover:text-white  border-black rounded-lg p-3 text-black'>
        Get a new meem image 🎉
      </button>
    </form>
  )
};