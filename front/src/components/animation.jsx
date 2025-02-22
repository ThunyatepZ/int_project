import React from 'react'
import Link from 'next/link'

const Animation = () => {
  return (
    <span class="relative flex size-80">
  <span class="absolute inline-flex h-full w-full animate-bounce rounded-full bg-indigo-900 opacity-50"></span>
  <span class="relative inline-flex size-80 rounded-full bg-gray-900"></span>
    </span>
  )
}

export default Animation