import React from 'react';
import styles from './BannerSlider.module.css';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerItemType } from '../../types/BannerType';
import BannerSliderInfo from '../BannerSliderInfo/BannerSliderInfo';

type BannerSliderProps = {
  data: Array<BannerItemType>;
};

const BannerSlider = ({ data }: BannerSliderProps) => {
  return (
    <div className={'banner-slider'}>
      <Carousel
        // autoPlay
        showThumbs={false}
        showArrows
        stopOnHover
        swipeable
        className={styles.carouselWrapper}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <li className={isSelected ? 'selected' : ''} onClick={onClickHandler} key={`${index}`} />
        )}
      >
        {data.map((item: BannerItemType, i: number) => (
          <BannerSliderInfo key={`banner${i}`} {...item} />
        ))} 
      </Carousel>
    </div>
  );
};

export default BannerSlider;
