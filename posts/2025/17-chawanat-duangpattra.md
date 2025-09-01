---
date: "10-6-25"
title: "Plant Disease Classification"
builder: "Chawanat Duangpattra"
builder_info: "-"
thumbnail: "/images/2025/17/01.png"
links:
    github: "https://github.com/tle6000/plant-disease-classification"
    facebook: ""
    blog: "https://medium.com/@chawanat.0531/การทำนายโรคพืช-c1e7c08dff4f"
---

![image](/images/2025/17/01.png)

- Plant Disease Prediction from Leaf Images
- เนื่องจากการตรวจโรคพืชต้องใช้ผู้เชี่ยวชาญหรือค่าใช้จ่ายซึ่งใช้เวลาซึ่งอาจทำให้พืชตายได้จากโรคที่ไม่ได้รักษาทันเวลาจึงทำให้เกิด project นี้ขึ้น!!!!
- พัฒนาโมเดล AI ตรวจจับและจำแนกโรคพืชจากภาพใบ เพื่อช่วยเกษตรกรวินิจฉัยโรคได้ทันทีโดยไม่ต้องพึ่งผู้เชี่ยวชาญ
- ใช้ชุดข้อมูลรวม 35,973 ภาพจาก Kaggle เช่น PlantVillage, BananaLSD, Lettuce Diseases และอื่น ๆ ตัดคลาสที่มีภาพน้อยกว่า 100 ออก
- โมเดลพื้นฐานเริ่มจาก ResNet‑18 ได้ Recall ≈ 0.9396 และต่อยอดด้วยการใช้ Data Augmentation และทดลอง ResNet‑34, ResNet‑50
- โมเดลที่ดีที่สุดคือ ResNet‑50 พร้อม Augmentation ได้ recall ≈ 0.9866
- สร้างเว็บแอปด้วย Streamlit ให้ผู้ใช้ถ่ายหรืออัปโหลดภาพใบ ระบบจะแสดงชื่อโรคพร้อมความมั่นใจ
- 
- ทดลองใช้: https://plant-disease-classifications.streamlit.app/
- อ่านรายละเอียดเพิ่มเติม: https://medium.com/@chawanat.0531/การทำนายโรคพืช-c1e7c08dff4f
- GitHub repository: https://github.com/tle6000/plant-disease-classification
- 
- build by - Chawanat
