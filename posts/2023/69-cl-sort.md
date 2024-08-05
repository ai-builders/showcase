---
    date: "31-7-24"
    title: "CL_sort เพื่อนช่วยจัดไฟล์ที่คุณตามหา!?"
    builder: "Surapot Sangasap"
    builder_info: "มัธยมศึกษาปีที่ 5 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/69/01.jpg"
    links:
        github: "https://github.com/NopeN0t/CL_sort"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid0uHd2S11VWFAbJ5GK1J3V7RrtrUfQsMwxpBCSMZPu9XtnAj7rCsykrn7fDBhLhFNUl"
        blog: "https://medium.com/@top7748/cl-sort-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%B2-thai-version-58d43426b93e"
---

![image](/images/2023/69/01.jpg)
    
- โมเดลจัดไฟล์เอกสาร (pdf, docx, doc, odt, png, jpg, jepg และ txt) ให้เป็นหมวดหมู่ด้วย multilingual universal sentence encoder; สามารถนำไปใช้จริงได้ในเครื่องตัวเองผ่าน command line
- เริ่มจากการที่มีไฟล์งานอยู่จำนวนมากแล้วเวลาที่ต้องการที่จะกลับมาแก้งานหรือมาดูเป็นตัวอย่างผมมักจะหาไฟล์ไม่เจอหรือใช้เวลานานมากโดย ทำให้อยากทำโปรแกรมที่ช่วยในการจัดไฟล์พวกนี้ให้ผมจะได้ไม้ต้องพลิกแผ่นดินหาไฟล์งานไฟล์เดียวอีก
- วิธีการทำงานคือให้เลือก sample files ของแต่ละหมวดหมู่ที่ต้องการจัด หลังจากนั้นโมเดลจะทำการหาความคล้ายคลึงกันของทุก file ใน folder ที่กำลังจัดระเบียบกับ sample files ในแต่ละหมวด
- เริ่มแรกใช้ข้อมูล 1,066 ไฟล์จาก 15 หมวดเอกสารราชการในการทดสอบ; แต่เนื่องจากบางหมวดหมู่มีเอกสารน้อยเกินไปจึงตัดเหลือเพียง 6 หมวดหมู่และทำความสะอาดเพิ่มเติมจนเหลือ 456 ไฟล์ ทำให้ความแม่นยำของการจัดหมวดหมู่เพิ่มขึ้นจาก 30% เป็น 52%
- ต่อมาพบว่ามี 2 หมวดหมู่ที่ประเภทเอกสารใกลกันเกินไปจึงรวมเป็นหมวดหมู่ energy ทำให้ได้ความแม่นยำ 59%
- ทดลองวัดผลด้วยการจัดไฟล์เองในฐานะมนุษย์มีความแม่นยำสูงกว่าโมเดลที่ 68% แต่ใช้เวลาถึง 14 นาที เทียบกับโมเดลที่ใช้เพียง 1 นาที; อาจสรุปได้ว่าโมเดลสามารถช่วยทุ่นแรงในการจัดไฟล์ได้ แม้จะยังไม่แม่นยำเท่ามนุษย์
- เป็นส่วนหนึ่งของโครงการ AIBxNWMRSW2 (โรงเรียนนวมินทราชินูทิศสตรีวิทยา 2)

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> Back in 2019 I used to like to try new and interesting things like 3d modeling making games but I found myself real fast that I am REALLY bad at both things.later I find programing is enjoyable for me(It really is one of many thing you need to learn to make a game) so I write some utility program from time to time.and that changes when I got in to AI Builders. I was given a chance to make a big project for myself so I decided to make a file sorting program that is using data from the files it self I called it CL_sort.the reason is the way that I sort my files is quite bad I usually have a file that can fit in 2 driffent folder and I don't want to deal with that anymore.but with help from of people there I was able to make this project possible and learn new things along the way too.ย้อนกลับไปในปี 2019 ผมเป็นคนที่ชอบที่จะลองทำสิ่งใหม่ ๆ ที่ผมสนใจเช่น การทำโมเดลสามมิติและการสร้างเกม แต่ผมก็ค้นพบว่าผมไม่ถนัดทั้งสองด้านแลยหลังจากนั้นผมก็พบว่าการเขียนโปรแกรมนั้นเป็นสิ่งที่ผมรู้สึกว่ามันสนุกดี(การเขียนโปรแกรมเป็นหนึ่งในหลาย ๆ สิ่งที่ต้องใช้ในการสร้างเกม) ผมก็เลยเขียนโปรแกรม utility อยู่เรื่อย ๆ เมื่อมีไอเดียเข้ามาในหัวและทั้งหมดนั้นก็เปลียนไปหลังจากที่ได้เข้าสู่ AI Builders ผมก็ได้โอกาสที่จะได้ทำโปรเจคใหญ่ ผมก็เลยตัดสินใจที่จะทำโปรแกรมจัดไฟล์ที่ใช้ข้อมูลจากตัวไฟล์มาใช้ในการจัดไฟล์ผมก็เลยเรียกมันว่า CL_sortทำไมหรอ เพราะวิธีที่ผมจัดไฟล์นั้นมักจะเจอปัญหาที่ไฟล์1 ไฟล์สามารถจัดอยู่ในสองหมวดที่แตกต่างกันได้และผมไม่อยากเจอแบบนั้นอีกแล้วและด้วยความช่วยเหลือจากพี่ ๆ ผมก็สามารถทำให้โปรเจคนี้เป็นไปได้และได้เรียนรู้สิ่งต่าง ๆ อีกมากมาย
