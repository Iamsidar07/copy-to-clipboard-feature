
import { useState } from 'react';
import './App.css';
import copyToClipboard from './copyToClipboard';

function App() {
  const [isCopied,setIsCopied]=useState(false);
  const value = "Chuck Norris doesn't say who's your daddy, because he knows the answer.";
  return (
    <div className="items-center justify-center flex-col h-screen max-w-xl text-center mx-auto">
      <h1 className='my-2 font-bold text-lg'>Copied to clipboard feature</h1>
      {isCopied && <img
        src={"/copied.gif"}
        width={200}
        height={200}
        objectFit="contain"
        alt='copied gif'
        className='mx-auto'
      />}
      <div className='relative p-2  md:m-3 group shadow-sm rounded group m-1 md:p-3 md:hover:text-teal-600 md:hover:shadow-2xl  transition-all duration-200 ease-in transform cursor-pointer group' >
        <p className=' p-2 md:group-hover:border-l-4 border-l-4 md:group-hover:border-yellow-500 transition-all duration-100 ease-in'>{value}</p>
        <p className='text-sm mt-3 md:opacity-0 md:group-hover:opacity-100 '>Keyword- <span className='text-pink-500'>dad</span> </p>

        <div className='absolute bottom-0 right-2 opacity-100 ' onClick={() => {
          copyToClipboard(value);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 5000);
        }}>{isCopied && <small className='absolute bottom-1 right-7 text-black font-bold'>copied</small>}
          <img
            src={"/copy.png"}
            width={20}
            height={20}
            objectFit="contain"
            alt='copy'
          />
        </div>
        
    </div>
    </div>
  );
}

export default App;
