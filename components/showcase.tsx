import { Box, Grid, Image, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface PostData {
  date: string;
  title: string;
  builder: string;
  builder_info?: string;
  thumbnail: string;
  links?: {
    github?: string;
    facebook?: string;
    blog?: string;
  };
  id: string;
  year: string;
}

interface ShowcaseProps {
  data: PostData[];
}

interface ShowcaseItemProps {
  title: string;
  builder: string;
  thumbnail: string;
  uri: string;
}

const ShowcaseItem = ({
  title,
  builder,
  thumbnail,
  uri,
}: ShowcaseItemProps) => {
  return (
    <Box
      backgroundColor="purple.300"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      borderWidth={1}
      borderStyle="solid"
      borderColor="gray.100"
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform 0.2s',
      }}
    >
      <NextLink href={uri} passHref>
        <Link _hover={{ textDecoration: 'none' }}>
          <Box w="100%" h="200px">
            <Image
              objectFit="cover"
              src={`/showcase${thumbnail}`}
              w="100%"
              h="100%"
              alt={title}
            />
          </Box>

          <Box
            color="gray.50"
            fontWeight="bold"
            fontSize="90%"
            w="100%"
            h="62.5px"
            backgroundColor="blackAlpha.300"
            px={4}
            py={2}
          >
            <Box>
              <Text isTruncated>{title}</Text>
              <Text isTruncated>{builder}</Text>
            </Box>
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
};

const ShowCase = ({ data }: ShowcaseProps) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={4}
    >
      {data.map(({ id, year, title, builder, thumbnail }) => (
        <ShowcaseItem
          key={id}
          title={title}
          builder={builder}
          thumbnail={thumbnail}
          uri={`/${year}/${id}`}
        />
      ))}
    </Grid>
  );
};

export default ShowCase;
