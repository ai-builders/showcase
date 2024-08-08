---
date: "31-7-24"
title: "AniRec"
builder: "ธนภูมิ สายวงศ์อินทร์(อิคคิว)"
builder_info: "วิทยาศาสตร์จุฬาภรณราชวิทยาลัย เชียงราย / เชียงราย"
thumbnail: "/images/2024/6/01.png"
links:
    github: "https://github.com/qrcodeTH/Anime-Recognition-System-from-Scene-Images/tree/main"
    facebook: ""
    blog: "https://medium.com/@thanaphum04571/anime-recognition-system-from-scene-images-anirec-%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B8%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%8B%E0%B8%B5%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%B0-c0133dbbfaa9"
---

![image](/images/2024/6/01.png)

- สร้างโมเดล AniRec มาเพื่อแก้ปัญหาการตามหาชื่อเรื่องอนิเมะโดยใช้ภาพจากซีนในอนิเมะ
- การสร้าง AniRec นั้นจะแบ่งเป็นส่วนของการเทรน classification model และนำไปทำ feature extraction โดย match retrieved image กับ label และนำทั้ง classification และ retrieval มาเปรียบเทียบกัน
- ใช้ Dataset เป็น Top 100 Popularity Anime จาก Anilist โดยเลือกเฉพาะรูปที่เป็นซีนใน episode ต่าง ๆ
- นำข้อมูลทั้งหมดมาเข้ากระบวนการ Preprocessing ด้วยการทำ Data Tranformation ทั้งการ Resize, ToTensor, Normalize และ Data Augmentation รูปแบบต่าง ๆ
- ในส่วนของการเทรนได้ทดลองใช้สถาปัตยกรรม MobileNetV2 , Efficientnet-B0 , EFficientnet-B7 , ResNeXt101 และ SEResNeXt101
- วัดผลโดยการประเมิน Accuracy, Top-5 Accuracy , LRAP และ MRR
- โดยได้ผลออกมาคือ ResNeXt101 ทำ performance ออกได้ดีที่สุดบน Test set คือ Accuracy 81.18% Top-5 Accuracy 92.48% LRAP 86.24% และ MRR 85.75%
- จากนั้นจึงนำ ResNeXt101 มาทำ feature extraction โดยได้ match retrieved image กับ label ไว้ก่อนเพื่อนำมาใช้ในทำนาย label
- นำมา retrieve โดยใช้ similarity measurement เป็น Euclidean distance
- ทำการทดสอบการทำนายของ retrieval โดยได้ผลลัพธ์ดังนี้
- Accuracy 81.18% Top-5 Accuracy 91.84% LRAP 81.24% และ MRR 82.35%
- AniRec จึงเลือกใช้ Classification ResNeXt101 ซึ่งมี performance ที่ดีที่สุด
- โดยเมื่อนำไปเทียบกับ trace.moe ซึ่งเป็น Anime reverse search ที่มีชื่อเสียง โดยได้ทดสอบบน Test set เดียวกันได้ผลลัพธ์ดังนี้ Accuracy 67.40% และ Top-5 Accuracy 70.13%
- ซึ่งตัว AniRec ทำ Accuracy ได้ดีกว่า trace.moe ถึง 13.78% และ Top-5 Accuracy ดีกว่าถึง 22.35% แตว่าก็ยังแพ้ในจำนวนเรื่องของอนิเมะที่ค้นหาได้
- จาการวิเคราะห์ข้อผิดพลาดของตัว AniRec พบว่าโมเดลมักทำนายผิดพลาดเมื่อเจอซีนที่มีความคล้ายกัน ทั้งจากตัวประกอบที่อาจไม่มีข้อมูลใน Training Data และ องค์ประกอบของซีนที่บังเอิญคล้ายกันในอนิเมะหลาย ๆ เรื่อง


### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> เพราะว่าตัวผมอยากที่จะพัฒนาความรู้ทางด้าน ai ให้มากขึ้น แม้ว่าในตอนนี้เองก็กำลังศึกษาด้วยตัวเองอยู่ แต่การได้เข้าร่วมโครงการ ai builder ซึ่งเต็มไปด้วยวิทยากรที่มีความสามารถ อีกทั้งยังทำให้ตัวผมได้มีโอกาสได้พบเจอเพื่อนๆที่สนใจในด้านเดียวกัน ดังนั้นผมจึงเชื่อว่าการเข้าร่วมโครงการนี้นั้นจะทำให้ผมสามารถพัฒนาความรู้ด้าน ai และ ทักษะด้านการทำงานต่างๆ ได้เป็นอย่างดีครับ
    