import React, { useEffect } from 'react';
import s from './Header.module.scss';
import icons from 'images/sprite.svg';

const Header = () => {
  useEffect(() => {
    const headerEl = document.getElementById('header');
    const addHeaderOpacity = () => {
      if (window.scrollY < headerEl.clientHeight) {
        headerEl.style.backgroundColor = 'rgb(0,0,0,0)';
        headerEl.style.position = 'absolute';
      } else {
        headerEl.style.backgroundColor = 'rgba(0,0,0,0.4)';
        headerEl.style.position = 'fixed';
      }
    };

    window.addEventListener('scroll', addHeaderOpacity);
  }, []);

  const handleClick = e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - document.getElementById('header').clientHeight,
    });
  };

  return (
    <header className={s.header} id="header">
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
            <a href="#home" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className={s.item}>
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li className={s.item}>
            <a href="#cases" onClick={handleClick}>
              Cases
            </a>
          </li>
          <li className={s.item}>
            <a href="#blog" onClick={handleClick}>
              Blog
            </a>
          </li>
          <li className={s.item}>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
