---
date: "31-7-24"
title: "Song2MIDI"
builder: "ชญานนท์ พรหมชัยยะ(โบ๊ท)"
builder_info: "ยุพราชวิทยาลัย / เชียงใหม่"
thumbnail: "/images/2024/29/01.png"
links:
    github: "https://github.com/Boatkungg/song2midi/"
    facebook: ""
    blog: "https://medium.com/@Boatkungg/my-failed-attempt-of-making-song2midi-a39710132de2"
---

![image](/images/2024/29/01.png)

-โมเดลสร้าง cover piano จาก เพลง
-ชุดข้อมูลจำนวน 800 เพลง แบ่ง train 80 validation 20
-preprocess เพลงให้เป็น mel-scale spectrogram และ tokenize midi event ด้วย BPE (Byte-Pair Encoding) และ REMI (REvamped MIDI-derived events)
-encoder input คือ mel-scale spectrogram
-decoder output คือ midi event
-เทรนโดยใช้โมเดล Reformer Encoder Decoder โดยจะมี vocab_size 50265, dim_model 128, 8 heads และ 6 layers แบบ teacher forcing 
-ใช้ BLEU score ในการวัดผล
-เนื่องจากใช้เพลงทั้งเพลงในการเทรนทำให้ loss ลดลงเรื่อยๆ แต่ช้า และทำให้ใช้เวลาในการเทรนนานขึ้น (13 นาที ต่อ 1 epoch @ batch size 4)
- Average BLEU score จากการ validation ล่าสุดคือ 10%
- Average loss จากการจากการ validation ล่าสุดคือ 3.18

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> ผมเป็นคนชื่นชอบการเขียนโปรแกรมมาตั้งแต่สมัยผมอยู่โรงเรียนประถมจากวิชาคอมพิวเตอร์ในโรงเรียนผมเลยได้ศึกษาการเขียนโปรแกรมมาตั้งแต่ตอนนั้น จนผมขึ้น ม.1 ตอนนั้นเป็นช่วง covid-19 กำลังเริ่มระบาด ผมก็ได้เห็นหุ่นยนต์ ai ในอินเตอร์เน็ต ผมรู้สึกชอบมากจึงได้เริ่มศึกษาเกี่ยวกับ ai ด้วยตนเองมาตั้งแต่ตอนนั้นแต่ก็ยังได้แค่แบบง่ายๆ จนตอนผมอยู่ ม.2 ผมได้รู้จักกับรุ่นพี่ในโรงเรียนและพี่ก็แนะนำโครงการ ai builders นี้มา ผมจึงได้ลองสมัครแต่ก็ไม่ได้รับการคัดเลือก ครั้งนี้ผมจึงมาสมัครอีกครั้งเพราะผมอยากเรียนรู้เกี่ยวกับ ai และประสบการณ์ในการทำโครงงาน เพื่อที่ผมจะได้สามารถนำความรู้และประสบการณ์จากการเข้าร่วมโครงการเหล่านี้มาใช้ในการพัฒนา ai ในโครงงานต่างๆ
    