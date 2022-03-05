import React from 'react';
import styles from './SimpleVerticalNav.module.css';
import Link from 'next/link';

export type MenuType = {
  label: string;
  onClick?: () => void;
  link?: string;
};

type SimpleVerticalNavProps = {
  menus: Array<MenuType>;
};

const SimpleVerticalNav = (props: SimpleVerticalNavProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.menus}>
        {props.menus.map((item: MenuType, i: number) => (
          <li key={`nav${item.label}${i}`}>
            <Link href={item.link || '/'}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleVerticalNav;
