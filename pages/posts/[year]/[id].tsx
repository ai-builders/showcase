import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
} from '@chakra-ui/react';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useEffect } from 'react';
import { FaFacebook, FaGithub, FaPenAlt } from 'react-icons/fa';
import Layout from '../../../components/layout';
import useMarkdownProcessor from '../../../hooks/useMarkdownProcessor';
import { getAllPostIds, getPostData, PostData } from '../../../lib/posts';

const buttonMap: { [index: string]: any } = {
  github: {
    text: 'Github',
    icon: <FaGithub />,
  },
  blog: {
    text: 'Blog',
    icon: <FaPenAlt />,
  },
  facebook: {
    text: 'Facebook Post',
    icon: <FaFacebook />,
  },
};

const Post: NextPage = ({
  postData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, content, builder, builder_info, links } = postData;
  const reactContent = useMarkdownProcessor(content);

  return (
    <Layout>
      <Box pt={6} pb={12}>
        <Container maxW="container.lg">
          <Box textAlign="center" mb={6}>
            <Heading as="h1" size="2xl" mb={6}>
              {title}
            </Heading>
            <Heading as="h4" size="md" mb={6}>
              โดย {builder} • {builder_info}
            </Heading>
            <HStack justifyContent="center">
              {Object.entries(links).map(([key, link]) => {
                if (!link) {
                  return null;
                }

                return (
                  <Link
                    key={key}
                    href={link as string}
                    _hover={{ textDecoration: 'none' }}
                    isExternal
                  >
                    <Button
                      size="sm"
                      colorScheme="purple"
                      variant="outline"
                      leftIcon={buttonMap[key].icon}
                      px={2}
                    >
                      {buttonMap[key].text}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          </Box>
          {reactContent}
        </Container>
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return { props: {} };
  }

  const { id, year } = params;
  const postData: PostData = await getPostData(year as string, id as string);

  return {
    props: {
      postData,
    },
  };
};

export default Post;
