import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import s from './GalleryCases.module.scss';
import case1J1 from 'images/cases/cases1.jpg';
import case1J2 from 'images/cases/cases1@2x.jpg';
import case1W1 from 'images/cases/cases1.webp';
import case1W2 from 'images/cases/cases1@2x.webp';

import case2J1 from 'images/cases/cases2.jpg';
import case2J2 from 'images/cases/cases2@2x.jpg';
import case2W1 from 'images/cases/cases2.webp';
import case2W2 from 'images/cases/cases2@2x.webp';

import case3J1 from 'images/cases/cases3.jpg';
import case3J2 from 'images/cases/cases3@2x.jpg';
import case3W1 from 'images/cases/cases3.webp';
import case3W2 from 'images/cases/cases3@2x.webp';

import case4J1 from 'images/cases/cases4.jpg';
import case4J2 from 'images/cases/cases4@2x.jpg';
import case4W1 from 'images/cases/cases4.webp';
import case4W2 from 'images/cases/cases4@2x.webp';

import case5J1 from 'images/cases/cases5.jpg';
import case5J2 from 'images/cases/cases5@2x.jpg';
import case5W1 from 'images/cases/cases5.webp';
import case5W2 from 'images/cases/cases5@2x.webp';

import case6J1 from 'images/cases/cases6.jpg';
import case6J2 from 'images/cases/cases6@2x.jpg';
import case6W1 from 'images/cases/cases6.webp';
import case6W2 from 'images/cases/cases6@2x.webp';

const GalleryCases = () => {
  return (
    <div className={s.gallery}>
      <Gallery options={{ mainClass: 'pswp-with-perma-preloader' }}>
        <Item original={case1J1} thumbnail={case1J1} width="1024" height="768">
          {({ ref, open }) => (
            <picture>
              <source
                type="image/webp"
                srcSet={`${case1W1} 1x, ${case1W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${case1J1} 1x, ${case1J2} 2x`}
              />
              <img
                ref={ref}
                onClick={open}
                src={case1J1}
                alt="case1"
                className={s.picture}
              />
            </picture>
          )}
        </Item>
        <Item original={case2J1} thumbnail={case2J1} width="1024" height="768">
          {({ ref, open }) => (
            <picture>
              <source
                type="image/webp"
                srcSet={`${case2W1} 1x, ${case2W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${case2J1} 1x, ${case2J2} 2x`}
              />
              <img
                ref={ref}
                onClick={open}
                src={case2J1}
                alt="case2"
                className={s.picture}
              />
            </picture>
          )}
        </Item>
        <Item original={case3J1} thumbnail={case3J1} width="1024" height="768">
          {({ ref, open }) => (
            <picture>
              <source
                type="image/webp"
                srcSet={`${case3W1} 1x, ${case3W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${case3J1} 1x, ${case3J2} 2x`}
              />
              <img
                ref={ref}
                onClick={open}
                src={case3J1}
                alt="case3"
                className={s.picture}
              />
            </picture>
          )}
        </Item>
        <Item original={case4J1} thumbnail={case4J1} width="1024" height="768">
          {({ ref, open }) => (
            <picture>
              <source
                type="image/webp"
                srcSet={`${case4W1} 1x, ${case4W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${case4J1} 1x, ${case4J2} 2x`}
              />
              <img
                ref={ref}
                onClick={open}
                src={case4J1}
                alt="case4"
                className={s.picture}
              />
            </picture>
          )}
        </Item>
        <Item original={case5J1} thumbnail={case5J1} width="1024" height="768">
          {({ ref, open }) => (
            <picture>
              <source
                type="image/webp"
                srcSet={`${case5W1} 1x, ${case5W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${case5J1} 1x, ${case5J2} 2x`}
              />
              <img
                ref={ref}
                onClick={open}
                src={case5J1}
                alt="case5"
                className={s.picture}
              />
            </picture>
          )}
        </Item>
        <Item original={case6J1} thumbnail={case6J1} width="1024" height="768">
          {({ ref, open }) => (
            <picture>
              <source
                type="image/webp"
                srcSet={`${case6W1} 1x, ${case6W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${case6J1} 1x, ${case6J2} 2x`}
              />
              <img
                ref={ref}
                onClick={open}
                src={case6J1}
                alt="case6"
                className={s.picture}
              />
            </picture>
          )}
        </Item>
      </Gallery>
    </div>
  );
};

export default GalleryCases;
