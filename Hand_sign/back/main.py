import base64
import io
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import cv2
from PIL import Image
from tensorflow.keras.models import load_model
import joblib

# ✅ โหลดโมเดลที่เกี่ยวข้อง
digit_model = load_model("modelsave/digit_classifier.h5")  # โมเดลที่ทำนายตัวเลข
knn_model = joblib.load('modelsave/knn_model.pkl')  # โมเดล KNN
decision_tree_model = joblib.load('modelsave/DT/decision_tree_model.pkl')  # โมเดล Decision Tree
scaler = joblib.load('modelsave/scaler.pkl')  # Scaler ที่ใช้
label_encoder = joblib.load('modelsave/label_encoder.pkl')  # Label Encoder ที่ใช้

# ✅ แสดงข้อความว่าโหลดโมเดลสำเร็จ
print("✅ โมเดลสำหรับการทำนายตัวเลข ถูกโหลดสำเร็จ!")
print("✅ โมเดลสำหรับการทำนายกีฬา (KNN) ถูกโหลดสำเร็จ!")
print("✅ โมเดลสำหรับการทำนายกีฬา (Decision Tree) ถูกโหลดสำเร็จ!")
print("✅ Scaler และ Label Encoder ถูกโหลดสำเร็จ!")

app = FastAPI()

# ✅ อนุญาตให้ React (Frontend) เข้าถึง API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ สร้าง Request Model สำหรับการทำนายตัวเลขจากรูปภาพ
class ImageData(BaseModel):
    image: str

# ✅ สร้าง Request Model สำหรับการทำนายกีฬา
class UserData(BaseModel):
    age: int
    gender: int
    health_condition: int
    fitness_level: int
    duration: int
    intensity: int

# 🎯 **API ทำนายตัวเลขจากรูป**
@app.post("/predict")
async def predict_digit(data: ImageData):
    try:
        # ✅ แปลง Base64 -> รูปภาพ
        image_data = base64.b64decode(data.image.split(",")[1])  # ตัด "data:image/png;base64," ออก
        image = Image.open(io.BytesIO(image_data)).convert("L")  # แปลงเป็น grayscale
        image = np.array(image)  # แปลงเป็น numpy array

        # ✅ ปรับขนาดภาพให้เป็น 28x28
        image = cv2.resize(image, (28, 28))  

        # ✅ Normalize ค่าให้อยู่ในช่วง 0-1
        image = image / 255.0
        image = np.expand_dims(image, axis=(0, -1))  # เพิ่ม batch และ channel dimension

        # ✅ ใช้โมเดลพยากรณ์
        result = digit_model.predict(image)
        
        return {"prediction": int(np.argmax(result))}

    except Exception as e:
        return {"error": str(e)}

# 🎯 **API ทำนายกีฬา (KNN)**
@app.post("/predict_sport")
async def predict_sport_knn(user_data: UserData):
    try:
        user_input = np.array([[user_data.age, user_data.gender, user_data.health_condition, 
                                user_data.fitness_level, user_data.duration, user_data.intensity]])
        
        # ปรับมาตรฐานข้อมูล
        user_input_scaled = scaler.transform(user_input)
        prediction = knn_model.predict(user_input_scaled)
        
        # แปลงค่ากลับเป็นชื่อกีฬา
        recommended_sport = label_encoder.inverse_transform(prediction)
        
        return {"Recommended Sport/Activity (KNN)": recommended_sport[0]}
    
    except Exception as e:
        return {"error": str(e)}

# 🎯 **API ทำนายกีฬา (Decision Tree)**
@app.post("/predict_sport_dt")
async def predict_sport_dt(user_data: UserData):
    try:
        user_input = np.array([[user_data.age, user_data.gender, user_data.health_condition, 
                                user_data.fitness_level, user_data.duration, user_data.intensity]])
        
        # ปรับมาตรฐานข้อมูล
        user_input_scaled = scaler.transform(user_input)
        prediction = decision_tree_model.predict(user_input_scaled)
        
        # แปลงค่ากลับเป็นชื่อกีฬา
        recommended_sport = label_encoder.inverse_transform(prediction)
        
        return {"Recommended Sport/Activity (Decision Tree)": recommended_sport[0]}
    
    except Exception as e:
        return {"error": str(e)}