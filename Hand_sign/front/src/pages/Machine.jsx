import Navbar from '@/components/Navbar';
import DrawingCanvas from '@/components/canvas';
import { useState } from 'react';
import axios from 'axios'; // ✅ นำเข้า axios

function Machine() {
  const [base64Image, setBase64Image] = useState('');

  // ✅ ฟังก์ชันส่ง Base64 ไป FastAPI
  const handleSendToBackend = async () => {
    if (!base64Image) {
      alert("ยังไม่มีภาพ Base64! กรุณาวาดรูปแล้วกด Convert to Base64");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', { image: base64Image });

      console.log("์Numer is :", response.data);
      alert("suck");
    } catch (error) {
      console.error("Error sending Base64:", error);
      alert("เกิดข้อผิดพลาดในการส่ง Base64");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='absolute flex justify-center w-screen h-screen items-start text-white mt-32'>
          Machine learning predicts number 0-9!!!
        </div>
        <div className='absolute flex flex-col justify-center items-center text-white h-full w-screen'>
          <DrawingCanvas width={500} height={500} onConvertToBase64={setBase64Image} />
          
          {base64Image ? (
            <div className="mt-4 flex flex-col items-center w-full max-w-lg">
              <textarea
                className="w-full h-40 p-2 text-sm bg-gray-800 text-white rounded"
                value={base64Image}
                readOnly
              />
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSendToBackend}
              >
                Send to Backend
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

export default Machine;