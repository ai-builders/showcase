---
    date: "31-7-24"
    title: "Pseudobulbar Palsy Detection with Wav2Vec2 and OpenAI Whisper"
    builder: "Jirat Chiaranaipanich/มัธยมศึกษาปีที่ 4.0"
    builder_info: " กรุงเทพมหานคร -- jolly-fish (จากใบสมัคร)"
    thumbnail: "/images/2023/81/01.jpg"
    links:
        github: "https://github.com/spycoderyt/thaispdetection"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid024yHkCKcQ7LmZj7GNkfXsH49Ctev2dKFcZ2bBUCoLZPZ3fui6MhJMHEZF6sjQ2bFxl"
        blog: "https://medium.com/@spycoderyt/detecting-neurodegenerative-diseases-through-speech-a-machine-learning-approach-ai-builders-9db0e9de5ff7"
---

![image](/images/2023/81/01.jpg)

- โมเดลตรวจจับกลุ่มอาการกล้ามเนื้อใบหน้าอ่อนแรงและการแสดงออกทางอารมณ์ไม่เหมาะสม (Pseudobulbar Palsy) จากเสียงพูดภาษาไทยโดยใช้ Wav2Vec2 และ Whisper
- งานตรวจสอบโรคทางสมองที่ผ่านมา เช่น Parkinson’s จากเสียงพูดแมนดาริน (accuracy = 75%) และภาษาอังกฤษ (AUC = 0.75); ยังไม่มีงานสำหรับเสียงพูดภาษาไทย
- ชุดข้อมูลเอื้อเฟื้อโดยจุฬาลงกรณ์มหาวิทยาลัย; ให้ผู้ป่วยและไม่ป่วยพูดประโยค 8 ประโยคคือ ชาวไร่ตัดต้นสนทำท่อนซุง, ปูม้าวิ่งไปมาบนใบไม้ (เน้นใช้ริมฝีปาก), อีกาคอยคาบงูคาบไก่ (เน้นใช้เพดานปาก), เพียงแค่ฝนตกลงที่หน้าต่างในบางครา, อาาาาาาาาาาา, อี (ลากยาว), อาาาา (ดังขึ้นเรื่อยๆ) และอาา อาาา อาาาาา
- ฟังเสียงเบื้องต้นสังเกตว่าผู้ป่วยจะมีเสียงสั่น พูดช้า และเสียงแหบกว่า; ข้อสังเกตนี้ช่วยให้เวลาทำ audio augmentation เลือกใช้ Time Shift ที่อาจช่วยเปลี่ยนให้เสียงปกติเหมือนเสียงผู้ป่วยมากขึ้น และหลีกเลี่ยงการใช้ Time Stretching เนื่องจากมีโอกาสทำให้เสียงปกติช้าลงเหมือนเสียงผู้ป่วย
- เริ่มต้นด้วยการfinetune facebook/wav2vec2-base-960h และ openai/whisper-tiny; หลักเทรนไปแล้วนำ validation set มาดูอีกครั้งว่าประโยคไหนผิดพลาดบ่อยที่สุดเพื่อปรับ hyperparameter ในการเทรนโมเดลและ audio augmentation
- ท้ายสุดแล้วทุกโมเดลมี f1-score ในช่วง 0.9 บน validation set 112 คน ถือว่าจำแนกได้ดีมาก

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> while growing up, i was always fascinated by technology and how it seemed like there were always new advances and breakthroughs happening every single week. one of the advances i've seen lately is ai and i'm really interested in what i can do with it. i hope that through this program, i will get a better understanding of this new tool and use it to build something of my own.although i'm more experienced with c++ than python, i'm willing to do whatever it takes to learn what i need to learn for this course. i'm naturally curious, which is what made me want to programming and join this program in the first place, and i feel like this makes me a great candidate for your selection.
