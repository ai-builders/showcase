---
date: "14-7-22"
title: "Chaos EDM: Generating EDM Song with VAE (Variational Autoencoder) Spectrogram"
builder: "ณยศ สุวัฒโน (ไมค์กี้)"
builder_info: ""
thumbnail: "/images/2022/34/01.jpg"
links:
    github: "https://github.com/Mikey8943/EDM-spectrogram-vae"
    facebook: "https://facebook.com/aibuildersx/posts/414621047373007"
    blog: "https://medium.com/@nayos.su/generating-edm-song-with-vae-variational-autoencoder-spectrogram-eb6dcd5fc4b8"
---

![image](/images/2022/34/01.jpg)

- โมเดลแต่งเพลง EDM ด้วย Variational Autoencoder (VAE),
- แรงบันดาลใจการความชื่นชอบเพลง EDM และโครงการที่ใช้ deep learning เข้ามาช่วยแต่งเพลงอย่าง Magenta Tensorflow,
- สร้างชุดข้อมูลจาก EDM ประเภท (genre) Hardcore (ดูประเภทของ EDM ทั้งหมดที่ https://music.ishkur.com/) เนื่องจากได้รับความนิยมสูง โดยใช้คลิปจาก YouTube,
- เลือกเพลงที่มีเสียงคนร้องเพลงไม่เกินร้อยละ 60 ของความยาวเพลง, หากมี voice sample แต่ยังมีช่วงที่มี beat หรือ melody เล่นอยู่ด้วยก็พอปล่อยผ่านได้, ทั้งเพลงควรมีความคงที่ของ BPM(Beat per minute) และ Time Signature หรือไม่ได้มีการเปลี่ยนแปลงที่ไม่บ่อยจนเกินไป; ได้เพลงที่ผ่านการทำความสะอาด 1,090 เพลงรวมเวลา 71.8 ชั่วโมง,
- ใช้สถาปัตยกรรม Variational Autoencoder (VAE) เพื่อเรียนรู้การสร้าง spectogram ของเพลง EDM,
- ประเมินคุณภาพด้วย mean opinion score (MOS) จากแบบสอบถาม คน ด้านความชัดเจนของ beat โดยรวม (2.67/5), ความชัดเจนของ melody โดยรวม (2.69/5) และความพึงพอใจโดยรวม (2.77/5),
- มองแนวทางพัฒนาด้วยการเทรนให้นานขึ้น-ข้อมูลมากขึ้น, ใช้ช่วง climax ที่เมโลดี้ชัดเจนเทรน และลองสถาปัตยกรรมใหม่ๆ,
- อัลบั้ม The Final of Chaos? (น่าจะ) เป็นอัลบั้ม EDM ที่สร้างโดยปัญญาประดิษฐ์แรกของไทย ลองฟังกันได้ที่: https://soundcloud.app.goo.gl/17SThr5PisKCFaZC6

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> "กระผมเคยได้มีโอกาสในการร่วมเข้าการแข่งขันในงาน TMLCC เมื่อปี 2021 โดยที่ผมได้ช่วยเหลือในการนำ dataset มา clean และ select data ที่น่าสนใจนำไปใช้ใน algorithm มีแรงบันดาลใจที่จะเขียนโค้ดจากเพื่อนของผมที่แสดงให้เห็นถึงความสำคัญและศักยภาพของ AI ทำให้ผมได้ศึกษาและเรียนรู้การเขียนโค้ดมาเรื่อยๆในระยะเวลา 1 ปีที่ผ่านมานี้แต่ยังไม่ได้เริ่มเขียนโปรเจคแบบจริงๆจังๆสักครั้งเลยอยากจะลองทำดูในโครงการนี้ครับ  เหตุผลที่ผมอยากเข้าร่วมโครงการนี้เริ่มต้นมาจากการได้เห็นเพื่อนของผมคนหนึ่งที่ได้มีความสนใจในด้าน AI ได้ชวนผมมาทำโครงงานแข่งด้าน AI แล้วและยังเคยเข้าร่วมโครงการนี้ได้มาชวนผมให้มาลองศึกษาและเข้าใจการทำงานและการสร้าง AI อีกทั้งผมยังเคยได้เข้าค่ายแพทย์ของมหาลัยวิทยาลัยธรรมศาสตร์ โดยในค่ายนั้นได้มีการบรรยายเกี่ยวกับ Digital Hospital ในหัวข้อของ AI ทำให้ผมมีความสนใจในด้านนี้อยู่แล้วได้ตัดสินใจที่จะเข้าร่วมโครงการนี้ ทั้งนี้ผมเลยเห็นโครงการนี้เป็นโอกาสอันดีที่ควรจะคว้าไว้เพื่อต่อยอดในการศึกษาและการงานของผมในอาชีพแพทย์ได้ครับ  เพลงในโลกนี้มีมากกว่าที่จะนับได้ทั้งหมด ทั้งเป็นเพลงที่เป็นที่รู้จักกันอย่างดีหรือมีคนรู้จักเพียงหยิบมือ แต่ทั้งนี้เพลงก็จะถูกแบ่งประเภทด้วยสิ่งที่เรียกว่า Genre หากแต่เป็นเพียงสมัยก่อนยุคเพลง Digital การใช้หูฟังเพื่อแบ่งแยกนั้นอาจไม่ต้องการประสบการณ์ในการฟังเพลงที่มากนัก แต่กระนั้นเองยุคสมัยในการผสมผสานการทำเพลงแบบดิจิตอลก็เข้ามาถึงทำให้เกิดเพลงประเภทหนึ่งขึ้นมานั้นคือ Electronic Music แต่ส่วนมากเราจะได้ยินกันทั่วไปคือ EDM หรือ Electronic Dance Music อย่างไรก็ตาม electronic music นั้นเป็นเพลงที่เกิดขึ้นจากเสียงสังเคราะห์ทำให้เกิดความหลากหลายที่มากกว่าเดิมจากเพลงที่เกิดจากเครื่องดนตรีตามปกติทำให้เกิด genre และ subgenre ขึ้นมากมายและมีจำนวนเพิ่มขึ้นอย่างไม่หยุดอันเป็นเหตุทำให้ทำให้หลายบุคคลเกิดความสับสนและโต้แย้งกันถึง genre ของเพลงบางเพลงจนถึงวันนี้ ตัวอย่าง genre สามารถหาดูได้ทางนี้ https://www.reddit.com/r/electronicmusic/comments/dbxf5x/extremely_genre_specific_relectronicmusic/ ผมจึงมีความคิดที่จะทำ AI ที่สามารถรับไฟล์เพลง หรือถ้าเป็นไปได้ก็รับค่า input จากเพลงที่เล่นอยู่และบอก Genre ใหญ่ๆให้คนทั่วไปเข้าถึง Genre ของ EDM ได้มากขึ้น ส่วนชุดข้อมูลนั้นเราสามารถหาโหลดได้จาก Youtube, Spotify, Soundcloud, Mixcloud เป็นต้น"