import React from 'react';
import s from './Footer.module.scss';
import SocialList from 'components/SocialList';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <SocialList />
      <p>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
};

export default Footer;
