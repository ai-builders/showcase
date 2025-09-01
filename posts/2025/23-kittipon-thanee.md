---
date: "11-6-25"
title: "Chordcrafter"
builder: "Kittipon Thanee"
builder_info: "-"
thumbnail: "/images/2025/23/01.png"
links:
    github: "https://github.com/namo5758/ChordCrafter"
    facebook: ""
    blog: "https://medium.com/@kittiponpon760/chordcrafter-ai-chord-generator-1079b3752a8e"
---

![image](/images/2025/23/01.png)

- สร้างโมเดล GPT-2 สำหรับแนะนำคอร์ดถัดไป ช่วยนักแต่งเพลงต่อคอร์ดได้ลื่นไหลและอยู่ในคีย์
- ใช้ Dataset Chordonomicon (660,000+ ชุดคอร์ด) ทำความสะอาดข้อมูลและเพิ่ม token <eos>
- แปลงคอร์ดเป็น token ทั้งหมด 4,264 คำ ใช้ GPT-2 (124M) ย่อ positional embedding เหลือ 128
- เทรน 3 epochs ได้ loss = 0.8735
- สร้าง baseline ด้วย Bigram + Laplace smoothing
- วัดผลด้วย 8 metrics → GPT-2 ชนะเกือบทุกด้าน (Top-K, PPL, Key Consistency) ยกเว้นความหลากหลายของคอร์ด (CHE)
- สรุป: GPT-2 ต่อคอร์ดได้ดี ลื่น และแม่นคีย์ แต่ยังขาดความหลากหลายของคอร์ดเล็กน้อย
