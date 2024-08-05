---
    date: "31-7-24"
    title: "Breast Cancer Ultrasound Image Segmentation Using U-Net"
    builder: "Suweeraya Noensai"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- กรุงเทพมหานคร"
    thumbnail: "/images/2023/70/01.jpg"
    links:
        github: "https://github.com/nadiasuweer4ya/Breast_Cancer_Ultrasound_Image_Segmentation_Using_U-Net/"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid0EoobSHFDLvVF6SJHvXjRbcDhxTQpM7g7gWwDBne2TFtuKzwZZ7KfBcYvriH8PZrEl"
        blog: "https://medium.com/@24098_79544/breast-cancer-ultrasound-segmentation-using-u-net-9b3435be019c"
---

![image](/images/2023/70/01.jpg)

- โมเดลจำแนกรูปภาพและส่วนภาพอัลตร้าซาวน์เพื่อตรวจมะเร็งเต้านมโดยใช้ข้อมูลจาก Kaggle Breast Ultrasound Images Dataset ด้วยสถาปัตยกรรมU-net
- แบ่งข้อมูล 780 รูปเป็น 80/20 training และ validation set เพื่อวัดผล 1) การจำแนกรูปภาพว่าเป็น normal (ไม่มีเนื้องอก), benign (เนื้องอกไม่อันตราย) และ malignant (เนื้องอกอันตราย) 2) การจำแนกส่วนภาพว่าส่วนไหนเป็น normal, benign และ malignant
- โมเดลสามารถจำแนกภาพได้ด้วย f1-score 0.92; การจำแนกส่วนภาพได้ Mean IoU 0.82
- แรงจูงใจในการทำโครงงาน (ในคำพูดของนักเรียนเอง): “The motivation behind my breast cancer ultrasound image segmentation project stems from my deep desire to protect and care for my loved ones, especially my dear mommy 💖. I yearn for her to enjoy a long and healthy life so that we can continue creating cherished memories together. Through this project, I aim to contribute to early detection and improved treatment of breast cancer, ensuring that not only my mom but also countless individuals worldwide can experience more precious moments with their loved ones.“

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> หนูเคยเข้าแข่งขันศิลหกรรมระดับชาติ คร้งที่ 70 เกี่ยวกับ web application และมีประสบการณ์ในการทำเว็บไซต์ขายสินค้าเกี่ยวกับอุปกรณ์การแพทย์ (เตียงผู้ป่วย) โดยมีการสั่งซื้อและจองสินค้า มีระบบผู้ใช้งานและหนูชอบออกแบบเว็บไซต์ ux/ui ให้เหมาะสมกับผู้ใช้งาน รวมถึงการทำแคตตาล็อกและตัดต่อรูปสินค้าเพื่อแสดงให้ลูกค้ารับชม หนูมีทักษะภาษาอังกฤษที่พอใช้ได้ระดับนึง หนูเคยสอบ sat ที่ bangkok christian international school ได้คะแนน 1100 ซึ่งหนูมีแพลนจะไปสอบอีกครั้งในเดือนพฤษภาคม และสอบ ielts ในช่วงเดือนสิงหาคม หนูจึงคิดว่าการที่หนูจะนำเอาสิ่งที่หนูมีความรู้ติดตัวไปพัฒนาในด้านของ ai จึงเป็นสิ่งที่น่าสนใจอย่างมาก หนูคิดว่ามันเหมือนกับเวทมนต์ที่เราสามารถเสกอะไรก็ได้ออกมาตามที่เราต้องการ นั่นจึงเป็นเหตุผลที่หนูอยกาเข้าร่วมโครงการนี้ถึงแม้ว่าหนูอาจจะไม่ถนัดภาษาไพทอนมากนัก แต่หนูก็พร้อมที่จะเรียนรู้ได้เสมอ เพราะว่าเราคือ homo sapiens ไม่มีใครสามารถมาหยุดเราได้ค่ะในอนาคตหนูมีความฝันที่อยากจะเป็น software engineer ที่ silicon valley โดยหนูได้รับแรงบันดาลใจมาจาก craig federighi และ elon musk ความฝันอันสูงสุดของหนูคือการได้รับทุนป.ตรีเต็มจำนวนไปเรียนต่อที่ต่างประเทศ ที่ (university of toronto) หนูมีแพลนที่จะไปสอบ sat และ ielts ในช่วงกลางปีนี้เพื่อยื่นคะแนนเข้ามาหาลัยในต่างประเทศ หนูมีประสบการณ์ในการรับทำงานเกี่ยวกับการเขียนเว็บไซต์เกี่ยวกับอุปกรณ์การแพทย์ (เตียงผู้ป่วย) และการทำแคตตาลอกเพื่อขายสิ้นค้า โดยในหน้าเว็บจะมีการแสดงสินค้าเตียงผู้ป่วยหลายรุ่น เช่น pf01, pf04, etc. รวมถึงการสั่งซื้อสินค้าจากหน้าเว็บที่เข้ามา แต่เนื่องจากสถานการณ์การเงินที่บ้านไม่เอื้ออำนวย คุณแม่หนูต้องออกไปทำงานคนเดียวส่วนหนูต้องกู้เงินกยศ เดือนละ 1800 บาทและจำเป็นต้องดูแลน้องสาวอนุบาล 3 ทั้งหมด หนูต้องออกไปทำงานเพื่อนำมาจ่ายค่าเทอมให้ตนเองและน้องสาว หนูจึงกลายเป็นเสาหลักของบ้านไปโดยปริยาย แต่ถึงอย่างนั้นแม้ว่าชีวิตหนูจะต้องเจออะไรนักหนาสาหัสมาก็ตามหนูก็จะเข้มแข็งและไม่ยอมแพ้ค่ะไม่ว่าจะต้องแลกมากับอะไรก็ตามหนูก็จะยอมอุทิศเพื่อให้ความฝันของหนูสำเร็จ เพื่อที่จะสามารถดูแลคุณแม่และน้องสาว จากนั้นพาพวกเขาย้ายมาอยู่ที่ต่างประเทศจะได้สบายขึ้น หนูไม่อยากให้ครอบครัวลำบาก เพราะเรามีกันทั้งหมดแค่ 3 คน
    