---
date: "10-6-25"
title: "Aib25 Fake Profile Account Detection"
builder: "Bhanya Wongpetchvichean"
builder_info: "-"
thumbnail: "/images/2025/13/01.png"
links:
    github: "https://github.com/Bhanya/AIB25-Fake-Profile-Account-Detection"
    facebook: ""
    blog: "https://medium.com/@bhanyawong/ai-builders-fake-social-media-account-detection-on-x-and-instagram-666390015a5b"
---

![image](/images/2025/13/01.png)

- Fake Instagram account detector using tabular data
- ใช้ข้อมูลจาก Kaggle ประมาณ 5,000 sample หลัง clean และ preprocess เหลือ 4,934 ตัวอย่าง (fake 2,458 | real 2,476)
- สร้าง feature ใหม่อย่าง follow/following ratio และแก้ปัญหา feature ที่มีข้อมูล skewed โดยใช้ log transformation
- เทรนโมเดลด้วย Supervised Learning (มี label เป็น real กับ fake) โดยมี data splits: Train 70%, Validation 15%, Test 15%
- เปรียบเทียบผลของ model Logistics regression กับ Lightgbm บน validation set ผลที่ได้คือ Logistic Regression (96%) กับ LightGBM (99%) → เลือกใช้ LightGBM
- คิดว่า dataset ที่หามาค่อนข้างมี pattern ที่จับทางได้ง่ายและ sample อาจจะมีพฤติกรรมที่ไม่สะท้อนกับ account ปลอมในปัจจุบัน เลยหา dataset มาเพิ่มด้วยตัวเอง 100 sample (fake 50 | real 50) และ split เป็น extra train 50% กับ extra test 50% แต่ละ split จะมี fake 25 และ real 25
- เมื่อทดสอบโมเดล LightGBM เดิมบน extra-test  accuracy ลดเหลือ 94% แต่หลัง fine-tune ด้วยข้อมูลใหม่ accuracy เพิ่มขึ้นเป็น 98%
- เปรียบเทียบกับ accuracy ของ baseline (XGBoost) บน extra test แล้ว LightGBM ดีกว่า 4%
- X/IG Profile Detector (Image Classification)
- ใช้ dataset จาก Hugging face เป็นรูปโปรไฟล์จาก X (Twitter) แบ่งเป็น 4 คลาส: real, bot, cyborg, verified (สุดท้ายตัด verified ออกเพราะมีเครื่องหมาย verified ที่มองเห็นได้ด้วยตาเปล่าจึงไม่มีความจำเป็นที่ต้อง classify)
- Data splits: train ~66.67%, valid ~6.67%, test ~26.67%
- ใช้ model resnet18
- Performance ของ model resnet18 มี accuracy อยู่ที่ 99.7% บน test set
- วัดผลของ model โดยการเทียบกับ model ของคนที่เคยใช้ Dataset นี้ทำโปรเจ็กมาก่อน ผลที่ได้คือ model resnet18 มีความแม่นยำสูงกว่า แต่ model SigLip2 (baseline) มีความน่าเชื่อถือมากกว่าในแง่ของการทดสอบกับจำนวน sample ที่มากกว่า (ใช้ dataset เดียวกันแต่จำนวน sample ที่ใช้ test ไม่เท่ากัน SigLip2 = 10,000 | resnet18 ~3000)
- ลองนำ model resnet50 ไป fine-tune ต่อด้วย IG screenshot (60 รูป) ที่เก็บมาเอง เพื่อให้สามารถที่จะพอใช้งานกับ profile Instagram ได้ในอนาคต
- ก่อน fine-tune → accuracy = 50% หลัง fine-tune → accuracy = 85%
- ทดลองใช้ได้ที่: https://fake-profile-account-detection.streamlit.app/#ai-builders-2025-fake-social-media-account-profile-detection
- อ่านรายละเอียดเพิ่มเติม:https://medium.com/@bhanyawong/ai-builders-fake-social-media-account-detection-on-x-and-instagram-666390015a5b
- GitHub Repository: https://github.com/Bhanya/AIB25-Fake-Profile-Account-Detection
