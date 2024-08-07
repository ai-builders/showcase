---
    date: "31-7-24"
    title: "Text2Tags"
    builder: "Pantai Suyasri"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/94/01.jpg"
    links:
        github: "https://github.com/DatboiiPuntai/text2tags-lib"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid0iW4oj7tRobENdSPH8ALTBJEG5TAqZQU2kmu36U2DndpoPugC2VR2d8V9fCz7ExqDl"
        blog: "https://medium.com/@pantaisuyasri/extracting-danbooru-tags-from-text-9b820478a7d8"
---

![image](/images/2023/94/01.jpg)

- โมเดลเปลี่ยนภาษาธรรมชาติเป็นภาษา prompt เพื่อสร้างรูปภาพด้วย Stable Diffusion; เนื่องจากโมเดลสร้างรูปภาพตามท้องตลาดถูกฝึกมา (อย่างไม่ถูกลิขสิทธิ์) จากข้อมูล tag และรูปภาพในเว็บฝากรูป โมเดลจึงเข้าใจคำสั่งภาษาธรรมชาติ เช่น “Shirakami Fubuki in a white sailor school uniform” ได้ยากกว่าคำสั่งในรูปแบบเดียวกับ tag เช่น “1girl, animal_ears, aqua_eyes, fox_girl, shirakami_fubuki, hololive, virtual_youtuber, fox_ears, serafuku, braid, animal_ear_fluff, white_dress”
- เก็บข้อมูล tags จาก Danbooru2021 และเปลี่ยนข้อมูล tag เป็นคำอธิบายภาษาธรรมชาติด้วย gpt-3.5-turbo เป็น training set จำนวน 20k คู่คำอธิบายภาษาธรรมชาติ-tagจากทั้งหมด 5 ล้านคู่
- ทำความสะอาดข้อมูลโดย 1) ลบรูปที่ถูกลบหรือแบนเพื่อรักษามาตรฐานจริยธรรม2) ใช้ข้อมูลจาก 2016-2021 เพื่อให้ได้ความสดใหม่ 3) ใช้เฉพาะรูปที่มีจำนวน tag เกิน 15 อันเพื่อให้ chatgpt สามารถสร้างคำบรรยายภาษาธรรมชาติได้อย่างเหมาะสม
- เพื่อให้ได้ชุดข้อมูลในการเทรนที่ดีที่สุด ให้ prompt กับ chatgpt ว่าให้สร้างคำบรรยายจาก tag ที่เห็นเท่านั้นโดยไม่มีการคาดเดาเองเพิ่มเติม,อธิบายให้ chatgpt ฟังว่า tag แต่ละอันเกี่ยวกับผู้วาด, ตัวละคร, ลิขสิทธิ์, ที่มา, หรือคำบรรยายทั่วไป
- เลือกใช้เฉพาะ tag ที่ถูกใช้ในรูป 500 รูปขึ้นไปเพื่อไม่ให้เจอ tag ที่เฉพาะเจาะจงเกินไป
- ใช้ recall เป็นตัวชี้วัดหลักเนื่องจากสิ่งที่สำคัญคือให้โมเดลสร้าง tag ที่จำเป็นเพื่อให้ได้รูปตามที่ผู้ใช้ต้องการ; หากโมเดลแนะนำ tag ที่ไม่ต้องการออกมาบ้างผู้ใช้ยังสามารถลบออกได้เอง recall จึงสำคัญกว่า precision
- Baseline ผลการทำงานเทียบกับมนุษย์ (ผู้สร้างโมเดล)ลงทุนเขียนคำบรรยายภาษาธรรมชาติเองใน 30 คู่จาก 150 คู่ใน test set ได้ recall 0.456, ใช้ booru tag autocomplete expansion ได้ recall 0.414
- ทดสอบ finetune โมเดลหลายประเภทได้แก่ Cerebras-GPT-1.3B (recall = 0.372), DeBERTa v2 (ลองเปลี่ยนจากปัญหา text generation เป็น multi-label classification แต่ได้ผลไม่ดี),Llama-7B (0.539; ดีกว่ามนุษย์ถึง18%!!)
- ทำ quantization เพื่อนำโมเดลมาใช้ในเครื่องสำหรับผู้บริโภคด้วยllama-cpp; หลังจากลดขนาดโมเดลแล้ว recall ดันดีขึ้น (อาจจะเพราะ regularization)เป็น recall 0.561!!!

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> i still vividly recall the day when i first discovered the world of artificial intelligence. it was just like any other evening spent browsing youtube when a video by two minute papers caught my attention. I clicked on it, expecting nothing more than a quick distraction, but what i found was so much more. it was a digestible explanation of a paper titled “emergent tool use from multi-agent interaction” where ai agents learned increasingly complex strategies in a simple hide-and-seek environment. i was awed when the ai agents started exploiting bugs in the physics of the simulation to gain an edge as if it was a human speedrunner.&nbsp; that video sparked something within me, and i was prompted to delve deeper, binging on videos about everything from self-driving cars to deepfake detectors. it became clear that these technologies were not justi am a self motivated student who is eager to go beyond requirements and strive for excellence. studying at a stem school, i have always challenged myself with rigorous courses. like ap calculus bc, advanced stem with arduino, and ap computer science, while still consistently maintaining straight-as my fascination with ai has also led me to extracurricularstudy where i have gained relevant skills. i started out with a python bootcamp on udemy, andhave since applied my skills to automate daily tasks, writing scripts for signing into wifi, for instance. additionally, i completed advent of code programming challenge using python, which involved 25 days of increasingly difficult puzzles that pushed my knowledge and application of algorithms to their limits. having familiarized myself with python, i continued with ai courses. i completed harvard’s cs50
    