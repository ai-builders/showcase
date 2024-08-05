---
    date: "31-7-24"
    title: "How to know percent your sound?"
    builder: "Pittinan Wettayanon"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/79/01.jpg"
    links:
        github: "https://github.com/hoggyna/AI-Builder"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid02o48nSiJDLBpPVpcpHiuTxznAid8wG2oNeisUf56aA2VLgccC4T1PRcGq7qrxBdoFl"
        blog: "https://httpris.medium.com/how-to-know-percent-your-sound-ff589158730e"
---

![image](/images/2023/79/01.jpg)

- โมเดลตรวจสอบสำเนียงการพูดภาษาต่างประเทศ (ยกตัวอย่างด้วยภาษาจีน) ว่าคล้าย native speaker แค่ไหน
- ใช้โมเดล pretrained jonatasgrosman/wav2vec2-large-xlsr-53-chinese-zh-cn สำหรับถอดเสียงพูดภาษาจีนเป็นตัวอักษรจีนเป็นตัวตัดสินว่า “พูดคล้าย native speaker” แค่ไหน; สมมุติฐานหลักคือ Wav2Vec2 น่าจะถูก pretrain มาจาก native speaker ล้วน เพราะฉะนั้นยิ่งเสียงพูดใกล้เคียง native speaker โมเดลยิ่งควรทำนาย token ด้วย logit ที่มีค่าสูง
- ใช้ข้อมูล non-native speaker จาก LATIC และ native speaker จาก AISHELL-3; ทำความสะอาดข้อมูลให้เหลือแต่ตัวอักษรภาษจีนแล้ว แบ่งข้อมูลเป็น train-valid-test ที่อัตราส่วน 80/10/10
- ทำนายว่าเสียงเป็น native / non-native ด้วย cut-off ที่ 0.5
- ได้ f1 ใน test set อยู่ที่ 0.91 สำหรับเสียงพูด native และ 0.55 สำหรับเสียงพูด non-native; แสดงให้เห็นว่า pretrained model ยังทำการแยกแยะเสียงทั้งสองแบบไม่ดีพอ
- ได้ทำการ finetune โมเดลเพื่อพัฒนาความสามารถ แต่ผลไม่เป็นไปตามที่หวัง
- ลองพูดใส่ไมค์ 2-3 วินาทีเล่นได้ทาง streamlit

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> เพราะว่า ai buildersครั้งก่อนผมมาฟังเพื่อนบรรยายโครงการทำให้ผมรู้สึกรู้สึกตื่นเต้นและประใจมาก จนเกิดแรงบันดาลใจใน จึงอยากได้ความรู้เชิงลึกของ ai builders เลยตั้งเป้าหมายว่าจะเข้าai builders ปีนี้เพื่อchallenge ตัวเอง และหาความรู้ให้ตัวเองมีความตั้งใจเป็นอย่างมาก และพร้อมทุ่มเทเพื่อโครงการ และ จะได้ผึกงานกับอาจารย์ อ.ดร. ฐิติพัทธ อัชชะกุลวิสุทธิ์ ทำให้มีแรงบันดาลใจเป็นอย่างมากผลงาน(nsc2023กำลังทำอยู่)
