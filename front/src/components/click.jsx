import React from 'react'
import Link from 'next/link'

function CLICK(){
  return (
    <nav className='flex justify-center w-screen space-x-6 px-4 py-10 h-0'>
        <Link href='/Homepage' className='text-white hover:text-red-400 transition delay-90 cursor=pointer'>CLICK!</Link>
    </nav>
  )
}

export default CLICK