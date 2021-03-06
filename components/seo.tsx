import Head from 'next/head';

interface SEOProps {
  title?: string | undefined | null;
  description?: string | undefined | null;
  image?: string | undefined | null;
  url?: string | undefined | null;
}

const BASE_URL = 'https://ai-builders.github.io/showcase';
const fallbacks = {
  title: 'AI Builders Showcase',
  description: 'Showcase of previous AI Builders projects',
  image: '/og/14-04-2022.jpeg',
  url: 'https://www.facebook.com/aibuildersx',
};

const SEO = ({ title, description, image }: SEOProps) => {
  return (
    <Head>
      <title>{title || fallbacks.title}</title>
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta
        property="og:title"
        content={title || fallbacks.title}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={description || fallbacks.description}
        key="ogdesc"
      />
      <meta
        property="og:image"
        content={`${BASE_URL}${image || fallbacks.image}`}
        key="ogimage"
      />
      <meta
        property="og:site_name"
        content={fallbacks.title}
        key="ogsitename"
      />
    </Head>
  );
};

export default SEO;
