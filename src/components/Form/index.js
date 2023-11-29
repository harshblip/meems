import { useState } from 'react';
import arpitB from '../../media/arpit-bala-celebration.gif';
import Draggable from 'react-draggable';
import './index.css'

export default function ControlledComponent() {
  const [memeUrl, setMemeUrl] = useState('');
  const [cliked, setcliked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState([]);

  const handleDoubleClick = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setShowInput(true);
    setInputValues([...inputValues, '']);
    setPositions([...positions, { x: e.clientX, y: e.clientY }]);
  }

  const handleBlur = () => {
    setShowInput(false);
  }

  const handleChange = (e, index) => {
    let newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  }

  const fetchMeme = async () => {
    const url = 'https://api.jsonbin.io/v3/b/6564795812a5d376599f8c57';
    const options = {
      method: 'GET',
    };
    setcliked(true);
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
    <div className='header justify-center space-x-5 font-notosans flex flex-col rounded-xl p-8'>

      <img
        src={arpitB}
        alt='feels'
        width='80'
        className='bg-transparent rounded-xl object-contain'
      />

      <h2 className='text-white text-2xl'> Meem Generator </h2>
      <div className='flex flex-col font-notosans mb-4 mt-4'>
      </div>
      {cliked ?
        <img
          src={memeUrl}
          alt="meme"
          className='rounded-lg w-[80%] ml-9 object-contain text-white g'
          onDoubleClick={handleDoubleClick}
        /> : ""}
      {showInput ? (
        inputValues.map((inputValue, index) => (
          <input
            key={index}
            type='text'
            value={inputValue}
            onChange={(e) => handleChange(e, index)}
            onBlur={handleBlur}
            style={{ position: 'absolute', left: position.x, top: position.y, background: 'transparent', border: '2px dashed black' }}
            className='font-memefont text-lg'
          />
        ))
      ) : (
        inputValues.map((inputValue, index) => (
          <Draggable>
            <p
              key={index}
              onDoubleClick={handleDoubleClick}
              style={{ position: 'absolute', left: position.x, top: position.y }}
              className='font-memefont text-2xl text-white g '
            > {inputValue}
            </p>
          </Draggable>
        ))
      )}
      <button
        className='w-[90%] mr-4 ml-3 mt-4 bg-white border hover:bg-slate-700 hover:border-white transition-all hover:text-white border-black rounded-lg p-3 text-black'
        onClick={fetchMeme}
      >
        Get a new meem image 🎉
      </button>
    </div>
  )
};