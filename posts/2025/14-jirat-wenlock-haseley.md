---
date: "10-6-25"
title: "Locklearn Chatbot2"
builder: "Jirat Wenlock Haseley"
builder_info: "-"
thumbnail: "/images/2025/14/01.png"
links:
    github: "https://github.com/Wenlock123/LockLearn-chatbot2/tree/main"
    facebook: ""
    blog: "https://medium.com/@whaseley9/ai-builders-กับ-locklearn-แชตบอท-life-coach-ที่เข้าใจและให้คำแนะนำได้เหมือนมีคนอยู่ข้างคุณ-caf0fa4f7d3d"
---

![image](/images/2025/14/01.png)

- LockLearn คือแชทบอทที่ไม่ใช่แค่ตอบคำถาม แต่ยังคอย “ให้คำปรึกษา” และ “ให้กำลังใจ” เหมือนโค้ชส่วนตัวที่เข้าใจคุณ
- โดยผมนำคำแนะนำจากหนังสือสร้างแรงบันดาลเเละให้คำเเนะนำ Awaken the Giant Within และ The 7 Habits of Highly Effective Teens มาย่อยเป็นคำแนะนำมากกว่า 7,000 รายการ พร้อมจัดหมวดหมู่เพื่อให้เข้ากับสถานการณ์ของแต่ละคน
- ใช้โมเดล paraphrase-multilingual-mpnet-base-v2 ในการ embed data เพื่อเก็บใน ChromaDB ซึ่งเป็น vector database จากนั้นก็ใช้ Retrieval-Augmented Generation (RAG) ดึงข้อมุลจาก vector database มาให้ LLM จาก LLaMA 4 Scout แล้วปรับคำพูดให้ดูอบอุ่นและให้กำลังใจกับ user
- โดยการวัดผล RAG ผมได้สร้าง evaluation dataset ทั้งภาษาอังกฤษและภาษาไทย มาเพื่อทดสอบ RAG โดยผมใช้ ค่า K=10 โดยได้ค่า Recall@K ออกมาที่ 0.659
