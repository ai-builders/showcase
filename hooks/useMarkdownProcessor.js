import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { createElement, Fragment, useEffect, useState } from 'react';
import rehypeReact from 'rehype-react';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';

const ImageRenderer = (props) => {
  return (
    <Flex as="span" w="100%" maxH="55vh" justifyContent="center" mt={2} mb={6}>
      <Image
        objectFit="contain"
        borderRadius="lg"
        overflow="hidden"
        alt={props.alt}
        {...props}
      />
    </Flex>
  );
};

const BlockQuote = (props) => {
  return (
    <Box
      backgroundColor="purple.50"
      px={6}
      py={6}
      pb={2}
      borderRadius="md"
      borderLeftWidth="4px"
      borderLeftStyle="solid"
      borderLeftColor="purple.300"
      {...props}
    />
  );
};

/**
 * TODO: typescript later
 */
const useMarkdownProcessor = (text) => {
  const [Content, setContent] = useState(Fragment);

  useEffect(() => {
    remark()
      .use(remarkRehype)
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
          h1: (props) => <Heading as="h1" size="2xl" my={6} {...props} />,
          h2: (props) => <Heading as="h2" size="xl" my={6} {...props} />,
          h3: (props) => <Heading as="h3" size="lg" my={6} {...props} />,
          h4: (props) => <Heading as="h4" size="md" my={6} {...props} />,
          h5: (props) => <Heading as="h5" size="sm" my={6} {...props} />,
          h6: (props) => <Heading as="h6" size="xs" my={6} {...props} />,
          ol: (props) => <OrderedList mb={4} {...props} />,
          ul: (props) => <UnorderedList mb={4} {...props} />,
          li: (props) => <ListItem {...props} />,
          p: (props) => <Text as="p" mb={4} {...props} />,
          a: (props) => <Link color="purple.400" {...props} />,
          blockquote: BlockQuote,
          img: (props) => <ImageRenderer {...props} />,
        },
      })
      .process(text)
      .then((file) => setContent(file.result));
  }, [text]);

  return Content;
};

export default useMarkdownProcessor;
