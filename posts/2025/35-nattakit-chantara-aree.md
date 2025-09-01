---
date: "11-6-25"
title: "Aib5 Codesentinel"
builder: "Nattakit Chantara-Aree"
builder_info: "-"
thumbnail: "/images/2025/35/01.png"
links:
    github: "https://github.com/MartyNattakit/AIB5-CodeSentinel"
    facebook: ""
    blog: "https://medium.com/@martyxc2018/codesentinel-ai-cwe-classification-a3ed88f2be28"
---

![image](/images/2025/35/01.png)

- * โมเดลสำหรับการจำแนกประเภทของช่องโหว่ในโค้ด
- * ใช้ชุดข้อมูลจาก SARD Suite(Juliet Dataset) สำหรับการ Train โมเดลจำนวน 6 คลาส
- * แยกชุดข้อมูล ออกเป็น Train : Test ที่ 80% : 20%
- * ทำการฝึก Model ทั้งหมด 2 ครั้งโดยครั้งแรก (Accuracy : 99% (Overfiting)) มีการ data leakage เกิดขึ้นจึง Train/Test Split, เพิ่ม weight และ train ครั้งที่ 2 (Accuracy: 82.92%)
- Deploy: https://huggingface.co/spaces/martynattakit/CodeSentinel-CWE_Classification
