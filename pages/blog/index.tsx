import { useLocalization } from '@/src/shared/contexts/LocalizationContext';
import React from 'react';
import BlogLandingPageContainer from 'src/BlogLandingPage/BlogLandingPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';

const BlogLandingPage = ({ topics }: any) => {
  const { Localize } = useLocalization();
  return (
    <>
      <MetaTag
        title={'Beranda || Jakarta Smart City'}
        description={'Beranda Description'}
      />
      <BlogLandingPageContainer />
    </>
  )
};

export default BlogLandingPage;

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  return {
    props: {
      topics: json.topics,
    },
  }
}
