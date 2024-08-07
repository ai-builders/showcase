---
date: "31-7-24"
title: "Snake classifier"
builder: "ฐาปวีย์ ศรีจันทอง(ส้มโอ)"
builder_info: "ขอนแก่นวิทยายน / ขอนแก่น"
thumbnail: "/images/2024/19/01.png"
links:
    github: "https://github.com/Sxm-O/AI-Builders"
    facebook: ""
    blog: "https://medium.com/@2sthapawee/snake-classification-0c800ddda6a3"
---

![image](/images/2024/19/01.png)

- โมเดลจำแนกชนิดงู 13 ชนิดที่พบบ่อยในประเทศไทย และมีพิษไม่มีพิษ ด้วย resnet-34 model โดยใช้ไลบารี่ PyTorch
- รวบรวมข้อมูลรูปภาพจาก Duckduckgo image search API ชนิดละ 100 รูป รวมรูปทั้งหมดอยู่ที่ประมาณ 1300 ภาพ  และทำความสะอาดข้อมูลด้วยโค้ดและตาเปล่า 
- แบ่งข้อมูล train:validation:test เป็นสัดส่วน 70:20:10
- ลองเทรนโมเดลจำนวน 100 epochs ด้วย resnet-34 และ MobileNet พบว่า resnet-34 มีความแม่นย่ำถึง 94 % เมื่อเทียบกับโมเดล MobileNet ที่มีความแม่นย่ำ 75 %
- ยังพบปัญหาโมเดลมักทำนายผิดระหว่างงูเห่ากับงูจงอาง เนื่องจากงูมีลักษณะที่คล้ายกันมาก โมเดลของเรานั้นไม่โฟกัสลักษณะของงูทั้งสองดีพอเลยหรือไปโฟกัสกับbackground มากกว่าลักษณะที่สำคัญของงูแต่ละชนิด จึงทำให้predictผิดบ่อย หรือเรียกว่า shortcut learning ทั้งนี้ทั้งนั้นปัญหานี้สามารถแก้ด้วย การเพิ่มชุดข้อมูลให้มากขึ้น,Contrastive Learning, ชุดข้อมูลที่หลากหลายและสมดุล (Diverse and Balanced Dataset)และอื่นๆ

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> หนูได้เห็นว่าค่ายนี้เป็นค่ายที่ดีสำหรับนักเรียน มีการสอนและพาทำโปรเจคจากสิ่งที่เราสนใจและยังสามารถนำโปรเจคไปใช้ประโยชน์ได้อีกด้วย โครงการนี้ช่วยฝึกนักเรียนในการวิเคราะห์ข้อมูล การสร้างai การเขียนโค้ดด้วย หนูจึงคิดว่าถ้าได้ร่วมโครงการนี้จะทำให้หนูมีศักยภาพที่ดีมากขึ้นไม่ว่าจะเป็นการเขียนโปรแกรมภาษาpython การหาdatasetที่สามารถใช้ได้ และอีกทั้งสามารถสร้างaiได้ด้วยตัวเอง และอยากที่จะเรียนรู้เพิ่มเติมเกี่ยวกับai เพื่อเข้าใจมากขึ้นในบางสิ่งที่ไม่เคยรู้หรือยังไม่เข้าใจดีพอและสามารถทำและพัฒนาโปรเจคที่เป็นไปได้และเป็นประโยชน์ต่อสังคมและชุมชน
    