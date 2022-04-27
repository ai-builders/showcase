---
date: "2021-07-08"
title: "Thai Text-to-Speech with Tacotron"
builder: "Rajasurang Wongkrasaemongkol (Prim)"
builder_info: "มัธยมศึกษาปีที่ 2 / ภูเก็ต"
thumbnail: "/images/2021/005/01.png"
links:
  github: " https://github.com/Prim9000/Thai_TTS"
  facebook: "https://www.facebook.com/aibuildersx/posts/168189225349525"
  blog: "https://bit.ly/3jHNuWu"
---

![Prim](/images/2021/005/01.png)

- โมเดล Text-to-speech ภาษาไทย open source
- เทรนด้วย dataset TSync2 (AI for Thai ของ NECTEC) จำนวนทั้งหมด 5 ชั่วโมง
- preprocess ข้อมูลด้วยการตัด silence หน้าและหลังเสียงออก
- เทรนด้วยสถาปัตยกรรม Tacotron 2 โดยใช้ open source จาก NVIDIA
- ได้ทำการทดลองเทรน LJSpeech ทั้งแบบ cold start และ warm start ละได้นำ pretrained จาก LJSpeech มา train ภาษาไทยต่อ
- มีการทำการทดลองถึงความแตกต่างระหว่างการใช้ full stop และ ไม่มี full stop
- ได้เทรน model ไปจำนวนทั้งหมด 10,000 steps
- วัดผลด้วย mean opinion score ได้คะแนน 3.13 +- 1.12 โดยเสียงมนุษย์ได้อยู่ที่ 4.3

![Model Architecture](/images/2021/005/02.png)


![Experiment Steps](/images/2021/005/03.png)


![Results](/images/2021/005/04.png)


### แรงจูงใจในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 9 สัปดาห์ที่แล้ว)

>"“AI Builder is the fascinating program to encourage and create youth "AI builders". 
>AI, the Artificial Intelligence, is definitely the trendy, most practical tools for us to live our life. With this significance, AI should be the best topic to learn in order to improve our daily basis and transferring into a "Tech" era. These technologies are improving every day, we shouldn't be behind the times.
>I would love to join AI Builder program to develop our country, together, and improving our lives' quality with AI.”