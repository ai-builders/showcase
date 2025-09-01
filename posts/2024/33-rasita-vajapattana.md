---
date: "2023-12-31"
title: "Diabetic Retinopathy Detection AI"
builder: "Rasita Vajapattana"
builder_info: "มัธยมศึกษาปีที่ 5 / กรุงเทพมหานคร / priceless-warhawks"
thumbnail: "/images/00/01.png"
links:
    github: "https://github.com/nanarv/aibuildersdeploy-nana/tree/main"
    facebook: ""
    blog: "https://medium.com/@rasitavajapattana/drd-ai-training-ai-to-detect-diabetic-retinopathy-d40632555ae4"
---

![image](/images/00/01.png)

- โมเดลตรวจ **เบาหวานขึ้นตา** จากคลัง **EyePACS** ~1,427 รูป (ต้อง oversample เพราะ class ไม่สมดุล)
- ปรับจูน **ResNet50** จำแนกความรุนแรง 5 ระดับ (เบื้องต้นความแม่นยำยังจำกัดเพราะรูประดับรุนแรงมีน้อย)
- ใช้เวลาเทรนรวม ~60 ชั่วโมงบน RTX 3080 Ti ประเมินคาร์บอนฟุตพรินต์ ~6.91 kg CO2eq

ทดลองใช้ได้ที่: https://nanarv-aibuildersdeploy-nana-app-teuo8g.streamlit.app/  
อ่านรายละเอียดเพิ่มเติม: https://medium.com/@rasitavajapattana/drd-ai-training-ai-to-detect-diabetic-retinopathy-d40632555ae4  
GitHub repository: https://github.com/nanarv/aibuildersdeploy-nana/tree/main
