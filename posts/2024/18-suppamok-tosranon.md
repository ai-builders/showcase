---
date: "31-7-24"
title: "Book Identifier by BGE-m3 model"
builder: "ศุภโมกข์ ธูสรานนท์(จิมมี่)"
builder_info: "เซนต์คาเบรียล / กรุงเทพมหานคร"
thumbnail: "/images/2024/18/01.png"
links:
    github: "https://github.com/The-Jimmy/ai-builder-bookIdentifier "
    facebook: ""
    blog: "https://medium.com/@dajimmy.m/book-identifier-by-bge-m3-model-8dba59ea4d6a "
---

![image](/images/2024/18/01.png)

- Model for identifying popular english books from a brief description of that book with BGE-m3 model
- I got the dataset from CMU Book Summary Dataset containing 16344 book summary and I added 8 questions per book, 130,732 questions overall, with Google AI Gemini
- I did not do any training on BGE-m3 because of time limitations and problems with answer keys, I explained more in my Medium blog.
- The model has an accuracy of 0.278 before reranking and 0.111 after reranked. But after carefully manually analyzing the prediction from 30 books. I have found out that most of the ones that the model got wrong, the predicted one is either a book with the same genre or book with a similar plot.


### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> จากการที่ผมได้ไปเข้าหลายๆโครงการและค่ายที่เกียวกับ ai และ machine learning มา ผมก็ได้รู้ว่าผมมีความสนใจในด้านนี้และอยากที่จะศึกษาต่ออย่างจริงจัง ผมจึงได้มาเจอโครงการนี้และบวกกับรุ่นพี่ที่ได้แนะนำโครงการนี้มา ผมจึงมีความสนใจและใฝ่ฝันที่จะเข้าโครงการนี้ ทั้งเพือที่จะพัฒนาตัวเองและอยากที่จะเขียนโครงการที่สามารถนำไปใช้ได้ในชีวิตจริง ผมอยากที่จะเรียนรู้การเก็บข้อมูลให้แม่นยำและรวดเร็วจากหลายๆแห่ง หลังจากที่ผมได้เรียนจบโครงการนี้แล้ว ผมอยากที่จะมาทำ research ของผมเกี่ยวกับการตรวจจับโรคจากภาพ mri หรือ x-ray เพื่อที่จะได้ช่วยบุคลากรทางการแพทย์ในการดูและวิเคราะห์โรคได้เร็วขึ้น
    