---
    date: "31-7-24"
    title: "KlonSuphap-LM แต่งกลอนแปด ด้วย GPT-2"
    builder: "Kampanat Yingseree"
    builder_info: " challenger"
    thumbnail: "/images/2023/113/01.jpg"
    links:
        github: "https://github.com/Kongfha/KlonSuphap-LM"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid02oTqJWh5JndCZ4RtShnDSSBPCz8n8bcEv7EpHUttgnsaoHqTb4RdobdoSNznqudDzl"
        blog: "https://medium.com/@kampanatyingseree4704/klonsuphap-lm-แต่งกลอนแปด-ด้วย-gpt-2-d2baffc80907"
---

![image](/images/2023/113/01.jpg)

- สร้างโมเดล KloSuphapLM เนื่องจากการใช้ChatGPT แต่งแบบปกติยังไม่สามารถจับลักษณะของการแต่งกลอนแปดได้เนื่องจากจำนวนข้อมูลกลอนภาษาไทยที่มีน้อย
- การสร้าง KlonSuphap-LM เพื่อที่จะให้โมเดลสามารถเรียนรู้ลักษณะการสัมผัสของกลอนแปดได้จากชุดข้อมูลที่มีจำกัด ดังนั้นแล้วเราจึงจะต้องออกแบบวิธีการ Train ที่จะทำให้ตัวโมเดลจับข้อมูลเกี่ยวกับสัมผัสของกลอนให้ได้มากที่สุด
- ใช้ Dataset เรื่อง พระอภัยมณี, ขุนช้างขุนแผน, โคบุตร, จันทรโครพ และ นิราศต่าง ๆ รวมเป็น 13 เรื่อง จาก Thai Literature Corpora (TLC)
- นำข้อมูลทั้งหมดมาเข้ากระบวนการPreprocessing ด้วยเทคนิคที่คิดขึ้นมาเรียกว่า“Rhyme-Tagging”ซึ่งเป็นการใส่ tag ครอบคำที่จะสัมผัสกัน เช่น ใส่ tag <s2> และ </s2> ครอบ พยางค์ที่จะสัมผัสกับคำในวรรคถัดไป
- เทคนิคนี้อาจนำไปใช้กับกลอนรูปแบบอื่นๆได้ในอนาคต
- การ Fine-Tuning ใช้โมเดลจาก flax-community/gpt2-base-thai ซึ่งเป็นโมเดล GPT-2 ร่วมกับ Reinforcement learning โดยใช้ criteria จากการสร้างกลอน8 เช่นความยาววรรค, การสัมผัส
- วัดผลโดนการประเมิน loss, average entropy จากขั้นตอน reinforcement learning, และวัดผลการสัมผัสของกลอน
- ข้อเสนอแนะ (เพิ่มเติม) เนื่องจากการ finetune ใช้เวลาเทรนนานจึงยังไม่สามารถเปรียบเทียบประสิทธิภาพโมเดลได้,การทดสอบยังเน้นการใช้ loss กับ rhyme evaluation แต่ยังสามารถเพิ่มความสวยงามของภาษาหรือ human evaluation ในอนาคตได้
- เนื่องจาก AI Builders เป็นโครงการที่มีการแข่งขันในการสมัครสูงพอสมควร (1/10 โดยประมาณ) Kampanat ไม่ได้รับคัดเลือกเข้าโครงการ แต่เรียนรู้ตามเนื้อหาและหา mentor มาช่วยทำโครงงานส่งให้ทีมงานประเมินได้เป็นที่น่าพอใจจึงได้เป็นส่วนหนึ่งของ AI Builders Hall of Fame
