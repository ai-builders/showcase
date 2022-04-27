---
date: "2021-07-16"
title: "Making AI Model for Reversi Game"
builder: "Akira Sakashita Worasawate (Akira)"
builder_info: "มัธยมศึกษาปีที่ 2 / กรุงเทพมหานคร"
thumbnail: "/images/2021/013/01.png"
links:
  github: "https://github.com/githubakira/AI_Builders"
  facebook: "https://www.facebook.com/aibuildersx/posts/174435654724882"
  blog: "https://medium.com/@akira-w/ai-เล่นเกม-reversi-5d906a2102e3"
---

![Akira](/images/2021/013/01.png)

- อยากทำโมเดล AI ให้เล่นเกม Reversi หรือ Othello เพราะตัวเองเล่นไม่เก่ง
- เขียน environment เกม Reversi ที่กำหนดขนาดตารางได้ขึ้นเอง
- สร้าง agent ในการเล่นเกม 3 แบบคือ random, minimax (เลือกจำนวน lookahead step ได้) และ Q-learning โดยอาศัยเรียนรู้ตาม simulation tutorial ของ Kaggle [https://www.kaggle.com/simulations](https://www.kaggle.com/simulations)
- ปัญหาที่เจอของ Q-learning คือ Q-table มีขนาดเท่ากับจำนวนตารางที่เป็นไปได้ (state) * จำนวนการเล่นที่เป็นไปได้ (action) ส่งผลให้ไม่สามารถใส่เข้าไปใน RAM ของ Kaggle notebook ได้ อีกทั้งยังต้องใช้เวลานานเกินไปที่จะสร้าง Q-value ที่มีประโยชน์สำหรับทุกคู่ (state, action)
- ส่งผลให้ minimax มีผลชนะที่ดีที่สุดคือ 87% vs random และ 71% vs RL

![Tree Diagram of the Game](/images/2021/013/02.jpg)


![Q-table](/images/2021/013/03.jpg)


![Results](/images/2021/013/04.png)

### แรงจูงใจในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 9 สัปดาห์ที่แล้ว)
> "ผมอยากเข้าโครงการนี้เพราะผมมีความสนใจในการสร้างหุ่นยนต์เหมือนกับ iRobot แต่น่าจะยังทำไม่ได้ ขอเริ่มจากสร้างโปรแกรมที่สามารถเล่นเกมส์ต่างๆเอง หรือเล่นสู้กับเรา เช่นเล่นTetrisเอง ผมเขียน agent ให้เล่น ConnectX [https://www.kaggle.com/c/connectx](https://www.kaggle.com/c/connectx) ให้คอมพิวเตอร์สู้กันเอง แต่ผมยังไม่ได้ใช้ AI เลย ผมอยากทำเกมส์ที่ใช้AI น่าจะเริ่มจากบอร์ดเกมส์ ถ้าเป็นเกมส์ขับรถน่าจะยากขึ้นอีก"