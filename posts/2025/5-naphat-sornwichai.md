---
date: "10-6-25"
title: "Surgicare Alb"
builder: "Naphat Sornwichai"
builder_info: "-"
thumbnail: "/images/2025/5/01.png"
links:
    github: "https://github.com/PogusTheWhisper/Surgicare-ALB"
    facebook: ""
    blog: "https://medium.com/@naphatsorn.contact/surgicare-wound-analysis-and-initial-care-system-with-ai-74c6a83cbe14"
---

![image](/images/2025/5/01.png)

- #AIBuilders Showcase Series: SurgiCare AI ระบบช่วยวิเคราะห์และดูแลบาดแผลเบื้องต้นด้วย AI (Wound analysis and initial care system)
- ⠀
- พัฒนาโมเดล Machine learning เพื่อจำแนกประเภทของแผล เช่น แผลถลอก, แผลมีดบาด, แผลน้ำร้อนลวก แล้วทำการถอดคุณลักษณะของแผลเช่น ความลึก, กว้าง, สี, การตกสเก็ด, ลักษณะภายนอกแล้วให้ Large Language Model ประเมินผล
- ⠀
- ใช้ Dataset จาก Kaggle แล้วมาทำการ Augments เช่น RandomRotation, flip, crop จากนั้นเพิ่มเติมด้วย Data จาก internet ที่คัดแยกด้วยคน
- ⠀
- ใช้วิธี WeightedRandomSampler แทนการทำ Down sampling, Up sampling เนื่องด้วยจำนวนของ data ที่น้อยทำให้ไม่สามารถ augment ภาพซ้ำๆได้
- ⠀
- ใช้วิธี Early Stopping ดูค่า Validation Loss  เพื่อประหยัดทรัพยากรและโอการการเกิด Overfitting
- ⠀
- ทดสอบ train กับโมเดล 36 โมเดลเพื่อหา baseline โดยโมเดลที่ดีที่สุดคือ efficientnet_b3_pretrained ค่า accuracy อยู่ที่ 0.95 และ f1_macro อยู่ที่ 0.94
- ⠀
- ปรับแต่ง augment ให้มีความหลากหลายมากขึ้น และทดลองสร้าง Sequential โมเดลด้วยการใช้ efficientnet_v2_l เป็น backbone เผื่อทำ feature extraction และสร้างส่วน classify เอง
- ⠀
- ใช้ Focal Loss และ Label Smoothing สำหรับ Loss Function เพื่อแก้ปัญหากับ class imbalance และช่วยป้องกัน overfitting
- ⠀
- ใช้ CosineAnnealing สำหรับ Learning Rate ที่เป็นการให้ Learnning rate กระโดดค่าขึ้นลงไปมา เพื่อลดโอกาศที่โมเดลจะติดอยู่ที่จุด Local minimum และแก้ปัญหา lr ไม่ลงไปที่จุด Global minimum
- ⠀
- Train ด้วยการทำ K-fold Validation โดยผลลัพท์ของ fold ที่ดีที่สุดอยู่ที่ accuracy อยู่ที่ 0.9685 และ f1_macro อยู่ที่ 0.9419
- ⠀
- แปลงโมเดลเป็น Onnx เพื่อเพิ่มความเร็วและลดขนาด
- ⠀
- สร้าง Web Application สาธิตด้วย Streamlit โดยสามารถทดสอบด้วยการ upload รูปหรือใช้ภาพตัวอย่างเพื่อทดสอบระบบได้
- ⠀
- Demo: https://surgicare-alb-demo.streamlit.app/
- บทความ Medium: https://medium.com/@naphatsorn.contact/surgicare-wound-analysis-and-initial-care-system-with-ai-74c6a83cbe14
- GitHub Repository : https://github.com/PogusTheWhisper/Surgicare-ALB
