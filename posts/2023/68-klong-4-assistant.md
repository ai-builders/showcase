---
    date: "31-7-24"
    title: "Klong 4 Assistant: เช็คฉันทลักษณ์และช่วยแต่งโคลงสี่สุภาพ"
    builder: "Thanravee Kamhaengplon"
    builder_info: "มัธยมศึกษาปีที่ 4 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/68/01.jpg"
    links:
        github: "https://github.com/ThanraveeK/Klong-4-Assistant"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid02QovhzPrmaK1E185q2Kbh36KS21V2MJGzWPRHkrBrRvaUfUDAReXmuvNpVgHAWnCyl"
        blog: "https://medium.com/@tkamhaengplon/klong-4-assistant-%E0%B9%80%E0%B8%8A%E0%B9%87%E0%B8%84%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B9%82%E0%B8%84%E0%B8%A5%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%9E-f5c1390f16a4"
---

![image](/images/2023/68/01.jpg)

- โมเดลแต่งโคลงสี่สุภาพด้วย large language model (XGLM, WangchanGLM) และโค้ดเช็คฉันทลักษณ์ที่พัฒนาร่วมกับ [@kangkengkhadev](https://github.com/kangkengkhadev) และ [@HRNPH](https://github.com/HRNPH) จนเป็นตัวเช็คฉันทลักษณ์ได้ทั้งโคลงสี่สุภาพและกลอนแปดใน pythainlp.khavee
- Scrape ข้อมูลโคลงสี่สุภาพจาก https://vajirayana.org/ ทั้งหมด 5 เรื่อง ได้แก่ โคลงโลกนิติ โคลงนิราศหริภุญชัย โคลงเจ้าฟ้าอภัยนิราศสุพรรณ และนิราศวัดรวก ด้วย BeautifulSoup รวมทั้งหมด 1,326 บท ในรูปแบบไฟล์ csv
- เริ่มจากการทำ full finetuning ด้วย facebook/xglm-564M เพื่อทดลองอย่างรวดเร็ว พบว่าโมเดลสามารถเขียน "ภาษาโคลง" ออกมาได้ แต่ไม่ตรงฉันทลักษณ์
- เช็คฉันทลักษณ์ด้วย rule-based function ประกอบด้วย เช็คจำนวนพยางค์ในหนึ่งวรรค เช็คคำเอกคำโท และเช็คสัมผัสบังคับ
- เมื่อถึงเวลาแต่งโคลง บังคับให้ language model เลือก subword เฉพาะที่ตรงฉันทลักษณ์จาก rule-based function ข้างต้นเท่านั้น
- วัดผลโดยการไปเอาวรรคแรกของโคลงจากพันทิปมาแล้วแต่งแข่งกับโมเดลด้วยตัวเอง แล้วให้คนตัดสินผู้ตอบแบบสอบถามคิดว่าโคลงของโมเดลดีกว่า 52 จาก 100 คำตอบ
- จากการวิเคราะห์พบว่าโมเดลมักจะได้คะแนนเมื่อเทียบกับการแต่งด้วยคนโดยใช้ภาษาสมัยใหม่ แต่ก็ยังมีความผิดพลาดอยู่เล็กน้อยเช่นกัน
- นำวิธีการเดียวกันไปใช้กับโมเดลWangChanGLM เพื่อให้ได้การแต่งโคลงที่เนียนขึ้น
- เป็นส่วนหนึ่งของโครงการ AIBxNWMRSW2 (โรงเรียนนวมินทราชินูทิศสตรีวิทยา 2)

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> เมื่อไม่กี่เดือนที่แล้วหนูยังเป็นแค่เด็กคนนึงที่รับความรู้แค่ในห้องเรียน เรียนตามหลักสูตรที่ครูสอน และคิดว่าการเขียนโปรแกรมมันง่าย(ได้ยังไงนะ?) แต่ AI Builders ก็เป็นโอกาสและจุดเปลี่ยนในชีวิตครั้งใหญ่ของหนู ช่วยเปิดโลกการเขียนโปรแกรม เทคนิค และความรู้ใหม่ๆได้ลองทำโปรเจกต์ครั้งแรก และได้ก้าวสู่โลกของการเขียนโปรแกรมแบบเต็มตัวแล้ว YAY!แล้วทำไมต้องเป็น Klong 4 Assistant ล่ะ? ก่อนหน้านี้หนูได้มีโอกาสเป็นตัวแทนไปแข่งแต่งคำประพันธ์ แล้วก็รู้สึกว่าการแต่งโคลงสี่มันยาก และโคลงสี่ก็อยู่ในหลักสูตรภาษาไทยของม.4 ด้วย เลยเป็นไอเดียให้โปรเจกต์นี้เกิดขึ้นมาค่ะและที่สำคัญ การได้ทำโปรเจกต์นี้ให้สำเร็จทำให้หนูได้เรียนรู้อะไรหลายๆอย่าง ที่ในห้องเรียนไม่สามารถสอนหนูได้ ได้รู้สึกชอบและสนุกกับการเขียนโปรแกรมไปอีกขั้น ได้พัฒนาตัวเองในหลายๆด้าน และต้องขอขอบคุณพี่ไกด์ พี่ชารินทร์ และพี่ๆหลายๆคนที่ได้มอบโอกาส และได้ให้ความช่วยเหลือตลอดการทำโปรเจกต์จนสำเร็จค่ะ