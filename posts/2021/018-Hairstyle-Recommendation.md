---
date: "2021-07-21"
title: "Hairstyle Recommendation"
builder: "Varisa Techapisut (Fye)"
builder_info: "มัธยมศึกษาปีที่ 4 / กรุงเทพมหานคร"
thumbnail: "/images/2021/018/01.jpg"
links:
  github: "https://github.com/ivel160/Hairstyle-recommend"
  facebook: "https://www.facebook.com/aibuildersx/posts/177096974458750"
  blog: "https://medium.com/@fyevarisa/เมื่อให้-ai-ช่วยแนะนำทรงผม-bf518bae5f84"
---

![Fye](/images/2021/018/01.jpg)

- “ทรงผมแบบไหนที่เหมาะกับเรา” เป็นคำถามที่หาคำตอบไม่ได้จนกว่าจะได้ลองทำ ถ้าทำแล้วออกมาดีก็ไม่มีปัญหา แต่ถ้าทำแล้วไม่ถูกใจก็แก้ไขลำบากต้องทนอยู่กับความรู้สึกแย่ ๆ และไม่มั่นใจในตัวเอง
- มันคงจะดีถ้า AI จะช่วยเราคิดว่าโครงหน้าแบบเราทำผมแบบไหนถึงจะเข้า โดยที่แค่ใส่รูปตัวเองเข้าไป โปรแกรมก็จะแนะนำทรงผมให้เราทันที ถ้าไม่พอใจก็เลือกทรงใหม่ได้ 
- เริ่มด้วยการสร้างโมเดล Image Classification เพื่อแยกรูปหน้า เนื่องจากทรงผมที่เหมาะสมจะขึ้นอยู่กับโครงหน้าของเรานั้นเอง 
- จากนั้นเราสร้างโมเดลแยกรูปหน้าด้วย Tabular Learner ของ fastai โดย feature ที่ใช้คือ Facial Landmark   บนใบหน้า บวกกับการทำ feature engineering เพิ่มเติม
- เมื่อระบบแยกได้ว่ารูปหน้าของเราเป็นแบบไหน ก็จะเลือกผมทรงต่าง ๆ จากดาราที่มีโครงหน้าเดียวกันมาให้เลือก 
- การพัฒนาขั้นต่อไป จะพัฒนาระบบ recommendation ให้ดียิ่งขึ้นโดยใช้หลัก collaborative filtering และใช้ StyleGAN เพื่อใส่ทรงผมที่แนะนำบนหน้าของผู้ใช้เอง

![Face labels](/images/2021/018/02.png)


![Exploratory Data Analysis](/images/2021/018/03.png)


![Result](/images/2021/018/04.png)

### แรงจูงใจในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 9 สัปดาห์ที่แล้ว)

> "ฉันอยู่ในช่วงที่กำลังค้นหาสิ่งที่ชอบและถนัด ฉันเริ่มจากการศึกษาค้นคว้าเกี่ยวกับสิ่งที่ตัวเองสนใจ และฉันสนใจเรื่อง Machine Learning และ AI ซึ่งได้แรงบันดาลใจจากการดูซีรีส์เรื่อง Start-Up ฉันเห็นว่า AI ใช้ประโยชน์ได้เยอะมากและจะมีความสำคัญอย่างมากในอนาคต จึงอยากเรียนรู้และลองทำโปรเจกต์ในด้านนี้ค่ะ"
> "ฉันอยากเข้าโครงการนี้มากเพราะเป็นโอกาสที่ดีให้ฉันได้เรียนรู้และปฏิบัติในสิ่งที่ฉันชอบและสนใจ ฉันเริ่มสนใจเกี่ยวกับคอมพิวเตอร์และการเขียนโปรแกรมตั้งแต่ได้เข้าค่ายสอวน. คอมพิวเตอร์ และฉันได้แรงบันดาลใจอย่างมากในการทำโปรเจกต์เกี่ยวกับ AI หลังจากที่ฉันดูเรื่อง Start-Up แต่ฉันยังมีความรู้ไม่มากพอและไม่รู้จักแหล่งหาความรู้ ฉันคิดว่าการมี mentor จะช่วยให้ฉันสามารถทำโปรเจกต์ได้อย่างประสบความสำเร็จ ฉันจึงหวังอย่างยิ่งว่าฉันจะได้รับเข้าโครงการนี้ค่ะ"