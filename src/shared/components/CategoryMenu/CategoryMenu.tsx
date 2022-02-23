import React from 'react';
import styles from './CategoryMenu.module.css';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

export type MenuItem = {
  label: string;
  link?: string;
};

type CategoryMenuProps = {
  menu: Array<MenuItem>;
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div className={styles.buttonRight}>
      <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>{`<`}</button>
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div className={styles.buttonLeft}>
      <button disabled={isLastItemVisible} onClick={() => scrollNext()}>{`>`}</button>
    </div>
  );
}

function Card({ title, link }: any) {
  return (
    <div
      className={styles.item}
      tabIndex={0}
    >
      <div>
        <Link href={link}>
          <a>{title}</a>
        </Link>
      </div>
    </div>
  );
}

const CategoryMenu = ({ menu }: CategoryMenuProps) => {
  return (
    <div className={styles.container}>
      <div className={'container'}>
        
        <div className={styles.sliderContainer}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            scrollContainerClassName={styles.containerScroll}
          >
            {menu.map((item: MenuItem, i: number) => (
              <Card
                title={item.label}
                key={`nav-${i}`}
                link={item.link}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
