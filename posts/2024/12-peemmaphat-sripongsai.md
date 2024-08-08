---
date: "31-7-24"
title: "PoseCrafts: สร้าง 2D Characters Animation Spritesheet ใน Openpose format จาก ข้อความ"
builder: "ภีมพัฒน์ ศรีผ่องใส(ภีม)"
builder_info: "หล่มสักวิทยาคม / เพชรบูรณ์"
thumbnail: "/images/2024/12/01.png"
links:
    github: "https://github.com/SupeemAFK/PoseCrafts"
    facebook: ""
    blog: "https://medium.com/@Supeem/posecrafts-transforming-text-into-dynamic-2d-characters-with-openpose-594861900be6"
---

![image](/images/2024/12/01.png)

- โมเดลสร้าง spritesheet ใน openpose format จากข้อความ สำหรับ generate 2d character animation ด้วย stable diffusion และ LoRA
- แรงบันดาลใจอยากจะสร้าง animation ให้กับตัวละคร 2D เพื่อให้ game developer ที่ไม่มี art skills สามารถสร้าง 2d character animation จากข้อความได้
- dataset สร้างขึ้นเองจากการรวบรวมรูป spritesheet แล้วนำมา Pose Estimation + จัดท่าทางให้ถูกต้อง รวบรวมมาได้ทั้งหมด 400 samples
- ตั้ง data condition ขนาด canvas = 300 x 900 และ มีจำนวน frames = 5 เพื่อให้ง่ายต่อการทดลอง
- ทำการ fix bad data หากพบว่า data ที่เก็บมาไม่ตรงกับ condition ที่ตั้งไว้
- preprocess โดยการ sort order ใหม่ด้วย nose keypoints และ remove z axis
- ใช้ sentence transformer all-MiniLM-L6-v2 สำหรับ text embedding และ การเข้าใจ context ของประโยค
- ทดลองกับ model หลายแบบเพื่อหา architecture ที่ perform ได้ดีที่สุดตั้งแต่ Neural network ธรรมดา, CNN, RNN, LSTM และ modify T5 Transformer
- ใช้ MAE เป็น metrics เทียบ keypoints ระหว่าง ground truth กับ predicted
- LSTM perform ได้ดีที่สุดบน test set ซึ่งเป็น unseen data โดยได้ค่า MAE เฉลี่ยที่ 20.756538
- Baseline ให้ผู้คนทำ form โดยใช้ Likert Scale เทียบกันระหว่าง ground truth และ predicted และ เทียบ performances กับวิธีการสร้าง openpose spritesheet ในปัจจุบัน
- model สามารถ generate ท่าง่ายๆได้ แต่ยังไม่สามารถ generate ท่าที่มีความซับซ้อนได้
- ต้องการ data ที่มากกว่านี้ รวมถึงจำนวน frames และ diversity ของท่าทางมากกว่านี้
- อาจจะลองวิธีใหม่ๆ เช่น การแปลง keypoints ในแต่ละ frames เป็น discrete tokens ด้วย VQ-VAE และ ลอง model อื่นๆ อย่าง Seq2Seq model และ Autoregressive model

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> ผมสนใจคอมพิวเตอร์มาตั้งแต่เด็กๆ และผมก็เขียนโปรแกรมตั้งแต่ ม.ต้น จนผมเรียนรู้ด้วยตัวเองและมีความรู้ความสามารถในด้านการพัฒนา fullstack app และ game dev เคยแข่งโครงงานระดับประเทศ ได้รับรางวัลแข่ง nsc และพัฒนา project มามากมาย ผมมีความฝันที่จะพัฒนาสังคมให้ดีขึ้นด้วยความสามารถด้านเทคโนโลยีของผม และ ช่วงนี้อยู่ในช่วงที่ผมพึ่งจบ ม.6 มาพอดี และกำลังจะขึ้นมหาวิทยาลัย ซึ่งกว่ามหาวิทยาลัยของผมจะเปิดก็เดือนสิงหาคม ผมจึงอยากที่จะใช้เวลาของผมในการเรียนรู้สิ่งใหม่ๆ นั้นก็คือสาย ai เพราะเป็นสายที่ผมรู้สึกว่าผมยังเชี่ยวชาญน้อยที่สุดหากเทียบกับ fullstack และ game dev ที่ผมค่อนข้างมั่นใจใน skill ของผม ผมเคยทำ project เกี่ยวกับ machine learning มาบ้าง เช่น image classification ด้วย convolution neural network แต่ก็รู้สึกว่ายังไม่ได้เข้าใจอย่าง"ถ่องแท้" ถ้าเทียบสองสายก่อนหน้านี้ที่ผมทำ ที่ผมทำอย่างมากก็สร้าง model neural network ด้วย tensorflow แต่ทำไม connected layer ถึงมีจำนวนเท่านี้ ทำไมต้องใช้ loss functionนี้ ทำไม activation function ต้องใช้อันนี้ และทำไม optimizer ต้องเป็น adam สิ่งเหล่านี้คือสิ่งที่ผมยังไม่เข้าใจ ผมจึงเลยอยากจะเข้าร่วมโครงการนี้เพื่อเรียนรู้ในสายของ data science และ 
    