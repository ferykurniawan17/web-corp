import React from 'react';
import MainMenu from 'src/shared/components/MainMenu/MainMenu';
import Footer from 'src/shared/components/Footer/Footer';
import GridNews from 'src/shared/components/GridNews/GridNews';
import DetailHeader from 'src/shared/components/DetailHeader/DetailHeader';

const BlogDetailPageView = () => {
  return (
    <>
      <MainMenu transperant={false} />
      <div className={'bg-container'}>
        <DetailHeader
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          shortDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          authorName='Yasmin Hadi'
          coWritter={['Aditya Gagat']}
          date={'12 Jan 2022'}
        />
        <GridNews title='Artikel Smart City Lainnya' />
      </div>
      <Footer />
    </>
  );
}

export default BlogDetailPageView;
