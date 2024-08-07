---
    date: "31-7-24"
    title: "TH-EN Machine Translation"
    builder: "Tarit Witworrasakul"
    builder_info: "มัธยมศึกษาปีที่ 6.0 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/110/01.jpg"
    links:
        github: "https://github.com/wtarit/th-en-machine-translation"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid02LQNjfPRF2XUk1Vz7qKDagbVgGqL557drXsfbun39mRm7TdN1d6XHfpn9W6AvV1mcl"
        blog: "https://wtarit.medium.com/สร้าง-model-แปลภาษาไทย-อังกฤษ-e23cb9585f5"
---

![image](/images/2023/110/01.jpg)
    
- โมเดลแปลภาษาไทย-อังกฤษด้วยการ finetune NLLB โมเดลแปลภาษาจากMeta
- ฝึกสอนโมเดลด้วยชุดข้อมูล scb-mt-en-th-2020 และ OPUS; ทำความสะอาดแบบเดียวกับ thai2nmt และเพิ่มเติมการคัดออก 1) คู่ประโยคที่มี String เปล่า (“”) 2) คู่ประโยคที่ภาษาไทยไม่มีตัวอักษรภาษาไทย (มีแต่ตัวอักษรภาษาอังกฤษ) อันนี้พบว่าบางคู่ประโยค โดยเฉพาะ opus-kde4 จะมี Text ที่เป็นภาษาอังกฤษทั้งคู่แต่เขียนไม่เหมือนกันอยู่ 3) Text ที่มี Unicode Control codes บางตัว จะเป็นตัวอักษรที่อ่านไม่ออก (ส่วนมากเจอใน opus-opensubtitles)
- NLLB จาก Meta ที่ออกมาเมื่อปี2022 เป็น Model สำหรับแปลภาษาโดยเฉพาะที่แปลได้ถึง 200 ภาษารวมถึงภาษาไทยด้วย! ลองใช้ Model ตัวเล็กสุด (600M Parameter) ก็พบว่าได้ BLEU score ถึง 24.03 โดยไม่ต้องทำอะไรเลย
- ทดสอบกับข้อมูล iwslt_2015 ทีแรกพบว่า finetune กับ scb-mt-en-th-2020 แล้ว BLEU ลดลง! สันนิษฐานว่าเกิดจาก scb-mt-en-th-2020 มีคู่ประโยคภาษาพูดอยู่เพียง 30% ทำให้บริบทไม่ตรงกับ iwslt_2015 ที่มีภาษาพูดเป็นส่วนใหญ่จึงได้เพิ่มข้อมูล OPUS เข้าไปใน training set
- การ finetune ใช้เวลานานมาก ๆๆ ทั้งหมดนี่ใช้เวลาไป 78 ชม. (Train บน RTX3080 16GB Laptop) จึงจำเป็นต้องใช้ LoRA แต่ PEFT (ณ เวลานั้น) ไม่ support NLLB จึงเขียนโค้ด target_modules เอง (ส่วนที่จะ Train) เลือก query projection, value projection

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> ผมเคยทำ project ทั้งที่เป็น mobile application, robotics, line chatbot ซึ่งหลายครั้งก็มีการใช้ ai แต่ส่วนใหญ่จะเป็นการใช้ pre-trained model, ใช้ผ่าน api ของ cloud provider หรือ tools สำเร็จรูป บาง project มีการเตรียม dataset มา fine tune ตัว model เองบ้าง แต่ก็เป็นเพียงการ run script ที่ผู้พัฒนา model เตรียมไว้ ส่วนตัวเคยลองศึกษาการทำ deep learning มาบ้างแต่ก็ยังรู้สึกว่าตัว model ยังเป็นเหมือน black box สำหรับผม ซึ่งผมอยากเข้าใจถึงการทำงานของmodel จริง ๆ เพื่อที่จะสามารถปรับแต่���ตัว model ได้ ถึงแม้ผมอาจจะไม่ได้พัฒนา model architecture ใหม่ ๆ ขึ้นมา แต่การเข้าใจในส่วนนี้ผมคิดว่าจะสามารถทำให้ผมสามารถ fine tune model ให้เหมาะกับ data ที่ต้องการใช้งานได้ดีขึ้น และสามารถ deploy model ได้ดีขึ้น เช่นสามารถเขียนscript เพื่อแปลง model เป็น format ที่ต้องการใช้งาน หรือการ quantization เพื่อให้ model ทำงานเร็วขึ้น โดยเฉพาะการนำไปใช้ใน embedded computer เช่น jetson nano หรือ mobile device ที่มี performance ต่ำ สามารถเขียนโปรแกรมเพื่อ pre-process /post-process ข้อมูลได้อย่างถูกต้องเมื่อ export model ออกไปใช้ในภาษาอื่นผมเขียน python, dart, arduino ได้ เคยชนะการแข่งขัน 2nd kibo-rpc (https://github.com/wtarit/2nd-kibo-rpc_indentation-error) ซึ่งในการทำงาน เวลาแก้ code แต่ละครั้งผมก็จะมีการเก็บข้อมูล เวลาที่ใช้ในช่วงภารกิจต่าง ๆ เพื่อนำมาปรับแก้ให้ตัวโปรแกรมทำงานได้เร็วที่สุด ซึ่งตรงนี้ผมคิดว่าสามารถนำมาใช้กับการทำ ai ได้ เช่นในการปรับ parameter หรือการปรับวิธีการ process dataset ก็จะต้องมีการเก็บสถิติเพื่อหาวิธีการที่ดีที่สุดมีประสบการณ์ในการทำ image processing โดยใช้ opencv ทำหุ่นยนต์ซึ่งเคลื่อนที่ตามเส้นทาง (https://github.com/wtarit/ai-sdc_wrg2021) ใช้ carla simulator ในการทำ self-driving car โดยใช้ simulation ในการสร้าง dataset สำหรับ image segmentation เพื่อควบคุมรถ (https://github.com/wtarit/carla-segmentation-demo) ทำให้เห็นถึงความสามารถของการใช้ simulation เพื่อสร้าง dataset ซึ่งสามารถลดเวลาที่ใช้ในการเก็บและ label data ด้วยมือได้หากได้รับเข้าโครงการผมจะใช้โอกาสที่ได้รับอย่างเต็มที่ และผมอยากทำให้ ai เข้ามาช่วยมนุษย์ให้สามารถทำงานได้ดีขึ้น เร็วขึ้น และไม่เสียเวลากับการทำงานซ้ำ ๆ ในปัจจุบันผมก็มักจะนำ ai tools เช่น chatgpt, midjourney มาแนะนำให้คนรอบตัวใช้งาน
    