import React from 'react';
import styles from './CategoryHeader.module.css';
import { Typography } from '@mui/material';
import Link from 'next/link';

export type MenuItem = {
  label: string;
  link?: string;
};

type CategoryHeaderProps = {
  categoryName: string;
  menus: Array<MenuItem>;
};

const CategoryHeader = (props: CategoryHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={'container'}>
        <Typography className={styles.description} variant='body1'>{'Kategori'}</Typography>
        <Typography className={styles.title} variant='h2'>{props.categoryName}</Typography>
        <div className={styles.menu}>
          {props.menus.map((item: MenuItem, i: number) => (
            <Link href={item.link || '/'}>
              <a className={styles.menuItem}>{item.label}</a>
            </Link>
          ))}
        </div>
      </div>  
    </div>
  );
};

export default CategoryHeader;
