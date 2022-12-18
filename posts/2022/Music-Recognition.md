---
date: "10-7-22"
title: "Music Recognition"
builder: "นนทพรรษ วงษ์กัณหา (นน)"
builder_info: ""
thumbnail: "/images/2022/30/01.jpg"
links:
    github: "https://github.com/Nonnyss/Ms-Wav2Vec2-Finetune"
    facebook: "https://facebook.com/aibuildersx/posts/411804267654685"
    blog: "https://medium.com/@nonthapan.wong/music-recognition-a6c9acea23e1"
---

![image](/images/2022/30/01.jpg)

- โมเดลถอดเสียงเนื้อเพลงภาษาไทย แรงบันดาลใจการเป็นคนที่ชอบฟังเพลง 🎶 แต่บางทีนึกชื่อเพลงไม่ออก จำได้แต่เนื้อเพลงบางท่อน หรือแม้กระทั่งเวลาไปคาเฟ่ ☕ ที่เปิดเพลงเพราะๆ ก็มักจะไม่รู้ว่าเพลงนั้นเป็นเพลงอะไร (ขี้อายไม่กล้าถามพนักงาน🥲),
- เริ่มจากใช้ Wav2Vec2 ภาษาไทยเป็น baseline; โมเดลอาจทำได้ดีในบทสนทนาทั่วไป (speech-to-text) แต่ผลงานในการถอดเสียงเพลงไม่ดีนัก (sing-to-text) ทั้งจากการร้องสดและคลิปเพลง,
- ใช้ข้อมูล 40 เพลงบน YouTube ตามยอดคนฟังเป็นความยาว 2.5 ชั่วโมง,
- ทำความสะอาดด้วยการแยกเสียงเครื่องดนตรีจากเนื้อร้อง, ตัดเป็นคลิปเสียงคลิปละ 2-6 วินาทีด้วย Adobe Audition, คัดเนื้อร้องที่เป็นภาษาอังกฤษออก, และทำความสะอาดเครื่องหมายต่างๆ เช่น `จนผ่านวันร้ายๆ` ➜ `จนผ่านวันร้ายร้าย`; พบปัญหา เช่น เสียงร้องกลืนเข้าไปกับ BGM, เสียงคอรัสร้องหลายเนื้อร้องในเวลาเดียวกัน เป็นต้น ทำการคัดเลือกออก**ด้วยมือ**,
- พบปัญหาเนื้อเพลงที่เป็นข้อความไม่ตรงกับเสียง; แก้ปัญหาด้วยการตัดมือแบ่งกับปืน เพื่อนในโครงการ,
- เสียงมาจากนักร้องชาย 28 คน นักร้องหญิง 12 คน; แบ่ง train-validation-test เป็น 80:10:10,
- มีข้อสังเกตว่าโมเดลที่ถูกเทรนบนเสียงนักร้องมืออาชีพจะสามารถถอดความเสียงมือสมัครเล่นที่ร้องเพี้ยนได้หรือเปล่า อาจจะพัฒนาเป็นโมเดลจับคนร้องเพี้ยนต่อไป,
- ใช้ airesearch/wav2vec2-large-xlsr-53-th ที่ถูกเทรนบน Common Voice 7 เป็นโมเดลพื้นฐาน,
- วัดผลด้วย WER (ตัดคำด้วย newmm ของ PyThaiNLP) และ CER; ทำได้ดีกว่า airesearch/wav2vec2-large-xlsr-53-th ประมาณ 3-4 เท่าบน test set

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> "เป็นคนที่มีความรู้ความชื่นชอบทางด้านคณิตศาสตร์เป็นอย่างมาก คณิตศาสตร์ถือเป็นวิชาที่ถนัดที่สุดสำหรับผม เป็นคนที่ถ้าได้ตั้งใจทำอะไรบางอย่างแล้วก็จะทุ่มเทให้กับสิ่งนั้น แบบ มี 100 ให้ 100 ไปเลย, มีผลงานที่เป็นผลจากความทุ่มเทอยู่บ้างเช่น การแข่งหุ่นยนตร์ รายการ wrg , สพฐ 9ล9 และกิจกรรมการเข้าร่วมกับค่าย ที่เกี่ยวกับคอมพิวเตอร์และเทคโนโลยีต่างๆ, มีเวลา พร้อมที่จะสละให้กับโครงการนี้อย่างเต็มที่, มีความสามารถเข้ากับคนอื่นได้ง่าย, และมีความสนใจในปัญญาปัญญาประดิษฐ์!  อยากเข้าเพราะ ตั้งแต่ที่ได้เห็นพัฒนาการของเทคโนโลยีตั้งแต่เด็ก จนถึงปัจุบันที่สิ่งต่างๆเติบโตขึ้นเร็วมาก มีสิ่งใหม่ๆออกมาให้เราเห็นทุกวัน ทุกอย่างทั้งน่าตื่นเต้น และน่าสนใจ จนเราเอง ก็อยากเป็นคนที่ได้ร่วมพัฒนาสิ่งเหล่านั้นแหละเติบโตไปพร้อมกับมัน แต่เนื่องจากผมไม่ได้มีประสบการณ์ในด้านนี้มาก มีแต่ความตั้งใจและความรู้ทางด้านคณิตศาสตร์ โครงการนี้จึง "สำคัญกับผม" ที่จะทำให้ผมได้เริ่มต้นเส้นทางนี้อย่างจริงจัง! และจะเป็นอีกหนึ่งประสบการณ์ที่จะช่วยต่อยอดการทำโครงงานจบ และการเรียนต่อมหาลัยในอาคต  อีกทั้ง เรื่องความดูแลเอาใจใส่ที่มีมาให้ตั้งแต่ยังไม่ได้ร่วมโครงการเลยด้วยซ้ำ เช่นเรื่อง Pre-course Workhop เพื่อปรับพื้นฐาน, ตารางการเรียนที่ชัดเจนจริงจัง, แบบทดสอบที่มีมาให้ม รุ่นพี่ที่ผ่านโครงการนี้มาปีที่แล้ว ก็มีแต่ผลงานเจ๋งๆ มีคุณภาพ ออกมา แบบนี้ใครจะไม่อยากเข้าร่วมโครงการนี้ครับ!! ผลงานแบบนี้ต้องมี mentor และ TA เก่งๆคอยให้คำแนะนำแน่นอน! :) ขอบคุณครับ  อยากทำ ai ที่ ช่วยเราหา "เพลง" เพื่อแก้ปัญหา => เวลาที่จำได้แค่ทำนองเพลง หรือถึงจำเนื้อร้องได้ แต่เนื้อร้องดันเป็นภาษาอะไรก็ไม่รู้ ทำให้เรารู้สึกหงุดหงิด คิดไม่ออกสักทีว่า เพลงที่ร้องแบบนี้มันชื่อเพลงอะไรนะ!?? มีรูปแบบการทำงานคร่าวๆ เริ่มต้นที่ รับข้อมูลเสียง(เสียงทำนอง,เสียงร้อง) > ai ประมวลผล > แสดงเพลงที่ประมวลผลได้ออกมาให้ผู้ใช้ ใช้ชุดข้อมูล จำพวก เนื้อเพลง และ เสียงเพลง มาจาก kaggle"