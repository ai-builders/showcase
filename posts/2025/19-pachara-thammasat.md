---
date: "10-6-25"
title: "Aib5_Emotion Classification"
builder: "Pachara Thammasat"
builder_info: "-"
thumbnail: "/images/2025/19/01.png"
links:
    github: "https://github.com/opsifiz/AIB5_Emotion-Classification"
    facebook: ""
    blog: "https://medium.com/@fifafayya/mental-health-sentiment-analysis-985f9901d906"
---

![image](/images/2025/19/01.png)

- * โมเดลการจำแนกอารมณ์โดยการปรับแต่งโมเดล distilbert-base-uncased จาก Hugging Face ด้วยเทคนิค Fine-Tuning
- * ใช้ชุดข้อมูลจาก Kaggle และ Hugging Face ในการ Train โมเดลจำนวน 9 คลาส
- * แก้ปัญหา Class Imbalance โดยการใช้เทคนิค Data Argmentation โดยตัวของ nlparg ในการเพิ่มคลาสที่ยังขาดให้กลายเป็น 10,000 ข้อความต่อคลาส เพื่อให้โมเดลเรียนรู้จากข้อมูลที่สมดุล
- * แยกชุดข้อมูล ออกเป็น Train : Test ที่ 80% : 20%
- * ทำการฝึก Model ทั้งหมด 2 ครั้งโดยการสร้างชุดข้อมูล 2 ชุด โดยชุดแรกมี 7 คลาส คลาสละ 15,000 ข้อความ (Accuracy : 73% | Overfiting) ชุดที่สองมี 9 คลาส คลาสละ 10,000 ข้อความ (Accuracy : 70%)
- Github : https://github.com/opsifiz/AIB5_Emotion-Classification
- Mudiem : https://medium.com/@fifafayya/mental-health-sentiment-analysis-985f9901d906
- Deploy : https://huggingface.co/spaces/Opsifiz/AIB5_Emotion-Classification
