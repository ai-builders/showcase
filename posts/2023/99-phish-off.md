---
    date: "31-7-24"
    title: "Phish-Off"
    builder: "Plengpin Tongdon-Ngao"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/99/01.jpg"
    links:
        github: "https://github.com/pxyzP/phishoff/blob/main/phishoffbert_final.ipynb"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid02AH3TWCpCRF6pSAEgREubZwPRwvW8PGzeUALFJaxKor6oPr1DQe3sYkij4L8RjmWrl"
        blog: "https://medium.com/@plengpintongdonngao/phish-off-safe-urls-for-all-25109de06391"
---

![image](/images/2023/99/01.jpg)

- โมเดลตรวจจับ URL ที่มีความเสี่ยงเช่น เว็บไซต์ธนาคารปลอม แก๊งคอลเซ็นเตอร์ ฯลฯ
- ชุดข้อมูลจาก Kaggle และ Webscale โดยทำให้จำแนกประเภทเป็น safe (benign) และ unsafe (defacement, phishing, malware)
- ทดลองการสร้างโมเดล 2 รูปแบบคือ 1) ทำ feature engineering จาก URL แล้วใช้โมเดลสำหรับข้อมูลตาราง เช่น XGBoost และ Random Forest 2) จัดการ URL เสมือนข้อความและใช้ BERT ในการจำแนกประเภท
- Feature engineering หลากหลายวิธี เช่น นับจุด/@/www/?/=, นับความยาว URL, คล้าย URL ใน black list หรือไม่, ความยาวของ directory แรก ฯลฯ
- โมเดลแบบข้อมูลตารางได้ความแม่นยำมากกว่า แต่มี false positive เยอะกว่า เช่น บอกว่ากูเกิ้ลเป็น URL อันตราย จึงตัดสินใจใช้ BERT ที่ความแม่นยำไม่ต่างกันมาก
- แต่ยังพบปัญหา false positive และขนาดโมเดล BERT ที่ใหญ่เกินไปจึงทำการทำความสะอาดชุดข้อมูลอีกครั้งแล้วเปลี่ยนมาใช้ Logistic Regression ที่เป็นโมเดลที่ซับซ้อนน้อยที่สุด แต่ด้วยชุดข้อมูลที่ใช้ฝึกที่สะอาดกว่าทำให้ได้ผลดีที่สุด

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> ดิฉันมีความสนใจเรื่องการเขียนโปรแกรมและการพัฒนาสิ่งนวัตกรรมใหม่ๆเป็นอย่างมาก และอยากที่จะศึกษาต่อในเส้นทางนี้ในอนาคต แต่ด้วยสถานการณ์โควิดทำให้โรงเรียนยกเลิกการเรียนวิชาเขียนโปรแกรม ทำให้ที่ผ่านมาเรียนรู้ด้วยตนเองมาตลอด พอมีพื้นฐานจากการเข้าค่ายต่างๆเล็กน้อย ดิฉันอยากเข้าโครงการนี้เพื่อที่จะได้ศึกษาหาประสบการณ์การทำโครงงาน การเรียนเขียนโปรแกรมเพิ่มเติม เพื่อพัฒนาตนเองและมาหาเพื่อนที่สนใจเรื่องเดียวกัน ดิฉันมองเห็นว่าโครงการนี้เป็นโครงการที่จะให้โอกาสและเปิดทางให้ดิฉันพัฒนาตนเองไปได้อีกก้าวหนึ่ง เห็นว่าโครงการนี้มีกิจกรรมที่น่าสนใจมาก ดิฉันเชื่อว่าโครงการนี้จะให้ประสบการณ์ดีๆกลับไป ดิฉันจึงอยากจะร่วมกิจกรรมมากจริงๆ มีความมุ่งมั่นตั้งใจมากที่จะสมัครเข้ามาในโครงการนี้ค่ะดิฉันเป็นเด็กคนหนึ่งที่มีความฝันอยากจะเป็นคนเขียนโค้ดพัฒนาโปรแกรมมมาพัฒนาโลกของเราค่ะ ในตอนแรก ก็คิดว่ามันเท่ห์ดี แต่พอได้ลองเข้าค่ายต่างๆ ค่ายวิศวกรรมคอมพิวเตอร์ ของ ม.เกษตร, จุฬา ค่ายหุ่นยนต์มหิดล ได้ลองเขียนโปรแกรม มีผลงานลองทำโครงงานเขียนโปรแกรมส่งไป rsu ได้รองชนะเลิศอันดับหนึ่งด้วยตัวคนเดียว(เป็นงานแรกทที่ทำส่งไปภูมิใจมากค่ะ) แล้วก็ได้เป็นส่วนหนึ่งในทีมnscของโรงเรียนที่ส่งไปเข้าร่วม แม้จะไม่ติดแต่หนูก็กับเพื่อนๆก็ตั้งใจทำกันมากได้เห็นโครงงานของรุ่นพี่ที่เขาทำสำเร็จ ซึ่งทำให้หนูประทับใจมากๆ แล้วก็ทำให้ได้รู้ว่า นี่แหละ คือที่ของเรา หนูหลงใหลกับมันมากๆ ทั้งการเขียนโค้ดภาษาต่างๆ หรือสังคมการเขียนโค้ดที่ทุกคนตลกมากๆแล้วก็ดูมีความสุขกับงานของตัวเอง หนูได้พบว่าการเป็นคนพัฒนาโปรแกรม เป็นคนที่สร้างนวัตกรรมต่างๆไม่ใช่แค่เท่ห์อย่างเดียว แต่บุคคลเหล่านี้แหละคือคนที่จะเปลี่ยนโลกของเรา ทำให้หนูอยากที่จะศึกษาในเรื่องนี้ ต่อยอดสายงานนี้ในอนาคต ทำให้หนูมีแรงบันดาลใจ อยากที่จะเป็นแบบพวกเขาบ้าง หนูอาจจะมีประสบการณ์น้อย พื้นฐานไม่แน่นมาก แต่มีความมุ่งมั่นตั้งใจและพร้อมที่จะพัฒนาตัวเองอยู่เสมอค่ะ หากว่าท่านกรรมการรับหนูเข้าไป หนูพร้อมที่จะพัฒนาตัวเอง และเรียนรู้สิ่งใหม่ๆเสมอค่ะ :)
    