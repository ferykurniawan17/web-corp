import React from 'react';
import MainMenu from 'src/shared/components/MainMenu/MainMenu';
import BannerSlider from 'src/shared/components/BannerSlider/BannerSlider';
import CategoryMenu from 'src/shared/components/CategoryMenu/CategoryMenu';
import HighlightNews from 'src/shared/components/HighlightNews/HighlightNews';
import Footer from 'src/shared/components/Footer/Footer';
import GridNews from 'src/shared/components/GridNews/GridNews';
import { BannerItemType } from '../shared/types/BannerType';

const BlogLandingPageView = () => {
  const banner: BannerItemType = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    alt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    imageUrl: 'https://pusdatin.kemkes.go.id/assets/js/JssorSlider/img/landscape/x01.jpg.pagespeed.ic.JJ1gF1F7s1.webp',
    category: 'Banner',
    date: '12 Jan 2022',
  };

  const menus = [
    { label: 'SMART CITY', link: '/blog/kategori/smart-city' },
    { label: 'SMARTCITIZEN' , link: '/blog/kategori/smartcitizen' },
    { label: 'TEKNOLOGI' , link: '/blog/kategori/teknologi' },
    { label: 'JAKARTA HIJAU', link: '/blog/kategori/jakarta-hijau'  },
    { label: '#JAKIBIKINGAMPANG', link: '/blog/kategori/jakibikingampang'  },
    { label: 'COVID-19', link: '/blog/kategori/covid-19'  },
    { label: 'CEPAT RESPON', link: '/blog/kategori/cepat-respon'  },
    { label: 'LAYANAN' , link: '/blog/kategori/layanan' },
  ];

  return (
    <>
      <MainMenu transperant={true} />
      <BannerSlider data={[banner, banner, banner]} />
      <CategoryMenu menu={menus} />
      <div className={'bg-container'}>
        <HighlightNews title='Berita Pilihan' />
        <GridNews title='Artikel Lainnya' />
      </div>
      <Footer />
    </>
  );
}

export default BlogLandingPageView;
