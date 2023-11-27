import { useState } from 'react';
import './index.css'

export default function ControlledComponent() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const handleChangeF = (e) => {
    setFirst(e.target.value);
  };

  const handleChangeS = (e) => {
    setSecond(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const [memeUrl, setMemeUrl] = useState('');

  const fetchMeme = async () => {
    const url = 'https://api.jsonbin.io/v3/b/6564795812a5d376599f8c57';
    const options = {
      method: 'GET',
    };
   
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const memes = result.record.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const randomeMemeUrl = memes[randomIndex].url;
      console.log(randomeMemeUrl);
      setMemeUrl(randomeMemeUrl);
    } catch (error) {
      console.error(error);
    }
   };   
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col font-notosans mb-4 mt-4'>
        <label className='flex space-x-4 ml-6'>
          <input
            type="text"
            first={setFirst}
            onChange={handleChangeF}
            placeholder='Shut up'
            className='w-40 h-4 border p-4 text-xs rounded-lg f '
          />
          <input
            type="text"
            second={setSecond}
            onChange={handleChangeS}
            placeholder='Take my money'
            className='w-40 h-4 border p-4 text-xs rounded-lg f'
          />
        </label>
      </div>
      <img src={memeUrl} alt="meme"  className='rounded-lg w-[80%] ml-9' />
      <button
        className='w-[90%] mr-4 ml-3 mt-4  bg-white border hover:bg-slate-700  hover:border-white transition-all hover:text-white border-black rounded-lg p-3 text-black'
        onClick={fetchMeme}
      >
        Get a new meem image 🎉
      </button>
    </form>
  )
};