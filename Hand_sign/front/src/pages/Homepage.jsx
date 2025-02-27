import React from 'react'
import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

function Homepage() {
  const [load, setload] = useState(true)
  useEffect(() => {
    const time = setTimeout(() => {
      setload(false)
    }, 1500)
    return (() => {
      clearTimeout(time);
    })
  }, [])

  return load ? <div className='flex justify-center items-center h-screen'><PulseLoader color='#ff793f' /></div> : (
    <div className='scroll-smooth bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 to-black overflow-hidden'>
      <div className='fixed w-full'>
        <Navbar />
      </div>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className="w-fit">
          <h1 className="mb-20 animate-typing delay-100 overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-white font-bold">
            Welcome!
            <h1 className='border-r-white text-5xl text-white font-bold'>to Sign Hand Prediction!</h1>
          </h1>
        </div>
        <div className='animate-bounce text-white bg-gray-500 px-8 py-3 rounded-xl'>
          Start
        </div>
      </div>
      <div className='bg-green-400 w-full h-screen'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam ratione quo repudiandae, labore vel eveniet incidunt atque similique optio! Quidem, vitae natus possimus cumque assumenda ea laboriosam incidunt aliquid.
      </div>
    </div>
  )
}

export default Homepage