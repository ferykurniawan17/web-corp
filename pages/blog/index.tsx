import React from 'react';
import BlogLandingPageContainer from 'src/BlogLandingPage/BlogLandingPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';

const BlogLandingPage = () => {
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
