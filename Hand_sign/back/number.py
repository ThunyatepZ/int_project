import cv2
import numpy as np
from tensorflow.keras.models import load_model

# 📌 โหลดโมเดลจากไฟล์ .h5
MODEL_PATH = "Models/digit_classifier.h5"  # แก้ให้เป็น path ของคุณ
model = load_model(MODEL_PATH)
print("✅ โมเดลถูกโหลดสำเร็จ!")

def preprocess_image(image_path):
    """
    โหลดและแปลงภาพให้เป็นรูปแบบที่โมเดลต้องการ
    """
    try:
        img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)  # โหลดเป็นขาวดำ
        if img is None:
            raise ValueError("❌ ไม่สามารถโหลดภาพได้")

        img = cv2.resize(img, (28, 28))  # Resize เป็น 28x28
        img = img / 255.0  # Normalize ค่าให้อยู่ในช่วง 0-1
        img = np.expand_dims(img, axis=(0, -1))  # เพิ่ม batch และ channel dimension
        return img
    except Exception as e:
        print(f"❌ Error: {e}")
        return None

def predict_number(image_path):
    """
    ทำนายตัวเลขจากภาพที่กำหนด
    """
    input_image = preprocess_image(image_path)
    if input_image is None:
        return None

    # 📌 ไม่ต้องแสดงภาพที่ใช้ทดสอบ
    # plt.imshow(input_image[0, :, :, 0], cmap="gray")
    # plt.title("🔍 รูปที่ใช้ทดสอบ")
    # plt.axis("off")
    # plt.show()

    # 📌 ทำนายผลลัพธ์
    prediction = model.predict(input_image)
    predicted_label = np.argmax(prediction)

    print(f"🎯 โมเดลคาดเดาว่าเลขในภาพคือ: {predicted_label}")
    return predicted_label

if __name__ == "__main__":
    import tkinter as tk
    from tkinter import filedialog

    # 📌 ใช้ tkinter เพื่อเลือกไฟล์ภาพจากเครื่อง
    root = tk.Tk()
    root.withdraw()  # ซ่อนหน้าต่างหลัก
    image_path = filedialog.askopenfilename(title="เลือกภาพที่ต้องการพยากรณ์")

    if image_path:
        predict_number(image_path)
    else:
        print("❌ ไม่ได้เลือกไฟล์")