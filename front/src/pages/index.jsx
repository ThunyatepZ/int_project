import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Foot from '../components/foot'
import Animation from '../components/animation'
import Welcome from '@/components/welcome'


function index() {
  return (
    <div className='flex flex-col bg-gradient-to-t from-indigo-950 via-gray-900 to-slate-900  w-screen h-screen'>
      <div className='flex-grow font-medium font-title text-2xl'>
        <Navbar/>
      </div>
      <div className='relative flex items-center justify-center w-screen h-full font-title text-5xl text-center'>
        <div className='absolute z-0 -translate-y-5'>
          <Animation/>
        </div>
        <div className='relative z-0 -translate-y-5'>
          <Welcome/>
        </div>
      </div>
    </div>
  )
}

export default index
