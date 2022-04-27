---
date: "2021-07-06"
title: "Lalita Chinese-Thai Machine Translation "
builder: "Lalita Deelert (Looktarn)"
builder_info: "มัธยมศึกษาปีที่ 3 / กรุงเทพมหานคร"
thumbnail: "/images/2021/003/01.jpg"
links:
  github: " https://github.com/LalitaDeelert/lalita-mt-zhth"
  facebook: "https://www.facebook.com/aibuildersx/posts/166736255494822"
  blog: "https://bit.ly/3hhVZWL"
---

![Looktarn](/images/2021/003/01.jpg)

- โมเดลแปลภาษาจีน-ไทยและไทย-จีน open source ที่มีประสิทธิภาพ 60-70% ของ Google Translate และดีกว่า AIforThai (xiaofan) ของ NECTEC อย่างน้อย 1 เท่าตัวในทุกทิศทางการแปล
- สร้างขึ้นเพื่อตอบโจทย์ปัญหาการเจรจาธุรกิจกับบริษัทจีนของที่บ้าน รวมถึงตัวน้องลูกตาลเองก็สามารถสื่อสารภาษาจีนได้ในระดับดีมาก ทำให้มองเห็นช่องว่างของการแปลภาษาจากบริการแปลภาษาไทย-จีนทั่วไป
- ความท้าทายคือข้อมูลคู่ประโยคไทย-จีนที่เป็นชุดข้อมูลเปิดมีน้อยมาก (<1 ล้านคู่ประโยค) เมื่อเทียบกับภาษาอังกฤษ (>4 ล้านคู่ประโยค)
- เทรนด้วยสถาปัตยกรรม 6-layer transformer ตามแบบ MarianMT
- สร้างกฎการทำความสะอาดข้อมูลเองทั้งหมดด้วย 1. ความคล้ายกันของประโยคโดยใช้ multilingual universal sentence encoder 2. อัตราส่วนจำนวนคำ/ตัวอักษรของทั้งสองภาษาในคู่ประโยคเดียวกัน 3. ทำความสะอาดคู่ประโยคที่ไม่ใช่ภาษาที่ต้องการ เช่น ประโยคที่ควรเป็นภาษาจีนแต่ข้อมูลเป็นภาษาอังกฤษ
- ใช้ความรู้ภาษาจีนระดับสูงให้เป็นประโยชน์ในการคัดเลือกว่า threshold ใดจะตัดคู่ประโยคไหนออก-จะเก็บคู่ประโยคไหนไว้
- สร้างตัวตัดคำย่อด้วย sentencepiece (unigram model) เพื่อตัดคำทั้งไทยและจีนพร้อมกัน (shared vocabulary)
- ข้อมูลเทรนจาก OPUS และข้อมูลที่แปลอังกฤษเป็นจีน (backtranslation) ของ scb-mt-en-th-2020 (เดิมเป็นไทย-อังกฤษ) รวม 5 ล้านประโยค (หลังทำความสะอาดแล้ว)
- เลือกโมเดลที่ดีที่สุดจาก validation set 5 หมื่นประโยค
- ทดสอบผลบนข้อมูล TED2021 v1 จำนวน 1,226 คู่ประโยค; ไม่ใช้ข้อมูลจาก TED2021 v1 ในการเทรนโมเดลเลยเพื่อให้ยุติธรรมกับโมเดลอื่นๆที่นำมาเปรียบเทียบ
- วัดผลโดย BLEU score ได้คะแนน 60-70% ของ Google Cloud Translate API [https://cloud.google.com/translate/](https://cloud.google.com/translate/) และคะแนนสูงกว่า AIforThai (xiaofan;[https://aiforthai.in.th/aiplatform/#/dashboard](https://aiforthai.in.th/aiplatform/#/dashboard)) ของ NECTEC อย่างน้อย 1 เท่า (zh->th) และอย่างมาก 10 เท่า (th->zh)
- ข้อจำกัดของโมเดลในปัจจุบันคือการแปลคำเฉพาะได้ไม่ดีเท่า Google Translate เช่น "โรงเรียนสวนกุหลาบ" lalita-mt จะแปลว่า 玫瑰花园学校 (โรงเรียนสวนกุหลาบ; นามทั่วไป) ในขณะที่ Google Translate แปลว่า 苏安库拉布学校 (โรเงเรียนซูอันคู้ลาปู้; นามเฉพาะ)
- Test set ที่ใช้บางครั้งไม่ได้แปลได้คุณภาพนัก เนื่องจากมาจาก crowdsourcing
- ตั้งเป้าชนะ Google Translate ให้ได้ภายในสิ้นปี ด้วยการหาชุดข้อมูลเพิ่มและปรับปรุงโมเดล
- รางวัลขวัญใจกรรมการจากความเป็นไปได้อย่างมหาศาลในการใช้งานในอนาคตอันใกล้ของโมเดล
- ใช้โมเดลได้ฟรี (cc-by-sa 4.0) ได้ที่ HuggingFace [https://huggingface.co/lalita](https://huggingface.co/lalita); ในขณะที่ Google Cloud Translate API มีค่าใช้จ่าย $20 ต่อ 5M ตัวอักษร
- วิธีการเทรนโมเดลสามารถปรับใช้ได้กับทุกคู่ภาษา; เป็นไปได้ที่จะใช้ข้อมูล open datasets ทำโมเดลแปลภาษาไทย-ภาษาอะไรก็ได้ที่มีประสิทธิภาพเท่าเทียมกับโมเดลนี้
- ทดลองเล่นได้ทั้งจาก webapp บน Heroku (รันบน CPU ของ free-tier) หรือ notebook
- อย่าลืมติดตามช่อง YouTube ของน้องลูกตาลได้ที่ MakeCode for Kids [https://www.youtube.com/channel/UC_N5_4YR3tPwoPMoQ2BTndQ](https://www.youtube.com/channel/UC_N5_4YR3tPwoPMoQ2BTndQ) หรือ FB Page [https://www.facebook.com/makecodeforkid](https://www.facebook.com/makecodeforkid)
- น้องลูกตาลยังทำ MakeCode for Kids เป็น Facebook Page  [https://www.facebook.com/makecodeforkid](https://www.facebook.com/makecodeforkid) และ Youtube Channel [https://www.youtube.com/channel/UC_N5_4YR3tPwoPMoQ2BTndQ](https://www.youtube.com/channel/UC_N5_4YR3tPwoPMoQ2BTndQ) สำหรับน้องๆ ชั้นประถมหรือผู้ปกครองที่สนใจการเขียนโปรแกรมและปัญญาประดิษฐ์ ผู้ที่สนใจสามารถไปติดตามกันได้ น้องลูกตาลฝากมาบอกว่ามีคำถามอะไรก็ถามได้เลยครับ

![Project Results](/images/2021/003/02.jpg)


![Results Comparison](/images/2021/003/03.jpg)


![Hugging Face Deployment](/images/2021/003/04.jpg)


### แรงจูงใจในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 9 สัปดาห์ที่แล้ว)

>"หนูมีความสนใจโครงการนี้ เนื่องจากหนูกำลังศึกษาหาความรู้ทางด้านนี้อยู่ก่อนหน้านี้ ตั้งแต่ประถม ก็เริ่มฝึกเรียนโปรแกรม เริ่มจากภาษา C และได้มีโอกาสไปแข่งขันหุ่นยนต์ ตามรายการต่างๆ  ทั้งในประเทศและต่างประเทศ [https://www.facebook.com/lalitaportfolio](https://www.facebook.com/lalitaportfolio) จนเข้าศึกษามัธยมปีที่ 2 ก็เริ่มสนใจทางด้าน AI และได้เริ่มต้นศึกษา ภาษา Python และหาความรู้ทางด้านนี้ ความตั้งใจส่วนหนึ่ง คือ อยากให้ น้องๆ ตั้งแต่ระดับประถม สามารถเข้าถึง ความรู้ทางด้าน robot และ AI ให้ได้มากขึ้น ผ่านการเรียนรู้ในรูปแบบง่ายๆ เลยได้ทำ page facebook ที่เกี่ยวกับการ coding และ AI page MakeCode for Kids [https://www.facebook.com/makecodeforkid](https://www.facebook.com/makecodeforkid)"
>"หนูได้มีการเริ่มต้นใช้โปรแกรม AI Machine Learning แบบสำเร็จรูปมาใช้ซึ่งทำให้หนูอยากที่จะเรียนรู้การทำงานแบบที่ใช้งานกันจริงๆ ในอนาคตเพื่อให้เข้าใจ-มีความรู้ทางด้านนี้ และมีแนวทางในการศึกษาต่อทางด้านนี้"