---
    date: "31-7-24"
    title: "AI หมากฮอสสากล"
    builder: "Nutdanai Jaratwiboonkul"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/92/01.jpg"
    links:
        github: "https://github.com/o3-ozone/Draughts"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid0Hb7AQPMEi6jFhpwcJB4gdeahykX4Lu233mAtjCBJ2sAMit2VKGgxLs9i5QPdxTtbl"
        blog: "https://medium.com/@ozone4826/ai-builders-project-%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%81%E0%B8%AE%E0%B8%AD%E0%B8%AA%E0%B8%AA%E0%B8%B2%E0%B8%81%E0%B8%A5-7fbd696a77a7"
---

![image](/images/2023/92/01.jpg)

- ระบบเล่นหมากฮอสสากลด้วย minimax และ alpha pruning; อ่านกฎได้จาก https://lidraughts.org/variant/standard
- เขียน environment สำหรับหมากฮอสสากลขึ้นมาเองบน python
- ระบบเริ่มจาก 1) ตรวจจับตาที่เป็นไปได้ 2) หาตาเดินที่มีโอกาสชนะมากที่สุดด้วย minimax 3) ลดจำนวนตาเดินที่จำเป็นต้องหาด้วย alpha pruning
- สร้าง evaluation function เพื่อแทนโอกาสชนะโดยคำนึงถึง Piece Values, Piece Mobility, King Advancement และ Board Control
- สร้าง agent รูปแบบหลากหลายคือ AIV1 (ไม่มีการแยกแยะระหว่าง mid และ end game), AIV2 (mid และ end game ใช้ evaluation function ต่างกัน), AIV2MID (เน้น mid game มากกว่า), AIV2END (เน้น end game มากกว่า)
- นำ agent ทั้งหมดมาห้ำหั่นกันใน battle royale เพื่อดูผู้ที่ % ชนะมากที่สุด

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> เนื่องจากผมมีความรู้ด้านaiมาบ้างพอสมควร จากหลักสูตรของโรงเรียนในเอก e-ai ที่ผมกำลังศึกษาอยู่ครับ แต่ตัวผมเองอยากจะลองเพิ่มศักยภาพ และ เพิ่มทักษะทางด้าน การprograming ให้ดีกว่าเดิม เพราะหลักสูตรที่โรงเรียน ผมรู้สึกว่าผมยังไม่ได้ลองทำอะไรที่ ท้าทาย และสามารถอัปskillของผมให้สูงขึ้นไปมากกว่าที่เรียนอยู่ได้จึงทำให้ผมอยากจะมีโอกาส ได้ลองเข้ามาในโครงการนี้ เพื่อตัวผมเองจะได้ลองนำเอาความรู้ประสบการณ์ที่มีมาลองคิดค้นโครงการดีๆ ที่ผมสนใจ และได้หาความรู้หาประสบการณ์ใหม่ๆ เพื่อมาคิดค้นโปรเจคที่สามารถท้าทายความสามารถของตัวเอง และ ทำให้ตัวเองได้เก่งยิ่งขึ้น เพื่อจะได้เอาไปทำโปรเจคลงแข่งขัน หรือทำโครงงานประกวดรายการใหญ่ๆได้ครับ
    