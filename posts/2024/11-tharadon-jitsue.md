---
date: "31-7-24"
title: "DrumScribe - แกะโน้ตกลองด้วย deep learning"
builder: "ธราดล จิตซื่อ(ธีร์)"
builder_info: "มหิดลวิทยานุสรณ์ / นครปฐม"
thumbnail: "/images/2024/11/01.png"
links:
    github: "https://github.com/tjitsue/DrumScribe-Project"
    facebook: ""
    blog: "https://medium.com/@tjitsue/drumscribe-development-of-a-machine-learning-model-to-automatically-transcribe-drum-audio-f753be6fe2b6"
---

![image](/images/2024/11/01.png)

- ใช้ Dataset จาก E-GMD โดยเลือก audio ที่มีการเล่นจังหวะ 8 beats เป็นหลัก ได้มาทั้งหมด 51 audios ความยาวรวมกันกว่า 2 ชั่วโมง
- ทำการ sliced ออกเป็นจังหวะ 8 beats เลือก data ที่มีเสียงที่สมบูรณ์ ไม่มีการเล่น 16 beats (เพราะจะทำให้มี 2 เสียงใน 1 audio) หลังจากนั้นทำการ label ว่า sliced audio นั้นมีการเล่นกลองชิ้นไหนบ้าง
- ใช้ librosa ในการแปลง audio เป็น mel spectrogram และแปลงด้วย Fast Fourier Transform (FFT)
- จะสร้างโมเดล 5 โมเดลสำหรับแต่ละชิ้นกลอง เพื่อทำนายว่า audio นั้นมีชิ้นกลองชิ้นนั้นหรือไม่ และนำผลลัพท์จากทั้ง 5 โมเดลมารวมกันเป็นโน้ตกลอง
- สำหรับ mel spectrogram ใช้โมเดล resnet50, mobilenet, และลองทำ custom cnn model สำหรับ FFT จะให้ข้อมูล tabular data จึงใช้โมเดล RandomForest และ XGBoost ผลคือ resnet50 และ mobilenet มีประสิทธิภาพสูงที่สุด
- นำโมเดลที่ผ่านการเทรนแล้วไปทดลองใช้แกะเพลงจริง และทำการเทียบ accuracy และ process time กับมนุษย์
- ทำการ Post-Processing สำหรับชิ้น hihat เนื่องจากเป็นชิ้นกลองที่มักจะมีเสียงเบาและถูกกลบเวลาเล่นในเพลงจริง ทำให้ accuracy สูงมากขึ้น
- สิ่งที่จะนำไปพัฒนาต่อคือสอนให้โมเดลรู้จักกับจังหวะเงียบ และการแยกเสียงจริงกับเสียง echo


### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> ตอนนี้ผมเรียนอยู่มหิดลวิทยานุสรณ์ ชั้น ม.5 ผมมีความฝันที่อยากจะไปเรียนต่อด้าน computer science ที่ nus สิงคโปร์ และอยากจบมาเป็น data scientist อยากทำ research ของตัวเองขึ้นมา ผมมีความสามารถด้านคณิตศาสตร์มาตั้งแต่เด็ก เมื่อขึ้นม.ต้นจึงได้ลองเรียน coding ด้วย python และพบว่าด้วยความรู้ด้าน math ที่สะสมมาทำให้ผมสามารถเรียนรู้ได้เร็ว เนื่องจากหัวใจหลัก ๆ ของ coding ก็อยู่ที่การคิด algorithm&nbsp;ตอนม.4 ได้เข้าร่วมค่าย data science ของ samsung และได้ลองทำ mini project ด้าน data analytics จึงค้นพบว่าการทำงานสายนี้เป็นสิ่งที่ผมชอบและสนุกกับมันจริง ๆ จากการเข้าค่ายนี้ทำให้ผมมีความเชี่ยวชาญในการใช้ python มากขึ้นในปัจจุบันนี้ผมอยากทำ project machine learning ผมได้ศึกษาความรู้ใน internet และลองทำตาม project end to end ใน youtube จึงพอมีพื้นฐานเกี่ยวกับการทำ ml ด้วยโมเดลต่าง ๆ แต่การเรียนใน youtube ก็เป็นแค่การใช้ data set ของคนอื่นแล้วก็ลองทำตามเฉย ๆผมเลยคิดว่าถ้าได้เริ่มทำ project ตั้งแต่ 0 เลย เริ่มตั้งแต่การคิดปัญหา การหาข้อมูล การ cleaning การทำ model จะทำให้ผมเรียนรู้อะไรหลาย ๆ อย่าง และภูมิใจกัน
    