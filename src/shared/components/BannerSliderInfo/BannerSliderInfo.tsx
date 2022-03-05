import React from 'react';
import { BannerItemType } from 'src/shared/types/BannerType';
import styles from './BannerSliderInfo.module.css';
import cx from 'classnames';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

type BannerSliderInfoProps = BannerItemType;

const BannerSliderInfo = ({ title, description, imageUrl, alt, category, date, link }: BannerSliderInfoProps) => {
  return (
    <Link href={link}>
      <div>
        <img alt={alt} src={imageUrl} />
        <div className={cx(styles.sliderWrapper)}>
          <Container>
            <div className={cx(styles.sliderContent)}>
              <div className={styles.headerInfo}>
                <label>{category}</label>
                <label>{date}</label>
              </div>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
          </Container>
        </div>
      </div>
    </Link>
  );
};

export default BannerSliderInfo;
