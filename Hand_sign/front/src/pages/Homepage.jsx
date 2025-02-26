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
      <div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 to-black w-screen h-screen'>
      <Navbar/>
        <div class="w-max grid justify-items-center ... py-60">
          <h1 class="animate-typing delay-50 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold flex-row">
            Welcome!
            <h1 className='border-r-white pr-5 text-5xl text-white font-bold flex-row'>to Sign Hand Prediction!</h1>
          </h1>
        </div>
      </div>  
  )
}

export default Homepage