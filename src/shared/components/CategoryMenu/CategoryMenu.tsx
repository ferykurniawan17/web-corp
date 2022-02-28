import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import styles from './CategoryMenu.module.css';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import cx from 'classnames';
import { Container } from 'react-bootstrap';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

export type MenuItem = {
  label: string;
  link?: string;
};

type CategoryMenuProps = {
  menu: Array<MenuItem>;
};

function LeftArrow({ scrollPrev }: any) {
  // const { isFirstItemVisible, scrollPrev } =
  //   React.useContext(VisibilityContext);

  return (
    <div className={styles.buttonRight}>
      <button onClick={() => scrollPrev()}>{`<`}</button>
    </div>
  );
}

function RightArrow({ scrollNext }: any) {
  // const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div className={styles.buttonLeft}>
      <button onClick={() => scrollNext()}>{`>`}</button>
    </div>
  );
}

function Card({ title, link }: any) {
  return (
    <div
      className={styles.item}
      tabIndex={0}
    >
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </div>
  );
}

const CategoryMenu = ({ menu }: CategoryMenuProps) => {

  const refSlider = useRef(null);
  const ref = useRef(null);

  const [maxLeftWidth, setMaxLeftWidth] = useState<number>(0);
  const [areaWidth, setAreaWidth] = useState<number>(0);
  const [currentLeft, setCurrentLeft] = useState<number>(0);

  useLayoutEffect(() => {
    setAreaWidth(refSlider?.current.offsetWidth);
    setMaxLeftWidth(ref?.current.offsetWidth - refSlider?.current.offsetWidth);
  }, []);

  const handleScrollNext = () => {
    const newPos = currentLeft + areaWidth;
    if (newPos > maxLeftWidth) {
      setCurrentLeft(maxLeftWidth);
    } else {
      setCurrentLeft(newPos);
    }
  }

  const handleScrollPrev = () => {
    const newPos = currentLeft - areaWidth;
    if (newPos < 0) {
      setCurrentLeft(0);
    } else {
      setCurrentLeft(newPos);
    }
  }

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.mainContainer}>
          <LeftArrow scrollPrev={handleScrollPrev} />
          <div ref={refSlider} className={styles.sliderContainer}>
            <div
              ref={ref}
              className={styles.containerScroll}
              style={{
                // left: currentLeft * -1,
                transform: `translateX(${currentLeft * -1}px)`,
                transition: `transform 0.5s`,
              }}
            >
              {menu.map((item: MenuItem, i: number) => (
                <Card
                  title={item.label}
                  key={`nav-${i}`}
                  link={item.link}
                />
              ))}
            </div>
            {/* <ScrollMenu
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
            </ScrollMenu> */}
          </div>
          <RightArrow scrollNext={handleScrollNext} />
        </div>
      </Container>
    </div>
  );
}

export default CategoryMenu;
