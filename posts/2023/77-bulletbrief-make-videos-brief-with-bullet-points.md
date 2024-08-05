---
    date: "31-7-24"
    title: "BulletBrief — Make videos brief with bullet points"
    builder: "Darakarn Limkool"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/77/01.jpg"
    links:
        github: "https://github.com/Teetydrk/BulletBrief-t5base"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid0BuBcPMwBwbe4RV4LLyfL4qCSiRLAmkahVSR7B2fjgZU8kCNtN2AHfxdPr5x5nchSl"
        blog: "https://medium.com/@daradarakarn007/bulletbrief-say-goodbye-to-long-hours-of-video-consumption-with-bullet-summarizer-38064da23c9c"
---

![image](/images/2023/77/01.jpg)

- โมเดลสรุปใจความสำคัญ (abstractive summarization) เป็น bullet point จากปาฐกถา แรงบันดาลใจจากการชอบฟัง TED แต่บางครั้งอยากได้สรุปสั้นๆโดยไม่ต้องตั้งใจฟังทั้งหมด
- สร้างชุดข้อมูลจากการถอดเทปวิดีโอ 4,138 คลิปเป็นจำนวนทั้งหมด 3,095,358 คำจาก TEDEd และ BigThink; สร้างคำย่อ bullet point ด้วย ChatGPT 3.5
- ทำความสะอาดข้อมูลถอดเทปด้วยการกำจัดข้อมูลที่ไม่เกี่ยวข้อง เช่น “Transcriber:”,“Translator:”, “Reviewer:”
- วัดผลด้วย Rouge1, 2, L, LSum; ต่อด้วยการประเมินจากมนุษย์ เนื่องจาก Rouge ทำงานด้วยการเทียบ ngram อาจจะไม่เหมาะกับ abstractive summarization เท่าที่ควร
- เทรนด้วยสถาปัตยกรรม T5-base; ผล Rouge ออกมาไม่ดีนักตามที่คาด ส่วนการประเมินจากมนุษย์เทียบกับโมเดลสรุปความอีกโมเดลหนึ่งทำได้ดีกว่าใน 57% ของข้อความ
- ความผิดพลาดที่สังเกตได้ ได้แก่ bullet point ซ้ำ, โมเดลสร้างประโยคโดยไม่มี bullet point, โมเดลสร้าง bullet point ที่มีความหมายเดียวกันแค่เขียนคนละแบบ

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> for me, i love solving things to make my life easier and save time, allowing me to pursue more activities i enjoy. one day in december, i tried chat-gpt and found it the coolest technology and the best time-saver i've ever used. that was the moment i told myself i needed to build my own ai. to get closer to ai, i used my front-end skills to build an ai chatbot using the text-devichi-003 model from openai. luckily, i won a gold merit award from the bodin academic expo 2022. as a passion, my long-term goal is to build a thai tech startup that makes a large positive impact on society and improves the quality of life for thai people. many ideas have popped up in my mind, and i need ai to make them come true. because of that, ii first became interested in coding at a midi hackathon last july. after seeing invaluable projects and cool builders, i decided to begin my coding journey. in october, i participated in the computer posn camp and learned c as a competitive programming and logical thinking skill that is beneficial to my journey. i have been practicing front-end languages (html, css, and javascript) since november and won first place with a gold merit in the regional round and a gold merit in the national round at the 70th sillapa hattakam web application competition. moreover, i participated in the cai camp from october to december and was a part of a load forecasting project using lstm; it was my first time being introduced to pandas. i became interested in ai through chat-gpt in december, decided to build an ai chatbot using a model from openai
    