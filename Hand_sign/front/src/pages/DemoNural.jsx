import Navbar from '@/components/Navbar';
import DrawingCanvas from '@/components/canvas';
import axios from 'axios';
import { useState } from 'react';

function DemoNural() {
    const [base64Image, setBase64Image] = useState('');
    const [loading, setLoading] = useState(false);  // เพิ่มสถานะ loading

    const handleSendToBackend = async () => {
      if (!base64Image) {
        alert("ยังไม่มีภาพ Base64! กรุณาวาดรูปแล้วกด Convert to Base64");
        return;
      }

      setLoading(true);  // ตั้งค่า loading เป็น true ก่อนเริ่มส่งข้อมูล

      try {
        const response = await axios.post('https://int-project.onrender.com/predict', { image: base64Image });

        console.log("Number is:", response.data);
        alert(`Number is: ${response.data.prediction}`);
      } catch (error) {
        console.error("Error sending Base64:", error);
        alert("เกิดข้อผิดพลาดในการส่ง Base64");
      } finally {
        setLoading(false);  // ตั้งค่า loading เป็น false หลังจากเสร็จสิ้นการส่งข้อมูล
      }
    };

    return (
      <div>
        <Navbar />
        <div className='flex justify-center items-center w-screen h-screen'>
          <div className='flex justify-center w-screen h-screen items-start text-white mt-32 text-xl'>
            predicts number 0-9!!!
          </div>
          <div className='absolute flex flex-col justify-center items-center text-white h-full w-screen'>
            <DrawingCanvas width={500} height={500} onConvertToBase64={setBase64Image} />
            
            {base64Image ? (
              <div className="mt-4 flex flex-col items-center w-full max-w-lg">
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleSendToBackend}
                  disabled={loading}  // ปิดปุ่มระหว่างที่กำลังโหลด
                >
                  {loading ? 'Sending...' : 'Send to Backend'}  {/* เปลี่ยนข้อความเมื่อกำลังโหลด */}
                </button>
              </div>
            ) : (
              <div className="mt-4 text-red-400">don't have base64 img</div>
            )}
          </div>
        </div>
      </div>
    );
}

export default DemoNural;