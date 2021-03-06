import { Container, Flex, Spacer } from '@chakra-ui/react';
import Footer from './footer';
import Navbar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      h="100vh"
      flexDirection="column"
      background="#fefefd"
      color="gray.600"
    >
      <Navbar />
      <Container maxW="container.xl">{children}</Container>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Layout;
