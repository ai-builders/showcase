---
date: "10-6-25"
title: "Thai Thang Karn_Text Classification"
builder: "Apinya Sangkasunya"
builder_info: "-"
thumbnail: "/images/2025/16/01.png"
links:
    github: "https://github.com/nnudee/Thai-Thang-karn_text-classification/tree/main"
    facebook: ""
    blog: "https://medium.com/@nudee.5367/thang-karn-tone-model-thai-text-classification-de98e344b9b7"
---

![image](/images/2025/16/01.png)

- โมเดล text classification แยกข้อความเป็นภาษาไทยที่เป็นบทสนทนาของฝั่งนักเรียนถึงอาจารย์/บุคลากรในโรงเรียน ออกเป็น 5 กลุ่มตามระดับความทางการของภาษาอ้างอิงตามหลักภาษาไทย (พิธีการ, ทางการ, กึ่งทางการ, ไม่เป็นทางการ, กันเอง)
- Dataset มาจากการ Generate Synthetic Dataset ด้วยโมเดล typhoon-v2–70b-instruct และ openAI gpt4.1 โดยวิธีการ Few-shot prompting.
- นำโมเดล Wangchanberta-base-att-spm-uncased และ Phayathaibert มา Finetuned แยกชุดข้อมูล ออกเป็น Train / Test ที่ 80% (33763 ข้อความ) / 20% (8441 ข้อความ)
- ผลลัพธ์ทั้งสองโมเดลมีค่าใกล้เคียงกันมากใน Metric (accuracy 0.989) แต่จะมีค่าของ Macro avg Precision ของ Phayathaibert ที่มากกว่าอยู่ 0.01 (0.990) เราเลยเลือกโมเดล Phayathaibert
