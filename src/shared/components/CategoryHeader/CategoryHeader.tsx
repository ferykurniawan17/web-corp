import React from 'react';
import styles from './CategoryHeader.module.css';
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
        <p className={styles.description}>{'Kategori'}</p>
        <h2 className={styles.title}>{props.categoryName}</h2>
        <div className={styles.menu}>
          {props.menus.map((item: MenuItem, i: number) => (
            <div className={styles.menuItem}>
              <Link href={item.link || '/'}>
                <a>{item.label}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
