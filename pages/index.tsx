import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import ShowCase from '../components/showcase';
import { getPostList } from '../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const postList = getPostList();

  return {
    props: {
      postList,
    },
  };
};

const Home = ({
  postList,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const years = Object.keys(postList).reverse();

  const [tabIndex, setTabIndex] = useState(
    router.query?.year ? years.indexOf(router.query.year as string) : 0
  );

  useEffect(() => {
    router.push(`?year=${years[tabIndex]}`, undefined, { shallow: true });
  }, [tabIndex]);

  return (
    <Layout>
      <Box textAlign="center" py={6}>
        <Heading as="h1" mb={6}>
          AI Builders Showcase
        </Heading>
        <Tabs
          variant="soft-rounded"
          colorScheme="purple"
          index={tabIndex}
          onChange={setTabIndex}
        >
          <Flex justifyContent="center" mb={6}>
            <TabList gap={4}>
              {years.map((year) => (
                <Tab key={year}>{year}</Tab>
              ))}
            </TabList>
          </Flex>
          <TabPanels>
            {years.map((year) => (
              <TabPanel key={year}>
                <ShowCase data={postList[year]} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  );
};

export default Home;
