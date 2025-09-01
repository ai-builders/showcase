---
date: "10-6-25"
title: "Wildfire Prediction.Git"
builder: "Janenatch Sukhato"
builder_info: "-"
thumbnail: "/images/2025/22/01.png"
links:
    github: "https://github.com/opjns/Wildfire-prediction.git"
    facebook: ""
    blog: "https://medium.com/@janenatchs/predicting-wildfires-using-machine-learning-520238558769"
---

![image](/images/2025/22/01.png)

- โมเดลพยากรณ์ความเสี่ยงของไฟป่าในแต่ละบริเวณโดยการวิเคราะห์ข้อมูลสภาพอากาศร่วมกับภาพถ่ายดาวเทียมจาก sentinel-2
- ได้รับแรงบันดาลใจจากไฟป่าในรัฐแคลิฟอร์เนียเมื่อต้นปี 2025
- ใช้ชุดข้อมูล Tabula จาก Kaggle เลือกมาทั้งหมด 20,000 rows ในส่วนของ image 25% ถ่ายจาก website Copernicus และอีก 75% ที่เหลือดาวน์โหลดมาจาก kaggle
- แบ่งอัตราส่วน train-valid-test split ที่ 70/15/15
- หลังจากลองเปรียบเทียบ Machine Learning Model ต่างๆ (Random Forest & xgboost) พบว่าโมเดลที่เทรนด้วย Random Forest ได้ accuracy, precision, recall ที่สูงที่กว่า
- Accuracy 0.93, Precision 0.925, Recall 0.925
- เอาโมเดลมาเปรียบเทียบกับ Baseline ที่สร้างขึ้นด้วยการใช้แนวคิดของ FWI(Fire Weather Index) พบว่าโมเดลมี accuracy สูงกว่า Baseline อยู่ 13%
