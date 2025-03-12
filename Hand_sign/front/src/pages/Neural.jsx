import CodeBlock from '@/components/codeblock1';
import CodeBlock2 from '@/components/codeblock2';
import CodeBlock3 from '@/components/codeblock3';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Neural = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='bg-white text-black w-[900px] h-auto mb-10 rounded-2xl '>
          <div className='ml-2 mr-2 mt-5'>
            <span className='flex justify-center mt-2 text-xl'>Machine Learning</span>
            <span className='flex justify-center'>MLตัวนี้เริ่มจากที่กลุ่มผมได้ไปค้นหาData setใน Kaggle จนผมได้ข้อมูลที่ต้องการจะนำมาใช้นั่นก็คือข้อมูลภาพลายมือเลข0-9</span>
            <span className='flex justify-center'>และผมจะแปะลิ่งไว้เผื่อผู้ชมจะไปลองดูครับ {<Link href='https://www.kaggle.com/datasets/aquibiqbal/digits-09'>ที่มา digits-09</Link>}</span>
            <div className='flex justify-around'>
              <div className='mt-5'>
                <span className='flex flex-col justify-start items-start ml-10 w-52 mb-5'>
                  <div id='header' className='text-xl text-start'>* feature of this Dataset</div>
                  <li>รูปภาพเลข 0 จำนวน 1176รูป</li>
                  <li>รูปภาพเลข 1 จำนวน 1150รูป</li>
                  <li>รูปภาพเลข 2 จำนวน 1141รูป</li>
                  <li>รูปภาพเลข 3 จำนวน 1121รูป</li>
                  <li>รูปภาพเลข 4 จำนวน 1118รูป</li>
                  <li>รูปภาพเลข 5 จำนวน 1135รูป</li>
                  <li>รูปภาพเลข 6 จำนวน 1135รูป</li>
                  <li>รูปภาพเลข 7 จำนวน 1119รูป</li>
                  <li>รูปภาพเลข 8 จำนวน 1103รูป</li>
                  <li>รูปภาพเลข 9 จำนวน 1105รูป</li>
                </span>
              </div>
              <div className='flex justify-end w-full mt-8 mr-24'>
                <img src="show.png" className='w-[70%] h-[70%]' alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='h-screen' id='tap2'>
        <div className='flex justify-around items-center'>
          <div className='bg-white text-center text-black w-[700px] h-auto rounded-2xl overflow-auto p-4'>
            <div className='text-xl mt-5'>ขั้นตอนที่1</div>
            <span>เริ่มต้นมา ผมได้ทำการให้มันอ่านไฟล์เนื่องจากdatasetที่ผมได้มามันเป็น.zipและมีโฟลเดอร์ข้างใน</span>
            <span>และต่อมาผมได้แบ่งข้อมูลสำหรับการTrainและTestไว้ เป็น 80/20</span>
          </div>
          <div className="w-full max-w-[600px] mb-10">
            <CodeBlock />
          </div>
        </div>

      </div>
      <div className='h-screen' id='tap2'>
        <div className='flex justify-around items-center'>
          <div className="w-full max-w-[600px] mb-10">
            <CodeBlock2 />
          </div>
          <div className='bg-white text-center text-black w-[700px] h-auto rounded-2xl overflow-auto p-4'>
            <div className='text-xl mt-5'>ขั้นตอนที่2</div>
            <span>โค้ดนี้ใช้ TensorFlow ในการโหลดและเตรียมชุดข้อมูลรูปภาพสำหรับการฝึกโมเดล CNN โดยฟังก์ชัน load_image(path) จะโหลดภาพจากpath แปลงเป็นภาพขาวดำ ปรับขนาดเป็น 28×28 และทำให้ค่าพิกเซลอยู่ในช่วง 0-1 จากนั้น train_ds และ test_ds จะสร้าง Dataset จากพาธรูปภาพและป้ายกำกับ ใช้ .map()
              เพื่อโหลดและแปลงรูปภาพ แล้วจัดกลุ่มเป็น batch ขนาด 32 เพื่อให้เหมาะกับการฝึกโมเดล</span>
          </div>
        </div>

      </div>
      <div className='h-screen' id='tap2'>
        <div className='flex justify-around items-center'>
          <div className='bg-white text-center text-black w-[700px] h-auto rounded-2xl overflow-auto p-4'>
            <div className='text-xl mt-5'>ขั้นตอนที่3</div>
            <span>โค้ดนี้สร้างโมเดล CNN เพื่อจำแนกภาพขนาด 28x28 ออกเป็น 10 หมวดหมู่ เริ่มจาก Conv2D ดึงฟีเจอร์จากภาพแล้วใช้ MaxPooling2D ลดขนาดข้อมูล จากนั้น Flatten แปลงเป็นเวกเตอร์แล้วส่งเข้า Dense เพื่อเรียนรู้แพทเทิร์น ใช้ softmax ทำนายคลาส คอมไพล์ด้วย Adam และ sparse_categorical_crossentropy เทรนโมเดลด้วย fit() แล้วทดสอบด้วย evaluate() เพื่อดู Accuracy</span>
          </div>
          <div className="w-full max-w-[600px] mb-10">
            <CodeBlock3 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Neural