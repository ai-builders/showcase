---
date: "10-6-25"
title: "Aib5 Pcapattackclassifier"
builder: "Pichamon Muroh"
builder_info: "-"
thumbnail: "/images/2025/8/01.png"
links:
    github: "https://github.com/Mc4minta/AIB5-PcapAttackClassifier"
    facebook: ""
    blog: "https://medium.com/@mc4minta/aib2025-malicous-pcap-file-classifier-8014e98f8d02"
---

![image](/images/2025/8/01.png)

- โมเดลทำนาย Packet จาก Network Capture (.pcap) ว่าเป็น Attack ประเภทอะไร เช่น FTP-Bruteforce, SSH-Bruteforce
- แปลงไฟล์ .pcap ให้เป็น Bi-directional flow โดยใช้ CICFlowmeter V.3 เพื่อให้ข้อมูลเข้าใจง่ายขึ้นสำหรับโมเดล รวบรวมและรวมชุดข้อมูล Train จาก CIC-IDS-2017 และ CSE-CIC-IDS2018  และ Train ด้วย Random Forest
- แปลง Prediction Flow by Flow เป็น Packet by Packet ด้วยการใช้ python simulate logic ของ CICFlowMeter-V.3 บางส่วน
- โมเดลจำแนกประเภทการโจมตีได้ดีมากในกลุ่ม Benign และ  Bruteforce (FTP และ SSH) แต่ยังคงมีจุดที่ต้องปรับปรุงในบางประเภท DoS ส่วน PortScan ทายไม่ถูกเลย
- ผู้ใช้สามารถอัพโหลดไฟล์ .pcap เพื่อดูผล Prediction ราย Packet และ เลือก Packet เพื่อให้ LLM สรุปข้อมูลต่างๆ และถาม LLM เกี่ยวกับ Packet นั้นต่อไปได้
