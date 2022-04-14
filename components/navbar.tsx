import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  const {
    isOpen: isOpenAbout,
    onOpen: onOpenAbout,
    onClose: onCloseAbout,
  } = useDisclosure();

  return (
    <Flex
      w="100%"
      height={20}
      borderBottom="2px solid"
      borderBottomColor="purple.200"
      backgroundColor="purple.50"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="container.lg" position="relative">
        <Flex w="100%" height={20} alignItems="center" justifyContent="center">
          <NextLink href="/" passHref>
            <Link _focus={{ outline: 'none' }}>
              <Image
                height={14}
                src="/showcase/favicon/apple-touch-icon.png"
                alt="AI Builders Logo"
              />
            </Link>
          </NextLink>

          <Button
            variant="ghost"
            colorScheme="purple"
            position="absolute"
            right={0}
            cursor="help"
            onMouseEnter={onOpenAbout}
            onMouseLeave={onCloseAbout}
          >
            เกี่ยวกับเรา
          </Button>

          {isOpenAbout && (
            <Box
              position="absolute"
              top={16}
              right={0}
              maxW="lg"
              bg="purple.100"
              rounded="md"
              shadow="md"
              p={6}
              zIndex={10}
            >
              <Text as="p" fontSize={18}>
                โครงการ AI Builders ก่อตั้งขึ้นจากความร่วมมือระหว่าง VISTEC / AI
                Research และ Central Tech
                เพื่อพัฒนาองค์ความรู้ทางด้านวิทยาศาสตร์ข้อมูล (Data Science)
                และปัญญาประดิษฐ์ (Artificial Intelligence / AI)
                ให้กับน้องๆระดับมัธยมต้น-ปลาย
                ที่สนใจอยากเรียนรู้และพัฒนาโครงงานที่ใช้ทักษะในด้านนี้เพื่อประยุกต์ใช้จริงในชีวิตประจำวัน
              </Text>
            </Box>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
