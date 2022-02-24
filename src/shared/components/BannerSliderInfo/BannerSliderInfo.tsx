import React from 'react';
import { BannerItemType } from 'src/shared/types/BannerType';
import styles from './BannerSliderInfo.module.css';
import cx from 'classnames';
import { Typography } from '@mui/material';
import { Container } from 'react-bootstrap';

type BannerSliderInfoProps = BannerItemType;

const BannerSliderInfo = ({ title, description, imageUrl, alt, category, date }: BannerSliderInfoProps) => {
  return (
    <div>
      <img alt={alt} src={imageUrl} />
      <div className={cx(styles.sliderWrapper)}>
        <Container>
          <div className={cx(styles.sliderContent)}>
            <div className={styles.headerInfo}>
              <label>{category}</label>
              <label>{date}</label>
            </div>
            <Typography className={styles.title} variant='h1'>{title}</Typography>
            <Typography className={styles.description} variant='body1'>{description}</Typography>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BannerSliderInfo;
