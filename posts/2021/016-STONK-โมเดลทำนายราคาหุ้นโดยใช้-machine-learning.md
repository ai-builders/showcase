---
date: "2021-07-19"
title: "STONK โมเดลทำนายราคาหุ้นโดยใช้ machine learning"
builder: "Suphapol Wongsawat (Kanoon)"
builder_info: "มัธยมศึกษาปีที่ 6 / ลำปาง"
thumbnail: "/images/2021/016/01.jpg"
links:
  github: "https://github.com/KatieMarsh/STONK/"
  facebook: "https://www.facebook.com/aibuildersx/posts/175712874597160"
  blog: "https://sodayeet.medium.com/lstm-embedding-model-for-predicting-stock-price-and-how-to-improve-it-4954a44582c4"
---

![Kanoon](/images/2021/016/01.jpg)

- ทำการดึงข้อมูลจาก yahoo finance มาโดยหุ้นมี่ใช้เป็นตัวอย่างคือ KBANK 
- preprocess ข้อมูลที่ได้รับมาโดยการ ตัด row ที่ไม่มีข้อมูลออกไปและคำนวณค่า  pct change, SMA20 และ T3 indicator เพิ่มเข้าไปในชุดข้อมูลแล้วตัด column “Close” ออก
- output ที่ต้องการคือ pct change ของ 1 วันข้างหน้า คืิความเปลี่ยนแปลงของราคาในวันข้างหน้า
- โมเดลที่ใช้ คือ RNN ที่มี LSTM layer และ embedding
- train โมเดลด้วยการให้โมเดลทำนาย pct change แล้วเทียบกับข้อมูลจริงเพื่อวัด loss และทำการ step
- นำ output ของโมเดลมาคำนวณเป็น ราคาของ 1 วันข้างหน้าเพื่อแสดงเป็นรูปแบบ graph และตาราง
- จากการ evaluate โดยใช้ test set ที่โมเดลไม่เคยเห็นมาก่อน จะได้ MSE loss อยู่ที่ประมาณ 5.42 และจากการใช้ confusion matrix โดยวัดจากจำนวนครั้งที่โมเดลทายถูกว่าราคาจะขึ้น จะได้ average precision อยู่ที่ 50%

![Data](/images/2021/016/02.png)


![Results](/images/2021/016/03.png)


### แรงจูงใจในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 9 สัปดาห์ที่แล้ว)

> "I, as a Thai student, have always been fascinated by the technology especially in the computer field. I wanted to have a chance to work with the biggest companies which specialize in AI such as Intel and Nvidia but I realized the fact that all of the companies that I listed are located in the united states of America which brought up a question, “why don’t we have our own Silicon Valley? (I just realized วังจันทร์วัลเลย์ exist)”. I know that sounded far fetch but I think it is possible to do it given that we are able to gather all “best of the best” to do it, that is why I wanted to start it or at the very least be a part of it. I believe that self-development is very important for doing that as well so this is why I am applying."
> "I have done a STEM project about how I used a raspberry pi to make a AQI measuring device, using a dust sensor and raspberry pi to send the data up to the cloud so I can look up AQI at my house anywhere in the world. The code for said project is written with Python so I have some experience with Python and Linux based operating system. If you're interested about the project I have some images on my Sway site."