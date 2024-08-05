---
    date: "31-7-24"
    title: "marching-waifu-x: Diffusion models are zero-shot 3D character generators, too"
    builder: "Tawin Jiramahapokee"
    builder_info: "มัธยมศึกษาปีที่ 5.0 -- เชียงใหม่"
    thumbnail: "/images/2023/103/01.jpg"
    links:
        github: "https://github.com/rossiyareich/marching-waifu-x"
        facebook: "https://www.facebook.com/aibuildersx/posts/pfbid04L3phCWK8Q58Lm78sKeme696d4AMVkHDcct4LaogkwYaTwzR8vu8Boz6MD15DtsGl"
        blog: "https://medium.com/@rwussiya/diffusion-models-are-zero-shot-3d-character-generators-too-6261c264755c"
---

![image](/images/2023/103/01.jpg)

- Pipeline solution สำหรับสร้าง 3D humanoid characters จากข้อความ
- ใช้งาน zero-shot video generation โดยการขยาย U-Net ของ LDM ให้มี temporal consistency โดยดัดแปลงกลไก causal cross-frame attention จาก "ControlVideo: Training-free Controllable Text-to-Video Generation" โดย Zhang et al. (2023)
- เรนเดอร์มุมมอง 360 องศาในแนวราบรอบtemplate 3D model และใช้ OpenPose, depthmap และ normals เป็น conditioning input สำหรับ Multi-ControlNet
- สร้างรูปตัวละครเป็น sparse set และใช้ camera parameters ร่วมกับ InstantNGP ทำ multi-view synthesis
- ลองทำ mesh extraction ด้วย differentiable rasterizer (nvdiffrec) แต่ติดปัญหา non-manifold และ loose geometry เลยต้องใช้ marching cubes ที่ทำให้ได้ mesh ที่มี topology ซับซ้อน
- (ขอเพิ่มเติมฮะ)ช่วงเวลาหลังจากที่ผมทำโปรเจกต์นี้จบได้ไม่นาน ยาวมาจนถึงปัจจุบัน (Q3 2023 
- 2024) สายงาน text-to-3D ก็ได้รับความสนใจขึ้นมากทั้งจากhobbyist และนักวิจัย จนได้มีหลายๆงานออกมาที่สามารถทำ high-quality text-to-3D ได้แล้วผ่าน surface-alignedGaussian splatting คู่กับ T2I models ใหม่ๆ ผ่าน score-distillation sampling กับทำ mesh extraction และ texture refinement ผ่าน two-stage optimization process ทำให้ได้ผลลัพธ์ที่น่าทึ่งมากเลยก็ว่าได้ครับ

### แรงจูงในในการเข้าร่วมโครงการ (จากใบสมัครเข้าร่วมเมื่อ 10 สัปดาห์ที่แล้ว)

> เดิม ผมเป็นคนที่สนใจในเรื่อง game development, 3d art และ computer graphics & interactive simulations เป็นหลัก แต่ด้วยเหตุที่ว่าเกิดการพัฒนา diffusion model ต่างๆขึ้นมาที่สามารถ diffuse รูปที่หลากหลายและตรงกับ prompt ของ user รวมถึงการเกิดของ community รอบๆการสร้าง fine-tuned models เพื่อสนองต่อการสร้างรูปภาพหลากหลายรูปแบบ รวมถึงเทคนิคใหม่ๆ ที่ถูกพัฒนาขึ้นเพื่อปรับ 2d diffusion models ให้ใช้ได้กับการปั้น nerfs ทำให้ผมเห็นถึงความสำคัญของงานสาย ml ต่อ traditional 2d/3d workflows ที่จะช่วยให้ artists กับ illustrators สามารถสร้างสรรค์ผลงานได้สะดวกขึ้น รวมถึง popularity ของ saas ที่ใช้ gpt อย่าง chatgpt, bing chat, copilot ที่พุ่งกระโดดในช่วงเวลาไม่นานที่ผ่านมา ก็เป็นเรื่องที่ผมหันมาสนใจเอาเป็นอย่างมาก เพราะผมคิดว่าหากนำพัฒนาการใหม่ๆของ gpt ไปใช้กับ development workflow แบบดั้งเดิมจะทำให้เกิดการประหยัดเวลาและทรัพยากรเป็นอย่างมาก ทั้งในด้าน game conception, storyboarding รวมถึงสามารถช่วยเหลือ(supplement) technical roles ที่ขาดแคลนผู้เชี่ยวชาญ อย่าง shader development ด้วย ผมจึงสนใจและอยากได้รับประสบการณ์ในงานสาย ml เพื่อใช้ความรู้ไปพัฒนา tooling กับ workflow ใหม่ๆ เพื่อเพิ่มประสิทธิภาพของ field ดั้งเดิมผมคิดว่า first-hand experience ในด้าน 3d art & animation in blender, quixel mixer กับ game development ด้วย unity และ unreal engine รวมถึง basic knowhow around opengl and gpgpu programming (directx compute shaders) จะมีส่วนร่วมในการช่วย leverage โครงงานสำหรับโครงการ ai builders โดยการนำมุมมองมิติใหม่เข้ามาปรับใช้กับหัวข้อโครงงานครับ ผมได้เป็นตัวแทนของศูนย์มช. ในงาน thailand olympiad in informatics 2022 กับเข้าร่วม cmu young game dev camt ที่จัดโดยวิทยาลัยสื่อ ศิลปะและเทคโนโลยีของ มช. กับเคยผ่านรอบคัดเลือกของ nsc ในปี 2021 ผมใช้ภาษา c++, c ในการทำโปรเจกต์รวมถึงภาษา tooling อย่าง cmake เป็นหลัก แต่อยากเรียนรู้เกี่ยวกับ ecosystem ของ python ให้มากขึ้นครับ ถึงแม้ผมยังคงชอบ game development แต่ด้วยเหตุที่ว่าสายงานด้านนั้นสามารถทำให้นักพัฒนา (โดยเฉพาะ aspiring solo กับ indie teams) เกิด burn-out ได้ง่ายมาก จากการที่งานที่ทำส่วนใหญ่ มักมี repetitive tasks มากมาย อย่าง หากจะเขียน surface shader หรือ compute shader ก็จำเป็นต้องเขียน boilerplate เยอะมากเพื่อให้shader compiler สามารถเข้าใจสิ่งที่เราเขียนได้หรือแม้กระทั่งการสร้าง
    