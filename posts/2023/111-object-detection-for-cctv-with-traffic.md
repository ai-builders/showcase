---
    date: "31-7-24"
    title: "Object detection for CCTV with traffic"
    builder: "Kontuch Suksawat"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- สงขลา"
    thumbnail: "/images/2023/111/01.jpg"
    links:
        github: "https://github.com/Fishcanwalk/object-detection-for-CCTV-with-traffic"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid02hf2fwfUMhKkYpAAMVJ8bjwC3LRZezCvKsMzkTg2vuWKJmiB53YxMBp7LCEhF5AcMl"
        blog: "https://medium.com/@zeroxr20/object-detection-for-cctv-with-traffic-77149a8e4cd4"
---

![image](/images/2023/111/01.jpg)

- โมเดลตรวจจับวัตถุเพื่อตรวจว่าผู้ขับขี่จักรยานยนต์ 1) ใส่หมวกกันน็อคหรือไม่ 2) ซ้อนสามหรือไม่ ด้วยสถาปัตยกรรมYolov8n และ Yolov8x
- เลือก n และ x จาก Yolov8 ทุกแบบเนื่องจากmodel n มีความเร็วมากกว่าตัว model x เพราะเป็นmodelขนาดเล็กกว่าแต่ model x แม่นยำมากกว่า model n เพราะเป็นmodel ที่ขนาดใหญ่กว่า
- เก็บข้อมูลครั้งแรกจากจาก Roboflow universe และ ก็นำมากำกับ ใน Roboflow; Test: 42 รูป (10.6%) / Train : 324 รูป (81.81%) / Valid: 30 รูป (7.5%)
- เก็บข้อมูลครั้งที่ 2 เพิ่มหมวด “ไม่ได้ขับขี่จักรยานยนต์” เข้าไปด้วยเพื่อให้โมเดลใช้ได้ทั่วไปยิ่งขึ้น; โมเดลมีประสิทธิภาพใกล้เคียงกับของเดิม
- ข้อสังเกตของการทำงานผิดพลาดได้แก่ 1) หมวกกันน็อคอาจจะตรวจจับผิดเพราะโมเดลเห็น บางทรงผม (หรือคนไม่มีผม)เป็นหมวกกันน็อคได้หรือจะเป็นผมสีดำเหมือนหมวกกันน็อค 2) โมเดลตรวจจับการซ้อนสามได้ยากกว่าการใส่หมวก คาดว่าน่าจะเป็นการซ้อนทับกันของคนขับไม่ก็จะเป็นซ้อนทับกันของคนขับรถบางมุม 3) มุมกล้องและแสงที่ไม่หลากหลายพอส่งผลต่อประสิทธิภาพของโมเดล

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> เหตุผลที่ผมอยากจะเข้าร่วมโครงการ  ai builders เนื่องจากตัวผมนั้นอยากพัฒนาความสามารถทางด้านการเขียนโปรแกรมทางด้านภาษาpython และผมยังอยากเรียนรู้เกี่ยวกับการ data cleansing หรือจะเป็นการหารูปจากเว็บต่างๆอย่างการ web scrapingและ ผมยังอยากลองสร้าง ai ด้วยตัวเองด้วย เนื่องจาก ai เป็น เทคโนโลยีค่อนข้างใหม่ ผมจึงอยากเรียนรู้วิธีต่างๆในการสร้าง ai หรือ สิ่งต่างๆเกี่ยวกับai เช่น ai มีกี่ประเภท หรือ ai เเต่ละประเภทใช้งานยังไง หรือ ใช้ทำงานแบบไหนได้บ้างเหตุผลที่ควรรับผมเข้าโครงการ เนื่องจากในอนาคตนั้นผมอยากเป็นโปรแกรมเมอร์ ผมจึงคิดว่าการศีกษาวิธีการทำ หรือ สิ่งต่างๆเกี่ยวกับai เป็นสิ่งที่ควรเรียนรู้เพราะปัจจุบันเริ่มมีการใช้ai อย่างแพร่หลายมาก และผมอยากจะลองสร้าง ai เป็นของตัวเอง ผมจึงตัดสินใจเข้าร่วมโครงการ ai builder ผมคิดว่าการเรียนรู้สิ่งใหม่ๆเป็นเรื่องสำคัญไม่ว่าจะได้ใช้ประโยชน์จากมันหรือไม่ได้ใช้ก็ตามการมีความรู้มากกว่าเดิมคือการพัฒนาตนเก่งให้เก่งยิ่งขึ้นกว่าเดิม
    