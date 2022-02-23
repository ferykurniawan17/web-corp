import React from 'react';
import BlogCategoryPageContainer from 'src/BlogCategoryPage/BlogCategoryPageContainer';
import MetaTag from 'src/core/Layout/MetaTag';

const CategoryPage = () => {
  return (
    <>
      <MetaTag
        title={'Catetory || Jakarta Smart City'}
        description={'Beranda Description'}
      />
      <BlogCategoryPageContainer />
    </>
  )
};

export default CategoryPage;
