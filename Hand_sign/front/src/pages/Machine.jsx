import Navbar from '@/components/Navbar';
import axios from 'axios'; // ✅ นำเข้า axios
import Link from 'next/link';
import { useState } from 'react';

function Machine() {
  return(
    <div>
      <Navbar/>
    </div>
  )
}

export default Machine;