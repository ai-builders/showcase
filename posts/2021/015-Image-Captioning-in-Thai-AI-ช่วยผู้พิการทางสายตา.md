---
date: "2021-07-18"
title: "Image Captioning in Thai: AI ช่วยผู้พิการทางสายตา"
builder: "Tawanrat Piriyalertsak (Jan)"
builder_info: "มัธยมศึกษาปีที่ 6 / กรุงเทพมหานคร"
thumbnail: "/images/2021/015/01.png"
links:
  github: "https://github.com/Jannyney/ImageCaptioningThai"
  facebook: "https://www.facebook.com/aibuildersx/posts/175053151329799"
  blog: "https://jannyney.medium.com/%E0%B8%A1%E0%B8%B2%E0%B8%97%E0%B8%B3-image-captioning-%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%84%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%9A%E0%B8%AD%E0%B8%94%E0%B8%81%E0%B8%B1%E0%B8%99-51cef2d1d15"
---

![Jan](/images/2021/015/01.png)

- ผู้พิการทางสายนั้นไม่อาจมองเห็น และ ก็ไม่สามารถรับรู้บรรยากาศที่มีอยู่ตรงหน้าได้ จึงเกิดความคิดว่าถ้ามีอะไรซักอย่างช่วยได้ก็คงจะดี
- AI Image Captioning เป็นส่วนหนึ่งของ Pipeline ทั้งหมดที่จะช่วยผู้พิการ โดย pipeline ทั้งหมดจะเป็น “การสั่งการด้วยเสียง” ให้โทรศัพท์ถ่ายภาพที่อยู่ข้างหน้า ทำการ “บรรยายภาพออกมาเป็นตัวอักษร” และ “แปลงตัวอักษรเป็นเสียง”
- Image captioning คือการ “บรรยายรูปภาพ ออกมาเป็นตัวอักษร”
- Architecture นั้นประกอบไปด้วยสามส่วน Encoder คือการแปลงรูปเป็น vector ของตัวเลข Decoder คือการสร้าง “ประโยค” จาก vector ของรูป และ Attention คือการบอกว่า decoder ควรสนใจตรงไหนของรูปภาพ
- ชุดข้อมูลนั้นเป็นการนำข้อมูล จากภาษาอังกฤษมาแปลงเป็นภาษาไทย โดยใช้ model TH-EN Machine Translation ของ AIResearch 
- การวัดผลนั้นใช้ BLEU Score ซึ่งใช้ในการอ้างอิงสำหรับการวัดผล BLEU-4 เฉลี่ยบน train+validation set ที่ 17.9*
- เพิ่มความแม่นยำโดยการเพิ่มภาพที่เทรน และ การบรรยาภาพให้ถูกต้องมาขึ้น (ตอนนี้มีปัญหามาจากการแปลด้วยบางส่วน)
- สิ่งที่อยากทำต่อไปคือ การนำไปต่อกับ Text-to-Speech เพื่อสร้างเป็น application สำหรับผู้พิการทางสายตา
*ทางผู้จัดทำวัด BLEU Score ใน train+validation set ทีหลัง เนื่องจากตอนทำไม่ได้เก็บไฟล์ที่แบ่งไว้ ดังนั้นค่าที่นี้ไม่สามารถใช้อ้างอิงได้

![Model Architecture](/images/2021/015/02.jpg)


![Attention Visualization](/images/2021/015/03.jpg)


![Results](/images/2021/015/04.jpg)

### แรงจูงใจในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 9 สัปดาห์ที่แล้ว)
> "หนูมีประสบการณ์ด้านการเขียนโปรแกรม Python, C, HTML, CSS และ Java ค่ะ ดังนั้นการต่อยอดไปเขียนโปรแกรมด้าน AI จะไม่เป็นปัญหาสำหรับหนูค่ะ หนูชนะการแข่งขันโครงการปัญญาประดิษฐ์โดยหนูทำเป็นแอพลิเคชั่นที่ใช้ AI และ AR ที่ช่วยเด็กออทิสติกค่ะ นอกจากนี้ หนูยังเข้าร่วมค่ายทางด้านคอมพิวเตอร์มากมายจากมหาวิทยาลัยต่างๆ และได้รับความรู้พื้นฐานด้านการทำ AI, Chatbot, IoT รวมถึงความรู้ด้าน Web Programming และ Blockchain ค่ะ ถ้าโครงการรับหนูเข้าโครงการ หนูจะตั้งใจฝึกฝนทักษะที่โครงการสอน และทำโปรเจคจนสำเร็จให้ได้ค่ะ"
> "เหตุผลแรกที่อยากเข้าโครงการนี้เลยก็คือ หนูมีความสนใจในด้านเทคโนโลยีอยู่แล้ว โดยเฉพาะด้าน AI หนูก็เลยคิดว่าโครงการนี้จะเปิดโอกาสให้หนูได้เรียนรู้และเข้าใจด้าน AI มากยิ่งขึ้นและเป็นการเตรียมตัวก่อนที่หนูจะได้เรียนอย่างจริงจังในมหาวิทยาลัยค่ะ เหตุผลที่สองก็คือ หนูอยากเรียนรู้ด้าน AI แบบลงมือปฏิบัติจริงค่ะ หนูเห็นว่าทางโครงการมีให้ทำ project จริงๆร่วมกับคนอื่นๆ ซึ่งหนูคิดว่ามันสำคัญมากค่ะ เพราะที่ผ่านมาส่วนใหญ่หนูได้เรียนรู้แต่ในด้านทฤษฎี ดังนั้นค่ายนี้จะให้หนูได้รับประสบการณ์ใหม่ๆ และยังได้รู้จักเพื่อนๆพี่ๆที่มีความสนใจด้านนี้เหมือนกันอีกด้วยค่ะ "