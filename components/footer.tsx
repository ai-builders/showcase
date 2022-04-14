import {
  Box,
  Button,
  Container,
  HStack,
  Link,
  LinkProps,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const IconLink = (props: LinkProps) => {
  return (
    <Link
      color="purple.400"
      _hover={{ textDecoration: 'none' }}
      isExternal
      {...props}
    />
  );
};

const Footer = () => {
  // const router = useRouter();

  return (
    <Box w="100%" p={4} bg="purple.100">
      <Container textAlign="center">
        <Text fontWeight="bold" fontSize="md" mb={2}>
          Follow AI Builders
        </Text>
        <HStack gap={2} justifyContent="center">
          <IconLink href="https://www.facebook.com/aibuildersx">
            <FaFacebook size={24} />
          </IconLink>
          <IconLink href="https://github.com/ai-builders">
            <FaGithub size={24} />
          </IconLink>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
