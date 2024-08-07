---
    date: "31-7-24"
    title: "Search engine with automatic tag recommendation"
    builder: "Pream Pitchapa"
    builder_info: " challenger"
    thumbnail: "/images/2023/112/01.jpg"
    links:
        github: "https://github.com/PreamJ/LDA_TopicModelling_Legal"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid033nNpBDUSsxUNrK21hCvWkA7b6LEUYYBnbY4XWo7CRHn3UDA5vSSv7sTHo3VDqsEcl"
        blog: "https://medium.com/@pream.jun/application-of-latent-dirichlet-allocation-lda-in-text-classification-and-similarity-search-42efddc2cbd3"
---

![image](/images/2023/112/01.jpg)
    
- ในปัจจุบัน internet forums เป็นศูนย์รวมการปรึกษาปัญหาของผู้ใช้อินเตอร์เน็ต ดังนั้นการติด tags เพื่อใช้ในการแบ่ง content จึงมีประโยชน์ในการจัดกลุ่มคำถาม
- โมเดลสร้าง tags จากเอกสารด้วยเทคนิค topic modeling, Latent Dirichlet Allocation (LDA) เพื่อนำไปใช้ในการช่วยค้นหาเอกสาร
- ใช้ชุดข้อมูลคู่ของ question-answer5,600 คู่จาก internet forum ของ LegalBERT-th ทำ Wordcloud เพื่อแสดงผล จากนั้น tokenize คำใช้ LDA เพื่อหา topics โดย top 20 มีหัวข้อเกี่ยวกับ สัญญา, ยาเสพติด/อาชญากรรม, ครอบครัว, งาน, ศาล เป็นต้น
- โมเดลสามารถหากลุ่มข้อมูลและทำนายกลุ่มของ tags ได้ กรณีใช้ topics 5 หัวข้อวัดผลได้ F1-score = 0.68, BLEU = 0.66, ROUGE = 0.73 และ Jaccard similarity = 0.8
- เนื่องจาก AI Builders เป็นโครงการที่มีการแข่งขันในการสมัครสูงพอสมควร (1/10 โดยประมาณ) Pream ไม่ได้รับคัดเลือกเข้าโครงการ แต่เรียนรู้ตามเนื้อหาและหา mentor มาช่วยทำโครงงานส่งให้ทีมงานประเมินได้เป็นที่น่าพอใจจึงได้เป็นส่วนหนึ่งของ AI Builders Hall of Fame
