---
date: "10-6-25"
title: "Phishing_Email_Content_With_Personalize_Context_Data_Generation"
builder: "Shitiphat Soysangwarn"
builder_info: "-"
thumbnail: "/images/2025/15/01.png"
links:
    github: "https://github.com/KamiK4M1/Phishing_Email_Content_with_Personalize_Context_Data_Generation"
    facebook: ""
    blog: "https://medium.com/@k4m1.kxm1/phishing-email-content-with-personalized-context-data-generation-f17c6b4cd819"
---

![image](/images/2025/15/01.png)

- โมเดลสร้างเนื้อหา Phishing Email ที่มีความสมจริงและเฉพาะบุคคลโดยใช้ LLM
- แรงบันดาลใจคือในปัจจุบันการหลอกลวงผ่าน Phishing Email มีแนวโน้มเพิ่มสูงขึ้น แต่การทดสอบพนักงานในองค์กรด้วยอีเมลที่สร้างขึ้นมักจะดูออกง่ายเกินไป ทำให้วัดผลการตระหนักรู้ของพนักงานได้ไม่ดีพอ
- สำหรับเทคนิค RAG ได้ใช้ชุดข้อมูล Phishing Email Open Source จาก Hugging Face และ Kaggle ส่วนการ Finetune ได้ใช้วิธีสังเคราะห์ข้อมูล (Synthetic Data) ขึ้นมาใหม่จำนวน 2,800 ตัวอย่างในรูปแบบ Alpaca format โดยใช้โมเดลอย่าง GPT-4.1, Llama3.3 70B, Gemini 1.5 Flash
- ประเมินคุณภาพของ Phishing Email ที่สร้างขึ้นโดยใช้โมเดลจำแนกประเภท (Classification Model) 3 ตัวที่ถูกเทรนมาเพื่อตรวจจับ Phishing โดยค่า Accuracy ในการตรวจจับที่ต่ำกว่าหมายถึงโมเดลสามารถสร้างอีเมลได้แนบเนียนกว่า
- แม้ Llama3.1 8B ที่ใช้เทคนิค RAG จะให้ผลลัพธ์ที่ดีที่สุดในเชิงตัวเลข แต่โมเดลสุดท้ายที่ถูกเลือกคือ **Qwen3 0.6B ที่ผ่านการ Finetune** เนื่องจากมีขนาดเล็กกว่ามาก เหมาะสมกับการนำไปใช้งานจริง (Deployment) และสามารถสร้างเนื้อหาที่สมดุลระหว่างความสมจริงและความยากง่ายในการตรวจจับได้ดีกว่า
