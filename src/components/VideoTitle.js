import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[25%] px-12 absolute'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/8 text-white'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 text-xl  rounded-lg mx-2 hover:bg-opacity-50'>Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-80'>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle