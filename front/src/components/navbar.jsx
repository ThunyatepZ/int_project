import React from 'react'
import Link from 'next/link'

function Navbar(){
  return (
    <nav className='flex justify-center w-screen space-x-6 px-4 py-10 h-0'>
        <Link href='/Homepage' className='text-white hover:text-violet-400 transition delay-90 cursor=pointer'>Home</Link>
        <Link href='/Info' className='text-white hover:text-violet-400 transition delay-90 cursor=pointer'>Info</Link>
        <Link href='/Demo' className='text-white hover:text-violet-400 transition delay-90 cursor=pointer'>Demo</Link>
    </nav>
  )
}

export default Navbar