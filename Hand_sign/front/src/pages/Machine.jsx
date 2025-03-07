import Navbar from '@/components/Navbar';
import axios from 'axios'; // ✅ นำเข้า axios
import Link from 'next/link';
import { useState } from 'react';

function Machine() {
  const [base64Image, setBase64Image] = useState('');

  // ✅ ฟังก์ชันส่ง Base64 ไป FastAPI
  const handleSendToBackend = async () => {
    if (!base64Image) {
      alert("ยังไม่มีภาพ Base64! กรุณาวาดรูปแล้วกด Convert to Base64");
      return;
    }

    try {
      const response = await axios.post('https://int-project.onrender.com/predict', { image: base64Image });

      console.log("์Numer is :", response.data);
      alert(`Number is : ${response.data.prediction}`);
    } catch (error) {
      console.error("Error sending Base64:", error);
      alert("เกิดข้อผิดพลาดในการส่ง Base64");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center w-full h-screen'>
      <div className='bg-white text-black w-[1000px] h-[600px] rounded-2xl overflow-auto'>
            <div className='ml-2 mr-2'>
              <span className='flex justify-center mt-2 text-xl'>Machine Learning</span>
              <span className=''>MLตัวนี้เริ่มจากที่กลุ่มผมได้ไปค้นหาData setใน Kaggle จนผมได้ข้อมูลที่ต้องการจะนำมาใช้นั่นก็คือข้อมูลภาพลายมือเลข0-9</span>
              <span className=''>และผมจะแปะลิ่งไว้เผื่อผู้ชมจะไปลองดูครับ {<Link href='https://www.kaggle.com/datasets/aquibiqbal/digits-09'>ที่มา digits-09</Link>}</span>
              <div>
                <div id='header' className='text-xl text-start ml-5'>* feature of this Dataset</div>
                <span className='flex flex-col justify-start items-start ml-5'>
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
                <div className='flex'>
                  <img className='' src='911 1.png'></img>
                  <img className='' src='911 2.png'></img>
                  <img className='' src='911 1.png'></img>

                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='h-screen'>

      </div>
    </div>
  );
}

export default Machine;