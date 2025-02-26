import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-stone-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-5 font-title2 shadow-[0px_0px_1px_0px_rgba(250,_250,_250,_0.57)]'>
      <span className='font-title2 text-neutral-500 flex flex-row justify-end space-x-6'>
        <span className='font-semibold text-gray-300 flex flex-1'>Sign Hand</span>
          <Link href='/Homepage' className='hover:text-violet-400 transition delay-90'>Home</Link>
          <Link href='/Info' className='hover:text-violet-400 transition delay-90'>Info</Link>
          <Link href='/Machine' className='hover:text-violet-400 transition delay-90'>Machine Learning</Link>
          <Link href='/Neural' classname='hover:text-violet-400 transition delay-90'>Neural Network</Link>
      </span>
    </div>
  )
}
