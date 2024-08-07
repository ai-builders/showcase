---
date: "31-7-24"
title: "Aquarium Fish Species Classification - โมเดลระบุสปีชีส์สัตว์น้ำจากภาพ"
builder: "ชลนา เครือวุฒิกุล(วาวา)"
builder_info: "สาธิต มศว ประสานมิตร (ฝ่ายมัธยม) / กรุงเทพมหานคร"
thumbnail: "/images/2024/10/01.png"
links:
    github: "https://github.com/chonlanawawa/FishClassificationProject"
    facebook: ""
    blog: "https://medium.com/@chonlanawawa/aquarium-fish-species-classification-cd8fe60ab02a"
---

![image](/images/2024/10/01.png)

- ขั้นแรกคือ data เนื่องจากยังไม่มีคนทำ Dataset ของภาพสปีชีส์สัตว์น้ำ จึงทำการ scrape ด้วย library fastbook โดยอิงคลาสจาก List of Marine aquarium fish species (https://en.m.wikipedia.org/wiki/List_of_marine_aquarium_fish_species) ที่มีอยู่ 617 คลาส ได้มาทั้งหมด 74,040 รูป
- หลังจากทำการ cleaning แล้ว ได้มีการทำการลบคลาส และการรวมคลาสใน genus เดียวกัน เนื่องจากปัญหาจำนวนภาพน้อย, ใน genus เดียวกันคล้ายกันจนแยกไม่ออก จึงเหลืออยู่ 549 คลาส 43,287 รูป และในแต่ละคลาสจำนวนรูปต่างกันมาก เลยมีการทำ oversampling ด้วย library imblearn
- Train โมเดลมาเทียบทั้งหมด 4 โมเดล คือ MobileNet (ไม่ได้ finetune), MobileNet (finetune), ResNet50V2, DenseNet121 โดย MobileNet (finetune) ได้ผลลัพธ์บน test set ดีที่สุดที่ accuracy 83%
- สร้าง baseline set เพื่อทำการเทียบ accuracy ของโมเดลกับ Google reverse image search โดยกำหนดไว้ว่าต้องพบชื่อสามัญ หรือชื่อวิทยาศาสตร์ของสัตว์น้ำในรูปนั้น ๆ ภายใน 3 ลิงก์แรก โดย Google reverse search สามารถหาชื่อสปีชีส์เจอที่อัตรา 76.6859% ส่วนโมเดลมี accuracy ที่ 82.51% ซึ่งถือว่าโมเดลของเราชนะในเรื่อง usage ไปค่
- ในส่วนของ Future plan คือจะทำให้เมื่อ predict สปีชีส์แล้ว จะแสดงข้อมูลของสปีชีส์นั้น ๆ แบบสรุปอ่านง่าย และพัฒนาต่อเป็นแอปพลิเคชัน


### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> คือหนูเป็นคนที่มีไอเดียโปรเจคโผล่ขึ้นมาบ่อยมาก แต่ไม่รู้จะเริ่มต้นทำจริงยังไง ไม่รู้ว่ามันเป็นไปได้มั้ย สเกลใหญ่เกินความสามารถหนูไปรึเปล่า หรือต้องเอาไอเดียนี้ไปต่อยังไงอยู่ตลอด ซึ่งอาจจะเพราะว่าความรู้หนูไม่ได้แน่นถึงขนาดขั้นทำโปรเจคด้วยตัวเองได้ แต่สุดท้ายคือต้องพับไอเดียลงไปตลอดเลยค่ะ หนูเลยคิดว่าถ้าหนูเอาไอเดียที่มีมาลงโครงการนี้ ไอเดียนั้น ๆ จะสำเร็จได้ ด้วยการที่โครงการนี้มี mentor คอยช่วยคอยไกด์ แนะนำวิธีทำทางไปต่อในโปรเจค หนูไม่น่าจะเคว้งจนโปรเจคล่มเหมือนตอนทำเองคนเดียวค่ะ แล้วหนูน่าจะได้ความรู้ในด้านการทำ ai เพิ่มขึ้น พื้นฐานแน่นขึ้นจากการเรียนระหว่างโครงการนี้ จนหนูสามารถเอาความรู้ตรงนี้ไปต่อยอด ไปประยุกต์ใช้ทำโปรเจคต่อ ๆ ไปได้ ทำให้น่าจะวนกลับไปต่อยอดไอเดียเก่า ๆ ที่เคยมีได้ด้วยค่ะ แล้วคือหนูอยากเข้าโครงการนี้มาตั้งแต่ปีที่แล้ว แต่ว่าตอนนั้นยังเขียนโปรแกรมไม่เก่งพอจะทำข้อสอบเข้า แต่ว่าตอนนี้หนูสามารถทำได้แล้ว หนูเลยอยากเข้าโครงการให้ติดในรอบนี้มาก ๆ ค่ะ
    