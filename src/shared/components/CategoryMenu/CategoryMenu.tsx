import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import styles from './CategoryMenu.module.css';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
// import cx from 'classnames';
import { Container } from 'react-bootstrap';
import { MenuItem } from '../../types/GeneralTypes';

// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

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

function Card({ title, link, style }: any) {
  return (
    <div
      className={styles.item}
      tabIndex={0}
      style={style}
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
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [currentLeft, setCurrentLeft] = useState<number>(0);
  const [showArrow, setShowArrow] = useState<boolean>(true);

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      setAreaWidth(refSlider?.current?.offsetWidth);
      setContentWidth(ref?.current?.offsetWidth);
      setMaxLeftWidth(ref?.current?.offsetWidth - refSlider?.current?.offsetWidth);

      if (ref?.current?.offsetWidth <= refSlider?.current?.offsetWidth) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }

    }, []);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", () => {
        setAreaWidth(refSlider?.current?.offsetWidth);
        setContentWidth(ref?.current?.offsetWidth);
        setMaxLeftWidth(ref?.current?.offsetWidth - refSlider?.current?.offsetWidth);  
        if (ref?.current?.offsetWidth <= refSlider?.current?.offsetWidth) {
          setShowArrow(false);
        } else {
          setShowArrow(true);
        }
      });
    }
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
          {showArrow && <LeftArrow scrollPrev={handleScrollPrev} />}
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
                  style={{ paddingLeft: (i === 0 && !showArrow) && 0 }}
                />
              ))}
            </div>
          </div>
          {showArrow && <RightArrow scrollNext={handleScrollNext} />}
        </div>
      </Container>
    </div>
  );
}

export default CategoryMenu;
