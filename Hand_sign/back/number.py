import cv2
import numpy as np

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

def predict_number(model, image_path):
    """
    ทำนายตัวเลขจากภาพที่กำหนด โดยไม่ต้องโหลดโมเดลใหม่
    """
    input_image = preprocess_image(image_path)
    if input_image is None:
        return None

    # 📌 ทำนายผลลัพธ์
    prediction = model.predict(input_image)
    predicted_label = np.argmax(prediction)

    print(f"🎯 โมเดลคาดเดาว่าเลขในภาพคือ: {predicted_label}")
    return predicted_label