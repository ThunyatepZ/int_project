import io

import number
import numpy as np
from fastapi import FastAPI, File, UploadFile
from PIL import Image

app = FastAPI()

@app.post("/predict")
async def predict_digit(file: UploadFile = File(...)):
    # อ่านไฟล์และแปลงเป็นภาพ
    image = Image.open(io.BytesIO(await file.read())).convert("L")  # แปลงเป็น grayscale
    image = np.array(image)
    
    # บันทึกเป็นไฟล์ชั่วคราว (หากต้องใช้พาธ)
    temp_path = "temp_image.png"
    Image.fromarray(image).save(temp_path)

    # ใช้โมเดลพยากรณ์
    result = number.predict_number(temp_path)
    
    return {"prediction": result}
