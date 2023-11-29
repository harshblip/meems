import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { exportComponentAsPNG } from 'react-component-export-image';
import './index.css'
import { createRef } from 'react';
import Header from '../Header'

export default function ControlledComponent() {
  const [memeUrl, setMemeUrl] = useState('');
  const [cliked, setcliked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [positions, setPositions] = useState([]);
  const [alt, setAlt] = useState('');
  const timerRef = useRef();

  const handleDoubleClick = (e) => {
    if (inputValues[inputValues.length - 1] !== '') {
      setInputValues([...inputValues, '']);
    }
    setShowInput(true);
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
    setInputValues([]);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const memes = result.record.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const randomeMemeUrl = memes[randomIndex].url;
      console.log(randomeMemeUrl);
      setMemeUrl(randomeMemeUrl);
      setAlt(memes[randomIndex].name)
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseDown = (index) => {
    timerRef.current = setInterval(() => {
      let newInputValues = [...inputValues];
      newInputValues[index] = newInputValues[index].slice(0, -1);
      setInputValues(newInputValues);
    }, 2);
  }

  const handleMouseUp = () => {
    clearInterval(timerRef.current);
  }

  const memeRef = createRef();

  return (
    <>
    <Header />
      <div ref={memeRef} className='mt-4'>
        {cliked ?
          <img
            src={memeUrl}
            alt={alt}
            className='rounded-lg w-[80%] h-auto ml-9 object-contain text-white g'
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
              style={{ position: 'absolute', left: positions[index].x, top: positions[index].y, background: 'transparent', border: '2px dashed black' }}
              className='font-memefont text-lg text-white g'
            />
          ))
        ) : (
          inputValues.map((inputValue, index) => (
            <Draggable>
              <p
                key={index}
                onDoubleClick={handleDoubleClick}
                style={{ position: 'absolute', left: positions[index].x, top: positions[index].y }}
                onMouseDown={() => handleMouseDown(index)}
                onMouseUp={handleMouseUp}
                className='font-memefont text-2xl text-white g '
              > {inputValue}
              </p>
            </Draggable>
          ))
        )}
      </div>
      <div className='flex'>

        <button
          className='p-[1em] mr-4 ml-3 mt-4 h-18  bg-white border hover:bg-slate-700 hover:border-white transition-all hover:text-white border-black rounded-lg  text-black'
          onClick={fetchMeme}
        >
          Get a new meem image 🎉
        </button>
        <button className='w-[20%] mr-4 ml-3 mt-4 bg-white border hover:bg-slate-700 hover:border-white transition-all hover:text-white border-black rounded-lg p-[1em] text-black'
          onClick={(e) => exportComponentAsPNG(memeRef)}
        >save</button>
      </div>
    </>
  )
};