import React from 'react';
import MainMenu from 'src/shared/components/MainMenu/MainMenu';
import Footer from 'src/shared/components/Footer/Footer';
import GridNews from 'src/shared/components/GridNews/GridNews';

const BlogDetailPageView = () => {
  return (
    <>
      <MainMenu />
      <div className={'bg-container'}>
        <GridNews title='Artikel Smart City Lainnya' />
      </div>
      <Footer />
    </>
  );
}

export default BlogDetailPageView;
