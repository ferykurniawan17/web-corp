import React from 'react';
import BlogDetailPageContainer from 'src/BlogDetailPage/BlogDetailPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';

const BlogDetailPage = () => {
  return (
    <>
      <MetaTag
        title={'Detail || Jakarta Smart City'}
        description={'Beranda Description'}
      />
      <BlogDetailPageContainer />
    </>
  )
};

export default BlogDetailPage;
