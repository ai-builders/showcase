---
date: "11-6-25"
title: "Aib5_Cassava_Kasetai"
builder: "Phatthanasak Kraiduang"
builder_info: "-"
thumbnail: "/images/2025/25/01.png"
links:
    github: "https://github.com/P-cy/AIB5_Cassava_KasetAI"
    facebook: ""
    blog: "https://medium.com/@Phatthanasak/cassava-kasetai-957d1b826aa6"
---

![image](/images/2025/25/01.png)

- ระบบช่วยวินิจฉัยโรคในมันสำปะหลังโดยการวิเคราะห์ภาพใบมันสำปะหลังรวมกับข้อมูลสภาพอากาศในท้องถิ่น เพื่อประเมินความเสี่ยงของโรค ด้วย Image Classification และ Deep Learning
- เกษตรกรต้องเจอปัญหาคือขาดความรู้ในการจำแนกและรักษาโรคมันสำปะหลัง ทำให้เกิดผลผลิตเสียหาย และราคามันสำปะหลังตกต่ำ ต้องเก็บผลผลิตให้ได้มากที่สุดโดยไม่ให้เสียจากโรค
- ใช้ Dataset จาก Kaggle มากกว่า 20,000 ภาพ ครอบคลุม 5 โรค ได้แก่ CBB, CBSD, CGM, CMD และ HEALTHY โดยแบ่งข้อมูลเป็น Train Set (โรคละ 700 รูป), Validation Set (โรคละ 70 รูป), Test Set (โรคละ 1,000 รูป) และยังไม่รวมกับ Pseudo-Data
- ใช้โมเดล Vision Transformer (ViT) ที่ Pretrained บน LAION-2B และ ImageNet ร่วมกับ Custom Layer ได้แก่ SEBlock, CrossStageAttention และ DynamicFeatureReducer
- ได้ผลลัพธ์ความแม่นยำ 92% ซึ่งดีกว่าการที่คนทั่วไปเดาโรคเอง
