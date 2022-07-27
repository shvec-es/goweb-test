import React from 'react';
import s from './SocialList.module.scss';
import icons from 'images/sprite.svg';

const SocialList = () => {
  return (
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
  );
};

export default SocialList;
