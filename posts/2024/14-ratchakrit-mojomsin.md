---
date: "31-7-24"
title: "CCTV Anomaly Detection"
builder: "รัชกฤช โมจมสิน(โอ๊ค)"
builder_info: "ยุพราชวิทยาลัย / เชียงใหม่"
thumbnail: "/images/2024/14/01.jpg"
links:
	github: "https://github.com/ratchy-oak/CCTV_Anomaly_Detection"
	facebook: ""
	blog: "https://medium.com/@ratchy-oak/%EF%B8%8F-%EF%B8%8F-cctv-anomaly-detection-1545f7bbbe93"
---

![image](/images/2024/14/01.jpg)

- ด้วยปัญหาความสะเพร่าในการตรวจจับสิ่งผิดปกติจากภาพกล้องวงจรปิดในปัจจุบัน การแก้ปัญหาด้วยการทำ Machine Learning model เพื่อให้การจำแนกเหตุการณ์ผิดปกติต่าง ๆ นั้นทำได้ง่ายและแม่นยำยิ่งขึ้น
- รวบรวมข้อมูลจากชุดข้อมูล “Real Time Anomaly Detection in CCTV Surveillance” บนเว็บไซต์ kaggle โดยจะคัดเลือกจากเหตุการณ์ที่พบเจอได้บ่อยครั้ง
- Clean Data ด้วยการสุ่มตัวอย่าง frame จากแต่ละช่วงของวิดีโอในจำนวนที่เท่ากันและนำมาประกอบกันหรือ Data Sampling เพื่อให้แต่ละไฟล์วิดีโอมีขนาดที่เท่ากัน แต่ยังคงสาระสำคัญที่เราต้องการไว้
- เลือกใช้ Pre-trained model อย่าง ViViT มา fine-tune กับชุดข้อมูลที่เก็บรวบรวมมาโดยได้ผล Accuracy อยู่ที่ 95% และ F1 Score ประมาณ 0.94
- ใช้ Streamlit ในการทำ Web application และ Deploy โมเดลที่สามารถ Classification วิดีโอจากกล้องวงจรปิดได้
- จากแบบทดสอบการจำแนกเหตุการณ์จากภาพกล้องวงจรปิด เมื่อนำรูปภาพในแบบทดสอบให้ตัวโมเดล Machine Learning ที่มีความแม่นยำ 95% ทำนายผลแล้ว ปรากฎว่าตัวโมเดลนั้นทำนายเหตุการณ์ได้ถูกหมดในทุก ๆ ข้อ

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> ผมเป็นนักเรียนโครงการห้องเรียน พสวท. (สู่ความเป็นเลิศ) ศูนย์โรงเรียนยุพราชวิทยาลัย จังหวัดเชียงใหม่ ผมมีความสนใจทำโครงงานที่มีการประยุกต์ใช้ความรู้ทางคณิตศาสตร์และความรู้ทางเทคโนโลยีในการแก้ปัญหาในชีวิตประจำวัน หรือปัญหาในชุมชน ที่สามารถนำไปใช้แก้ปัญหาได้จริง จากข่าวสารและการสำรวจพื้นที่จริง<br>จากเหตุผลดังกล่าวทำให้ผมมีความสนใจในการเข้าร่วมโครงการ ai builders เพื่อสร้างผลงานโดยใช้เทคนิคทางด้านวิทยาศาสตร์ข้อมูล (data science) และปัญญาประดิษฐ์ (artificial intelligence)
    