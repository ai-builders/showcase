---
date: "11-6-25"
title: "Salmon_Trout_Classification"
builder: "Suteetida Piyajongwiwatana"
builder_info: "-"
thumbnail: "/images/2025/31/01.png"
links:
    github: "https://github.com/hana-piyajong/Salmon_Trout_classification"
    facebook: ""
    blog: "https://medium.com/@hana.piyajong/salmon-trout-classificaion-8a22d4fc2280"
---

![image](/images/2025/31/01.png)

- Salmon and Trout classification
- ระบบจำแนกเนื้อปลาแซลมอนและปลาเทราต์ด้วยโมเดลปัญญาประดิษฐ์
- ปัญหา - ปลาแซลมอนและปลาเทราต์มีลักษณะที่คล้ายกันมาก ต่างกันที่โทนสีของเนื้อปลาและลายไขมันที่มีความแตกต่างกันเพียงเล็กน้อย ทำให้การจำแนปลาสองชนิดนี้ด้วยตาเปล่าทำได้ยาก ซึ่งเป็นที่มาของโปรเจกต์นี้ ที่พัฒนามาเพื่อแก้ไขปัญหานี้
- ชุดข้อมูล (Dataset) - รวบรวมภาพเนื้อปลาแซลมอนและปลาเทราต์จากหลายแหล่ง ได้แก่ อินเทอร์เน็ต, ถ่ายภาพจาก Makro, และซื้อปลาเพื่อนำมาแล่เอง โดยแบ่งข้อมูลเป็น
- Train-Validation set จำนวน 181 ภาพต่อ class
- Test set จำนวน 20 ภาพต่อ class
- วิธีการฝึกโมเดล - ใช้โมเดล ResNet34 ในการฝึก และใช้เทคนิค k-fold cross-validation เพื่อลดปัญหา overfitting โดยแบ่งข้อมูลฝึกและตรวจสอบออกเป็น 5 fold สลับกันเป็น train และ validation ในแต่ละรอบ ในแต่ละรอบ แบ่ง validation เป็น 20% ของข้อมูล และทำ data augmentation กับ train set เพื่อเพิ่มความหลากหลายของข้อมูล
- การประเมินผล - ใช้ test set ในการวัดประสิทธิภาพของโมเดลหลังจากฝึกในแต่ละ fold โมเดลที่พัฒนามีความแม่นยำสูงถึง 80% และกำหนด Human Baseline โดยการการเก็บข้อมูลจากแบบฟอร์มในกลุ่ม Facebook “ตามหาปลาแซลมอน (Salmon)” ซึ่งได้ความแม่นยำเพียง 43%
- ทดลองใช้ได้ที่: https://salmon-trout-classification.streamlit.app/
- GitHub repository: https://github.com/hana-piyajong/Salmon_Trout_classification
- อ่านรายละเอียดเพิ่มเติม: https://medium.com/@hana.piyajong/salmon-trout-classificaion-8a22d4fc2280
