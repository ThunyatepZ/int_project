import Navbar from '@/components/Navbar';
import DrawingCanvas from '@/components/canvas';
import axios from 'axios'; // ✅ นำเข้า axios
import { useState } from 'react';

function DemoMachine() {
  return(
    <div>
      <Navbar/>
    </div>
  )
}

export default DemoMachine;