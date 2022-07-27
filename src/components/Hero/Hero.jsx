import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <h1 className={s.title}>The Sky Is The Limit</h1>
      <p className={s.text}>We provide world class financial assistance</p>
      <button className={s.button}>Read more</button>
    </section>
  );
};

export default Hero;
