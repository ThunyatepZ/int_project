import React from 'react'
import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import Navbar from '@/components/Navbar'

function Homepage() {
  const [load, setload] = useState(true)
  useEffect(() => {
    const time = setTimeout(() => {
      setload(false)
    }, 3000)
    return (() => {
      clearTimeout(time);
    })
  }, [])
  return load ? <div className='flex justify-center items-center h-screen'><PulseLoader color='#ff793f' /></div> : (
      <div className=''>
      <Navbar/>
      </div>  
  )
}

export default Homepage