---
date: "11-6-25"
title: "Movemate AI Physical Therapy Coach"
builder: "Jiraphat Punthsang"
builder_info: "-"
thumbnail: "/images/2025/36/01.png"
links:
    github: "https://github.com/Jiraphat-code/Movemate-AI-Physical-Therapy-Coach"
    facebook: ""
    blog: "https://medium.com/@jiraphatpunthsang/movemate-your-ai-powered-rehab-companion-at-home-c5d39855642d"
---

![image](/images/2025/36/01.png)

- MoveMate — Your AI Rehab Companion at Home
- AI ผู้ช่วยในการทำกายภาพบำบัดที่บ้าน ช่วยแก้ปัญหาgapระหว่างนักกายกับผู้ป่วย เมื่อต้องให้ผู้ป่วยทำกายภาพเองที่บ้าน
- Random Forest  Classifier จำแนกความถูกต้องของการทำท่ากายภาพ
- ใช้ Keypoints จาก Mediapipe เป็น feature ให้โมเดล
- แบ่งเป็น 5 Class :1 Normal and 4 Abnormal --> ‘normal’ ปกติ, ‘elbow_bent’ ข้อศอกพับ , ‘mix_abduction’ แขนเอียง, ‘neck_tilt’ ขยับคอ และ ‘trunk_twist’บิดลำตัว
- เก็บข้อมูลTrain Test โดยนักกายภาพจริงๆทุกท่า โดยเก็บ Class ละ 100 reps
- แบ่งเป็น Train: Test คือ 4:1
- Validate ด้วยคลิปวีดีโอที่ถ่ายตัวเองทำท่ากายภาพ class ต่างๆ จำนวน class ละ 40 reps
- Experiment with 3 different training feature : raw keypoint, filtered keypoint and filtered+add distance&angle
- ใน 3 experiments : feature ที่ model ได้performance ดีสุดคือ กรองค่า visibility จาก mediapipe + add ระยะห่าง&องศาระหว่างข้อต่อ วิธีนี้ได้ accuracy ที่ 0.44 เทียบกับ raw keypoint 0.37 บนโมเดลเดียวกัน
- โมเดล random forest ได้ accuracy มากสุดที่ 0.44 เทียบ linear regression 0.24 บน  filtered+add distance&angle keypoints
- โมเดลยังoverfitting ไม่ generalize เนื่องจากคิดว่าเป็นข้อจำกัดของ ML frame by frame ควรลองใช้ DL เช่น LSTM ที่ประมวลผลจาก sequence data
- อีกปัจจัยที่ overfitting คือ validate set เป็นการอัดคลิปตัวเองทำท่ากายภาพทั้งท่าถูกและผิด ซึ่งการจะเลียนแบบท่าผิดให้เหมือนนั้นต้องใช้คนที่มีประสบการณ์เช่น นักกายภาพ ดังนั้น data จากวีดีโอที่เอามา validate จึงมีจุดที่ไม่ถูกด้วย ส่งผลให้โมเดลซึ่งเรียนรู้จากdata นักกายภาพจึงไม่ generalize
- ทดลองใช้ที่ https://movemate-ai-physical-therapy-coach.streamlit.app/
