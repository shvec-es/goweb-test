import React from 'react';
import s from './Footer.module.scss';
import icons from 'images/sprite.svg';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.soclist}>
        <li className={s.socitem}>
          <a className={s.soclink} href="/">
            <svg className={s.socicon}>
              <use href={`${icons}#facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={s.socitem}>
          <a className={s.soclink} href="/">
            <svg className={s.socicon}>
              <use href={`${icons}#twitter`}></use>
            </svg>
          </a>
        </li>
        <li className={s.socitem}>
          <a className={s.soclink} href="/">
            <svg className={s.socicon}>
              <use href={`${icons}#youtube`}></use>
            </svg>
          </a>
        </li>
        <li className={s.socitem}>
          <a className={s.soclink} href="/">
            <svg className={s.socicon}>
              <use href={`${icons}#linkedin`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <p>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
};

export default Footer;
