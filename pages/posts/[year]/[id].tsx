import { Flex, Heading } from "@chakra-ui/react";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useEffect } from "react";
import { getAllPostIds, getPostData, PostData } from "../../../lib/posts";

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
  const postData: PostData = getPostData(year as string, id as string);

  return {
    props: {
      postData,
    },
  };
};

const Post: NextPage = ({
  postData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title } = postData;

  useEffect(() => {
    console.log({ postData });
  }, [postData]);

  return (
    <Flex>
      <Heading as="h1">{title}</Heading>
    </Flex>
  );
};

export default Post;
