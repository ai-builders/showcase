import { Code, Heading, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <VStack direction="column" gap={2} py={8}>
        <Heading as="h1"> AI Builders Showcase</Heading>
        <Text as="p">
          Check <Code>README.md</Code>!
        </Text>
      </VStack>
    </Layout>
  );
};

export default Home;
