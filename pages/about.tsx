import { Heading, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <VStack direction="column" gap={2} py={8}>
      <Heading as="h1"> AI Builders Showcase</Heading>
      <Text as="p">
        โครงการ AI Builders ก่อตั้งขึ้นจากความร่วมมือระหว่าง VISTEC / AI
        Research และ Central Tech เพื่อพัฒนาองค์ความรู้ทางด้านวิทยาศาสตร์ข้อมูล
        (Data Science) และปัญญาประดิษฐ์ (Artificial Intelligence / AI)
        ให้กับน้องๆระดับมัธยมต้น-ปลาย
        ที่สนใจอยากเรียนรู้และพัฒนาโครงงานที่ใช้ทักษะในด้านนี้เพื่อประยุกต์ใช้จริงในชีวิตประจำวัน
      </Text>
    </VStack>
  );
};

export default About;
