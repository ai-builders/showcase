---
date: "2021-07-15"
title: "- Visual Hand - Command things with your hand DIY"
builder: "Rapepong Pitijaroonpong (Best)"
builder_info: "มัธยมศึกษาปีที่ 5 / ปทุมธานี"
thumbnail: "/images/2021/012/01.jpg"
links:
  github: "https://github.com/Besutodesuka/Tiferet"
  facebook: "https://www.facebook.com/aibuildersx/posts/173009991534115"
  blog: "https://bit.ly/36nhvml"
---

![Best](/images/2021/012/01.jpg)

- แรงบันดาลใจมาจากการที่เบสต้องการที่จะควบคุมเม้าส์จากระยะไกลและไม่ต้องสัมผัสกับเมาส์
- ต้องการที่จะทำ AI ที่คอยตรวจจับมือและสามารถใช้คลิ้กแทนเม้าส์ได้ และสามารถทำ gesture อื่นๆได้ด้วย
- ได้ใช้ opencv2 เพื่ออ่านข้อมูลจาก webcam และ pyautogui สำหรับควบคุมเม้าส์
- ใช้ pretrained จาก library mediapipe เพื่อสร้าง hand landmark
- ตัดสินใจ rule-based model เนื่องจากการใช้งานต้องการ fps ที่สูงเพื่อให้ accuracy สูงตาม และได้จำกัดการใช้งาน cpu ไว้ด้วยเพื่อให้ผู้ใช้สามารถใช้คู่กับโปรแกรมอื่นๆได้
- วัดผล accuracy ได้เฉลี่ยอยู่ที่ 80.67% ที่ 20.67 fps
- นอกจาก feature ของเลื่อนเม้าส์และคลิกซ้ายคลิกขวาแล้ว ยังทำ feature อื่นๆเช่น refresh, go to desktop, double click, drag, และ print screen อีกด้วย

![The Improvement](/images/2021/012/02.jpg)


![Hand with Labels](/images/2021/012/03.png)


![Results](/images/2021/012/04.jpg)

### แรงจูงใจในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 9 สัปดาห์ที่แล้ว)
> "ผมต้องการที่จะทดลองปฏิบัตินำความรู้ที่มีและที่กำลังจะได้รับมา มาสร้าง หลายสิ่งบางอย่างไปใช้พัฒนาคุณภาพชีวิตของคนในสังคม และ ตนเอง ให้หลายสิ่งหลายอย่างสามารถทำได้ง่ายยิ่งขึ้น และ พัฒนาทักษะของตนเอง ให้สามารถที่จะนำความรู้ไปทำงานแก้ปัญหาตามเคสเฉพาะต่างๆได้จริงเช่นการทำ OCR เพื่ออำนวยความสะดวกในการบันทึกข้อมูลต่างๆ และลดต้นทุน การทำ automate/preprocess data กับข้อมูลจำนวนมากเพื่อให้การทำ datawarehouse ทำได้ง่ายยิ่งขึ้น"