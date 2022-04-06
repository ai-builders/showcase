import { Box, Flex, Grid, Image, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ReactNode } from "react";

interface PostData {
  builder: string;
  builder_info: string;
  date: string;
  demo: string;
  external_post_link: string;
  github: string;
  id: string;
  kaggle: string;
  thumbnail: string;
  title: string;
  video: string;
  year: string;
  youtube: string;
}

interface ShowcaseProps {
  data: PostData[];
}

const DummyBox = ({ children }: { children?: ReactNode }) => (
  <Box w="100%" h={{ base: "200px", md: "160px" }} backgroundColor="purple.300">
    {children}
  </Box>
);

const ShowCase = ({ data }: ShowcaseProps) => {
  const { thumbnail } = data[0];

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
    >
      <DummyBox>
        <Image src={thumbnail} w="100%" h="100%" />
      </DummyBox>
      <DummyBox />
      {/* <DummyBox />
      <DummyBox />
      <DummyBox /> */}
    </Grid>
  );
};

export default ShowCase;
