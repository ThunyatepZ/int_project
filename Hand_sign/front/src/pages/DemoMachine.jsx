import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import axios from 'axios'; // import axios

function DemoMachine() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '0', // default to Male
    health_condition: '0', // default to Healthy
    fitness_level: '0', // default to Beginner
    duration: '',
    intensity: '0', // default to Low
  });

  const [recommendedSport, setRecommendedSport] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form data:', formData); // log ข้อมูลก่อนส่งไปที่ API

    try {
      // ใช้ axios ส่งข้อมูลไปที่ API
      const response = await axios.post('https://int-project.onrender.com/predict_sport', formData);

      // log ข้อมูลที่ได้รับจาก API
      console.log('API response:', response.data);

      // รับผลลัพธ์จาก API และเก็บใน state
      setRecommendedSport(response.data['Recommended Sport/Activity']);
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while predicting sport'); // alert ในกรณีที่เกิดข้อผิดพลาด
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-black"> {/* Background สีดำ */}

        <div className="w-[50%] h-auto bg-gray-700 rounded-lg shadow-lg text-white"> {/* ลดขนาดกรอบฟอร์ม */}
          <h1 className="text-3xl font-semibold mb-6 text-center mt-5">Predict Sport Activity</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex mb-4 gap-4"> {/* ใช้ flex และ gap เพื่อให้ช่องไม่ชนกัน */}
              <div className="w-1/2 ml-2">
                <label htmlFor="age" className="block text-lg">Age:</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md bg-gray-600 text-white border border-gray-500"
                  required
                />
              </div>

              <div className="w-1/2 mr-2">
                <label htmlFor="gender" className="block text-lg">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md bg-gray-600 text-white border border-gray-500"
                  required
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </select>
              </div>
            </div>

            <div className="flex mb-4 gap-4 ml-2"> {/* ใช้ flex และ gap เพื่อให้ช่องไม่ชนกัน */}
              <div className="w-1/2">
                <label htmlFor="health_condition" className="block text-lg">Health Condition:</label>
                <select
                  id="health_condition"
                  name="health_condition"
                  value={formData.health_condition}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md bg-gray-600 text-white border border-gray-500"
                  required
                >
                  <option value="0">Healthy</option>
                  <option value="1">Diabetes</option>
                  <option value="2">Hypertension</option>
                  <option value="3">Arthritis</option>
                </select>
              </div>

              <div className="w-1/2 mr-2">
                <label htmlFor="fitness_level" className="block text-lg">Fitness Level:</label>
                <select
                  id="fitness_level"
                  name="fitness_level"
                  value={formData.fitness_level}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md bg-gray-600 text-white border border-gray-500"
                  required
                >
                  <option value="0">Beginner</option>
                  <option value="1">Intermediate</option>
                  <option value="2">Advanced</option>
                </select>
              </div>
            </div>

            <div className="flex mb-4 gap-4 ml-2"> {/* ใช้ flex และ gap เพื่อให้ช่องไม่ชนกัน */}
              <div className="w-1/2">
                <label htmlFor="duration" className="block text-lg">Duration (minutes):</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md bg-gray-600 text-white border border-gray-500"
                  required
                />
              </div>

              <div className="w-1/2 mr-2">
                <label htmlFor="intensity" className="block text-lg">Intensity:</label>
                <select
                  id="intensity"
                  name="intensity"
                  value={formData.intensity}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md bg-gray-600 text-white border border-gray-500"
                  required
                >
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </select>
              </div>
            </div>
              <div className='flex justify-center'>
                <button type="submit" className=" w-[20%] py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md">Submit</button>
              </div>
          </form>
          {recommendedSport && (
            <div className="mt-6 mb-5 ml-2">
              <h3 className="text-2xl font-semibold">Recommended Sport/Activity : {recommendedSport}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DemoMachine;