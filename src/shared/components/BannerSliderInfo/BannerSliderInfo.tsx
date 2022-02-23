import React from 'react';
import { BannerItemType } from 'src/shared/types/BannerType';
import styles from './BannerSliderInfo.module.css';
import cx from 'classnames';
import { Typography } from '@mui/material';

type BannerSliderInfoProps = BannerItemType;

const BannerSliderInfo = ({ title, description, imageUrl, alt, category, date }: BannerSliderInfoProps) => {
  return (
    <div>
      <img alt={alt} src={imageUrl} />
      <div className={cx(styles.sliderWrapper)}>
        <div className={cx('container', styles.sliderContent)}>
          <div className={styles.headerInfo}>
            <label>{category}</label>
            <label>{date}</label>
          </div>
          <Typography className={styles.title} variant='h1'>{title}</Typography>
          <Typography className={styles.description} variant='body1'>{description}</Typography>
        </div>
      </div>
    </div>
  );
};

export default BannerSliderInfo;
