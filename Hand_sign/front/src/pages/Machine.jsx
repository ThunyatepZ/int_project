import Navbar from '@/components/Navbar';
import axios from 'axios'; // ✅ นำเข้า axios
import Link from 'next/link';
import { useState } from 'react';
import { CircleChevronDown } from '@/components/circledown';
import CodeBlock_ML from '@/components/code_ml';
import CodeBlock_ML2 from '@/components/code_ml2';
import CodeBlock_ML3 from '@/components/code_,ml3';
import CodeBlock_ML4 from '@/components/code_ml4';
import CodeBlock_DT from '@/components/dt';
import CodeBlock_DT2 from '@/components/dt.2';

function Machine() {
  return(
    <div className='scroll-smooth  overflow-auto'>
      <div className='fixed w-full top-0 z-50'>
        <Navbar />
      </div>
      <span className='flex-col text-4xl text-white font-title2'>
        <span className ='flex justify-center mt-48'>
          Machine Learning
        </span>
        <span className ='flex justify-center'>
          Recommended Sport/Activity
        </span>
        <div className='w-fit mx-auto mt-20' onClick={() => document.getElementById('tap2').scrollIntoView({ behavior: 'smooth' })}>
          <CircleChevronDown/>
        </div>
      </span>

      <div id='tap2' className='w-full text-white'>
        <div className='flex items-center h-screen text-center' >
          <CodeBlock_ML/>
          <div className='flex flex-col justify-center items-center w-full h-screen'>
            <span className='text-start text-white font-title3'>
              เราจะ import KNeighborsClassifierc และ DecisionTreeClassifier มาใช้ในการทำนายข้อมูล โดยใช้ข้อมูลจาก sport_health_dataset.csv ที่ได้ทำการเตรียมไว้จาก Chat GPT
            </span>
          </div>
          <CodeBlock_DT/>
        </div>

        <div className='flex items-center h-screen text-center'>
          <CodeBlock_ML2/>
          <div className='flex flex-col justify-center items-center w-full h-screen'>
            <span className='text-srart text-white font-title3'>
              ทำการเปลี่ยนข้อมูลที่เป็น String ให้เป็นตัวเลข
            </span>
            <span className='text-start text-white font-title3'>
              โดยในDurationจะทำการลบ min ออกไปเพื่อให้ง่ายต่อการนำไปใช้งาน
            </span>
          </div>
        </div>

        <div className='flex items-center h-screen text-center'>
          <CodeBlock_ML3/>
          <div className='flex flex-col justify-center items-center w-full h-screen'>
            <span className='text-srart text-white font-title3'>
              เตรียมข้อมูลเพื่อนำไปใช้ในการTrain โดย x คือข้อมูลที่ใช้ในการTrain และ y คือข้อมูลที่เราต้องการทำนาย
            </span>
            <span className='text-start text-white font-title3'>
              จากนั้นแบ่งข้อมูลเป็น 80/20 โดย 80% ใช้ในการTrain และ 20% ใช้ในการTest
            </span>
          </div>
        </div>
        
        <div className='flex items-center h-screen text-center'>
          <CodeBlock_ML4/>
          <div className='flex flex-col justify-center items-center w-full h-screen'>
            <span className='text-start text-white font-title3'>
            ทำการปรับค่าของข้อมูลและสร้างโมเดล โดยใช้ข้อมูลที่Train และทำการทำนายข้อมูลที่Test เมื่อมีข้อมูลใหม่เข้ามาก็จะทำการทำนายว่าข้อมูลนั้นเหมาะกับกีฬาหรือกิจกรรมอะไรที่สุด
            </span>
          </div>
          <CodeBlock_DT2/>
        </div>

      </div>
    </div>
  )
}

export default Machine;