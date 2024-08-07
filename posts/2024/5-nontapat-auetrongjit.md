---
date: "31-7-24"
title: "Student Behavior Detector in Classroom"
builder: "นนทพัทธ์ เอื้อตรงจิตต์(เฟิร์ม)"
builder_info: "สาธิตแห่งมหาวิทยาลัยเกษตรศาสตร์ ศูนย์วิจัยและพัฒนาการศึกษา / กรุงเทพมหานคร"
thumbnail: "/images/2024/5/01.png"
links:
    github: "https://github.com/nontaphatfirm/Classroom-Behavior-Detector"
    facebook: ""
    blog: "https://medium.com/@nontaphatfirm/student-behavior-detector-in-classroom-20f2fe5cc8a3"
---

![image](/images/2024/5/01.png)

- สร้างโมเดล Student Behavior Detector ช่วยแก้ปัญหาและเพิ่มประสิทธิภาพการเรียนรู้ของนักเรียน
- การสร้าง Student Behavior Detector เป็นการใช้สถาปัตยกรรม YOLO  หลักการคือ มันจะพยายาม rectangle object เหล่านั้นไว้ (โดยหาจุดกึ่งกลางของแต่ละ object แล้วค่อยครอบ box เอาไว้) และบอกออกมาว่าสิ่งนั้นคืออะไร โดยมี model พื้นฐานอยู่แล้วประมาณ 80 classes ที่ถูกเทรนเอาไว้ และสามารถบอกได้ด้วยว่าความน่าจะเป็นมีเท่าไหร่ จาก model ที่มี
- ใช้ Dataset จาก SCB-dataset3-S แล้วนำมา split data อีกทีด้วยวิธี K-Fold Cross-Validation ได้ 5 Dataset ที่แตกต่างกัน
- ในส่วนของการเทรนได้ทดลองใช้สถาปัตยกรรม YOLOv8x , YOLOv9e และ YOLOv10x
-วัดผลโดยการประเมิน Precision ,Recall ,mAP50 ,mAP50-95
โดยได้ผลออกมาคือ YOLOv9e ทำ performance ออกได้ดีที่สุดบน Test set คือ 
(fold0) Precision : 70.1 % ,Recall : 74.6% , mAP50 : 77.6 % , mAP50-95 : 60.5 %
(fold2) Precision : 75.2% ,Recall : 70.5% , mAP50 : 77.4 % , mAP50-95 : 61.1 %
(fold3) Precision : 72.2 % ,Recall : 73% , mAP50 : 77.8 % , mAP50-95 : 61.1 %
 ซึ่ง fold0 จะมีค่า Recall สูงสุด และ fold2 จะมีค่า Precision สูงสุด และ fold3 จะสมดุลระหว่าง Precision กับ Recall
-เทียบกับ SCB-dataset3 ที่ train YOLOv7x ไว้ ค่า Precision Recall mAP50 และ mAP50-95 ของเราจะต่ำกว่าเล็กน้อยเนื่องจากเรา split data ทำให้จำนวน train data น้อยลง แต่จะทำให้สามารถมั่นใจได้ว่า โมเดลของเราจะทำงานมีประสิทธิภาพประมาณนี้กับข้อมูลที่ไม่เคยเห็นมาก่อน 
-จาการวิเคราะห์ข้อผิดพลาดของตัว Student Behavior Detector พบว่าโมเดลมักทำนายไม่แม่นย่ำเมื่อเจอ class writting ซึ่งคาดว่าน่าจะมาจากจำนวน data class writting นั้นมีน้อยกว่า class อื่นๆ และพบว่า model ชอบทายวงที่ background อยู่ คาดว่าจำนวน data นั้นน้อยเกินไป


### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> ผมสนใจค่ายนี้เป็นอย่างมากครับ เมื่อปีที่แล้วผมก็สมัครเข้าโครงการแต่ไม่ได้รับคัดเลือกเข้าโครงการ เนื่องจากมีเวลาเตรียมตัวน้อยติดช่วงสอบปลายภาคยังบริหารเวลาได้ไม่ดี แต่ครั้งนี้ผมตั้งใจเต็มที่ที่จะมาเข้าค่ายให้ได้ เนื่องจากผมอยากมีความรู้เพิ่มเติมในการทำ senior project ก่อนจบมัธยมศึกษาตอนปลาย ผมอยากได้ทั้งความรู้ คำแนะนำและอาจารย์ที่ปรึกษามาช่วยแนะนำโครงการที่เกี่ยวกับ ai facial recognition ไม่เพียงแต่สร้างโปรแกรมได้ แต่ต้องการต่อยอดไปเป็นระบบการเช็คชื่อเข้าเรียนในโรงเรียนของผมด้วยครับ ซึ่งที่ รร. ของผมยังไม่มีผู้เชี่ยวชาญที่จะให้คำแนะนำในเรื่องนี้และช่วงปิดเทอมนี้ผมต้องทำ senior project เกี่ยวกับ ai ที่ผมสนใจให้สำเร็จภายในเดือน ส.ค นี้ ผมหวังเป็นอย่างยิ่งว่าทางสถาบันฯจะให้โอกาสผมได้เข้าไปเรียนรู้กับอาจารย์ผู้ทรงคุณวุฒิ และได้รับคำปรึกษาจากการเข้าค่ายครั้งนี้ครับ และผมสัญญาว่าจะเอาความรู้ความสามารถไปแบ่งปันประสบการณ์ให้กับเพื่อนๆ น้องๆ ที่ รร. เพื่อต่อยอดในการประดิษฐ์ ai ใหม่ๆ ในอนาคตครับ นอกจากนี้ผมเองก็สนใจด้าน ai เป็นอย่างมาก และตั้งเป้าหมายที่จะเรียนและทำงานด้านนี้ เพื่อทำให้คนไทยได้มีโอกาสพัฒนา นวัตกรรมใหม่ๆให้กับคนไทย ผมภูมิใจที่ได้ทราบว่าประเทศไทยมี thailand digital valley ซึ่งจะเป็นแหล่งรวมของคน it และ start up รุ่นใหม่ ทั้งในประเทศและต่างประเทศ อยู่ที่นี่และ
    