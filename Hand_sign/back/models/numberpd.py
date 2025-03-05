import tkinter as tk
from tkinter import filedialog

import cv2
import matplotlib.pyplot as plt
import numpy as np
from tensorflow.keras.models import load_model

# 📌 โหลดโมเดลจากไฟล์ .h5
model = load_model("digit_classifier.h5")  # ใช้พาธที่ตรงกับไฟล์โมเดลของคุณ
print("✅ โมเดลถูกโหลดสำเร็จ!")

# 📌 ใช้ tkinter เพื่อเลือกไฟล์ภาพจากเครื่อง
root = tk.Tk()
root.withdraw()  # ซ่อนหน้าต่างหลัก
image_path = filedialog.askopenfilename(title="เลือกภาพที่ต้องการพยากรณ์")

if not image_path:
    print("❌ ไม่ได้เลือกไฟล์")
    exit()

print(f"✅ รูปที่เลือก: {image_path}")

# 📌 โหลดและแปลงภาพให้อยู่ในรูปแบบที่โมเดลต้องการ
def preprocess_image(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)  # โหลดเป็นขาวดำ
    img = cv2.resize(img, (28, 28))  # Resize เป็น 28x28
    img = img / 255.0  # Normalize 0-1
    img = np.expand_dims(img, axis=0)  # เพิ่ม batch dimension (1, 28, 28)
    img = np.expand_dims(img, axis=-1)  # เพิ่มช่องสีให้เป็น (1, 28, 28, 1)
    return img

import tkinter as tk
from tkinter import filedialog

import cv2
import matplotlib.pyplot as plt
# 📌 แปลงภาพให้พร้อมใช้งานfrom tensorflow.keras.models import load_model
import numpy as np

# 📌 โหลดโมเดลจากไฟล์ .h5
model = load_model("./digit_classifier.h5")  # ใช้พาธที่ตรงกับไฟล์โมเดลของคุณ
print("✅ โมเดลถูกโหลดสำเร็จ!")

# 📌 ใช้ tkinter เพื่อเลือกไฟล์ภาพจากเครื่อง
root = tk.Tk()
root.withdraw()  # ซ่อนหน้าต่างหลัก
image_path = filedialog.askopenfilename(title="เลือกภาพที่ต้องการพยากรณ์")

if not image_path:
    print("❌ ไม่ได้เลือกไฟล์")
    exit()

print(f"✅ รูปที่เลือก: {image_path}")

# 📌 โหลดและแปลงภาพให้อยู่ในรูปแบบที่โมเดลต้องการ
def preprocess_image(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)  # โหลดเป็นขาวดำ
    img = cv2.resize(img, (28, 28))  # Resize เป็น 28x28
    img = img / 255.0  # Normalize 0-1
    img = np.expand_dims(img, axis=0)  # เพิ่ม batch dimension (1, 28, 28)
    img = np.expand_dims(img, axis=-1)  # เพิ่มช่องสีให้เป็น (1, 28, 28, 1)
    return img

# 📌 แปลงภาพให้พร้อมใช้งาน
input_image = preprocess_image(image_path)

# 📌 แสดงภาพที่ใช้ทดสอบ
plt.imshow(input_image[0, :, :, 0], cmap="gray")
plt.title("🔍 รูปที่ใช้ทดสอบ")
plt.axis("off")
plt.show()

# 📌 ทำนายผลลัพธ์
prediction = model.predict(input_image)

# 📌 หาหมายเลขที่โมเดลคาดเดามากที่สุด
predicted_label = np.argmax(prediction)

# 📌 แสดงผลลัพธ์
print(f"🎯 โมเดลคาดเดาว่าเลขในภาพคือ: {predicted_label}")
import tkinter as tk
from tkinter import filedialog

import cv2
import matplotlib.pyplot as plt
import numpy as np
from tensorflow.keras.models import load_model

# 📌 โหลดโมเดลจากไฟล์ .h5
model = load_model("digit_classifier.h5")  # ใช้พาธที่ตรงกับไฟล์โมเดลของคุณ
print("✅ โมเดลถูกโหลดสำเร็จ!")

# 📌 ใช้ tkinter เพื่อเลือกไฟล์ภาพจากเครื่อง
root = tk.Tk()
root.withdraw()  # ซ่อนหน้าต่างหลัก
image_path = filedialog.askopenfilename(title="เลือกภาพที่ต้องการพยากรณ์")

if not image_path:
    print("❌ ไม่ได้เลือกไฟล์")
    exit()

print(f"✅ รูปที่เลือก: {image_path}")

# 📌 โหลดและแปลงภาพให้อยู่ในรูปแบบที่โมเดลต้องการ
def preprocess_image(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)  # โหลดเป็นขาวดำ
    img = cv2.resize(img, (28, 28))  # Resize เป็น 28x28
    img = img / 255.0  # Normalize 0-1
    img = np.expand_dims(img, axis=0)  # เพิ่ม batch dimension (1, 28, 28)
    img = np.expand_dims(img, axis=-1)  # เพิ่มช่องสีให้เป็น (1, 28, 28, 1)
    return img

# 📌 แปลงภาพให้พร้อมใช้งาน
input_image = preprocess_image(image_path)

# 📌 แสดงภาพที่ใช้ทดสอบ
plt.imshow(input_image[0, :, :, 0], cmap="gray")
plt.title("🔍 รูปที่ใช้ทดสอบ")
plt.axis("off")
plt.show()

# 📌 ทำนายผลลัพธ์
prediction = model.predict(input_image)

# 📌 หาหมายเลขที่โมเดลคาดเดามากที่สุด
predicted_label = np.argmax(prediction)

# 📌 แสดงผลลัพธ์
print(f"🎯 โมเดลคาดเดาว่าเลขในภาพคือ: {predicted_label}")
input_image = preprocess_image(image_path)

# 📌 แสดงภาพที่ใช้ทดสอบ
plt.imshow(input_image[0, :, :, 0], cmap="gray")
plt.title("🔍 รูปที่ใช้ทดสอบ")
plt.axis("off")
plt.show()

# 📌 ทำนายผลลัพธ์
prediction = model.predict(input_image)

# 📌 หาหมายเลขที่โมเดลคาดเดามากที่สุด
predicted_label = np.argmax(prediction)

# 📌 แสดงผลลัพธ์
print(f"🎯 โมเดลคาดเดาว่าเลขในภาพคือ: {predicted_label}")