import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
function index() {
  return (
    <div className='flex justify-between items-center bg-slate-700 w-screen h-screen'>
      <div className='text-center text-white w-[50%]'>machine learning && Nural network</div>
      <div className='text-center text-white w-[50%]'><Link href={"/Homepage"}>Start</Link></div>
    </div>
  )
}

export default index
