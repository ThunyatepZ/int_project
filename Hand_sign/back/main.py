import base64
import io

import numpy as np
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from number import predict_number
from PIL import Image
from pydantic import BaseModel

# ✅ Import ไฟล์ number.py

app = FastAPI()

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
        image = np.array(image)

        # ✅ บันทึกเป็นไฟล์ชั่วคราว
        temp_path = "temp_image.png"
        Image.fromarray(image).save(temp_path)

        # ✅ ใช้โมเดลพยากรณ์
        result = predict_number(temp_path)

        return {"prediction": int(result)}

    except Exception as e:
        return {"error": str(e)}