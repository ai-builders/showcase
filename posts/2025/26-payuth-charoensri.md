---
date: "11-6-25"
title: "Fall Detection"
builder: "Payuth Charoensri"
builder_info: "-"
thumbnail: "/images/2025/26/01.png"
links:
    github: "https://github.com/punpayut/Fall-Detection"
    facebook: ""
    blog: "https://medium.com/@punpayut/fall-detection-using-pose-estimation-344f677c51b3"
---

![image](/images/2025/26/01.png)

- #AIBuilders Showcase Series: ระบบตรวจจับการล้มด้วย AI (Fall Detection using Pose Estimation)
- .
- พัฒนาโมเดล Deep Learning (Transformer) เพื่อจำแนกเหตุการณ์ "การล้ม" (Fall) และ "กิจกรรมปกติ" (No-Fall) จากลำดับท่าทาง (Keypoint Sequences) ที่สกัดจากวิดีโอ
- .
- ใช้ MediaPipe Pose ในการสกัด Keypoints หลัก 17 จุด จากแต่ละเฟรมของวิดีโอ, ตามด้วยการทำ Skeleton Normalization เพื่อลดผลกระทบจากมุมกล้องและขนาดตัวบุคคล
- .
- สร้างชุดข้อมูล Sequence: โดยนำ Keypoints ที่ผ่านการ Normalization แล้ว มาสร้างเป็นลำดับข้อมูล (Sequences) ความยาว 60 timesteps (เฟรม). มีการใช้เทคนิค Data Augmentation (เช่น Confidence Noise, Keypoint Dropout) กับชุดข้อมูล Training เพื่อเพิ่มความทนทานให้โมเดล
- .
- สถาปัตยกรรมโมเดล: Transformer Encoder-based
- ผลลัพธ์ที่โดดเด่น: โมเดลสามารถทำนายการล้มบน Test Set ด้วย Accuracy สูงถึง 0.9307 และ F1-Macro Score 0.9284. ที่สำคัญคือ Recall สำหรับคลาส "Fall" สูงถึง 0.9296 (พลาดการล้มจริงน้อยมาก) และ Precision สำหรับคลาส "Fall" อยู่ที่ 0.9273 (แจ้งเตือนผิดพลาดต่ำ)
- .
- การนำไปใช้งาน:
- 1. แปลงโมเดลเป็น TensorFlow Lite (.tflite) ขนาดประมาณ 313 KB เพื่อให้ทำงานได้อย่างรวดเร็วและมีประสิทธิภาพบนอุปกรณ์ Edge
- 2. สร้าง Web Application สาธิตด้วย Gradio บน Hugging Face Spaces ให้ผู้ใช้สามารถอัปโหลดวิดีโอเพื่อทดสอบการตรวจจับได้
- 3. พัฒนาต้นแบบระบบเฝ้าระวังแบบเรียลไทม์บน Raspberry Pi 5 โดยใช้กล้อง Webcam และสามารถ ส่งการแจ้งเตือนผ่าน Telegram Bot เมื่อตรวจพบการล้ม
- .
- แรงจูงใจในการทำโครงงาน: "การตระหนักถึงความสำคัญของความปลอดภัยในผู้สูงอายุและกลุ่มเสี่ยงต่อการพลัดตกหกล้ม เป็นแรงผลักดันให้ผมต้องการนำความรู้ด้าน AI มาประยุกต์ใช้เพื่อสร้างเครื่องมือที่สามารถช่วยเหลือและแจ้งเตือนได้อย่างทันท่วงที ผมเชื่อว่าเทคโนโลยีนี้สามารถสร้างผลกระทบเชิงบวกต่อคุณภาพชีวิตและลดความกังวลของทั้งผู้ที่ต้องการการดูแลและครอบครัวได้ครับ"
- .
- ลอง Demo บน Hugging Face Spaces: https://huggingface.co/spaces/punpayut/fall-detection
- อ่านรายละเอียดเพิ่มเติมในบทความ Medium: https://medium.com/@punpayut/fall-detection-using-pose-estimation-344f677c51b3
- GitHub Repository : https://github.com/punpayut/Fall-Detection
