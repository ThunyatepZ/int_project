import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import CLICK from '../components/click'
import Foot from '../components/foot'
import Animation from '../components/animation'
import Welcome from '@/components/welcome'


function index() {
  return (
    <div className='flex flex-col bg-bannerImg bg-repeat bg-cover bg-cottom to-slate-900  w-screen h-screen'>
      <div className='relative flex items-center justify-center w-screen h-full font-title text-5xl text-center'>
        <div className='absolute z-0 -translate-y-2'>
          <Animation/>
        </div>
        <div className='relative z-0 -translate-y-2'>
          <Welcome/>
        </div>
      </div>
      <div className='flex-grow font-title text-2xl py-6 font-bold'>
        <CLICK/>
      </div>
    </div>
  )
}

export default index
