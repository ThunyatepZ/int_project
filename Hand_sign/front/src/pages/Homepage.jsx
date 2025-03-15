import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'

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
    <div className='scroll-smooth  overflow-auto '>
      <div className='fixed w-full z-50'>
        <Navbar />
      </div>
      <div className='scroll-smooth flex flex-col justify-center items-center w-full h-screen'>
        <div className="w-fit">
          <div className="mb-20 animate-typing delay-100 overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-white font-bold">
            Welcome!
            <div className='border-r-white text-5xl text-white font-bold'>to our project!</div>
          </div>
        </div>
        <button className='animate-bounce text-white bg-gray-500 px-8 py-3 rounded-xl' onClick={() => document.getElementById('tap2').scrollIntoView({ behavior: 'smooth' })}>
          Get Info
        </button>
      </div>
      <div id='tap2' className='w-full h-screen text-white'>
        <div className='flex justify-center items-center h-screen text-center'>
        </div>
      </div>
    </div>
  )
}

export default Homepage