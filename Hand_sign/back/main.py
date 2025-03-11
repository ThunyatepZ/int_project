import base64
import io
import numpy as np
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from number import predict_number  # ✅ Import ฟังก์ชันทำนายจากไฟล์ number.py
from PIL import Image
from pydantic import BaseModel
from tensorflow.keras.models import load_model
import cv2

app = FastAPI()

# ✅ โหลดโมเดลจากไฟล์ .h5 เพียงครั้งเดียว
MODEL_PATH = "modelsave/digit_classifier.h5"  # แก้เป็น path ที่เก็บโมเดลของคุณ
model = load_model(MODEL_PATH)
print("✅ โมเดลถูกโหลดสำเร็จ!")

# ✅ อนุญาตให้ React (Frontend) เข้าถึง API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # หรือระบุ ["http://localhost:3000"] ถ้าใช้ React Local
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ สร้าง Request Model สำหรับรับ Base64
class ImageData(BaseModel):
    image: str

@app.post("/predict")
async def predict_digit(data: ImageData):
    try:
        # ✅ แปลง Base64 -> รูปภาพ
        image_data = base64.b64decode(data.image.split(",")[1])  # ตัด "data:image/png;base64," ออก
        image = Image.open(io.BytesIO(image_data)).convert("L")  # แปลงเป็น grayscale
        image = np.array(image)  # แปลงเป็น numpy array

        # ✅ ปรับขนาดภาพให้เป็น 28x28
        image = cv2.resize(image, (28, 28))  # ใช้ OpenCV resize หรือ PIL ก็ได้

        # ✅ Normalize ค่าให้อยู่ในช่วง 0-1
        image = image / 255.0
        image = np.expand_dims(image, axis=(0, -1))  # เพิ่ม batch และ channel dimension

        # ✅ ใช้โมเดลพยากรณ์
        result = model.predict(image)  # ใช้โมเดลที่โหลดแล้วทำนายผล

        return {"prediction": int(np.argmax(result))}

    except Exception as e:
        return {"error": str(e)}