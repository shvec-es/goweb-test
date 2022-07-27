import React from 'react';
import s from './Header.module.scss';
import icons from 'images/sprite.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <a href="/" className={s.logo}>
          <svg width="40" height="35">
            <use href={`${icons}#logo`} />
          </svg>
          <p className={s.name}>
            <span className={s['name-accent']}>Finance</span>
            Ledger
          </p>
        </a>
      </div>
      <nav className={s.nav}>
        <ul className={s.menu}>
          <li className={s.item}>
            <a href="/">Home</a>
          </li>
          <li className={s.item}>
            <a href="#about">About</a>
          </li>
          <li className={s.item}>
            <a href="#cases">Cases</a>
          </li>
          <li className={s.item}>
            <a href="#blog">Blog</a>
          </li>
          <li className={s.item}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
