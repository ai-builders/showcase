---
date: "10-6-25"
title: "Aib5 Tomato Disease"
builder: "Witsanupong Kokakul"
builder_info: "-"
thumbnail: "/images/2025/12/01.png"
links:
    github: "https://github.com/itertius/AIB5-Tomato-Disease"
    facebook: ""
    blog: "https://medium.com/@iterrius_te/tomato-disease-classification-4ed88d076260"
---

![image](/images/2025/12/01.png)

- โมเดลจำแนกโรคในใบมะเขือเทศด้วย MobileNetV2
- ใช้ชุดข้อมูล PlantVillage Dataset ซึ่งเป็นภาพใบที่พื้นหลังเรียบและแสงที่ถูกควบคุม จำนวน 10 คลาส
- แก้ปัญหา Class Imbalance) โดยการใช้เทคนิค Data Augmentation เพื่อเพิ่มจำนวนภาพในแต่ละคลาสของชุดข้อมูลสำหรับ Train Set ให้เป็น 4,000 ภาพต่อคลาส ทำให้ Model เรียนรู้จากข้อมูลที่สมดุลมากขึ้น
- และเนื่องจากภาพจาก PlantVillage Dataset มีพื้นหลังที่เรียบ ไม่เหมือนสภาพแวดล้อมจริง ผู้จัดทำจึงได้นำภาพพื้นหลังเสมือนจริงมาใช้แทนที่ โดยใช้เทคนิค Edge Contour Detection เพื่อแยกใบมะเขือเทศออกจากพื้นหลังเดิม และนำภาพพื้นหลังจริงที่ได้จากการสกัดเฟรมจากวิดีโอเข้ามาผสม ทำให้ภาพที่ใช้ฝึก Model มีความหลากหลายและใกล้เคียงกับภาพในโลกจริงมากขึ้น
- Splits Dataset ออกเป็น 3 Set : Train, Valid, Test ที่ 25%, 25%, 50%
- ทำการฝึก Model ทั้งหมด 6 Versions โดยได้ผลว่า Model Version ที่ 6 มี Performance ที่ดีที่สุดบน Test Case ด้วย Accuracy 88%, Precision 0.88, Recall 0.86 และ F1-Score 0.87 ซึ่งสูงกว่า Baseline "มนุษย์" ที่มี Accuracy 83.33%
