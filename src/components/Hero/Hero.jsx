import React from 'react';
import s from './Hero.module.scss';
import { Background, Container } from 'components';

const Hero = () => {
  return (
    <Background>
      <section className={s.hero} id="home">
        <Container>
          <h1 className={s.title}>The Sky Is The Limit</h1>
          <p className={s.text}>We provide world class financial assistance</p>
          <button className={s.button}>Read more</button>
        </Container>
      </section>
    </Background>
  );
};

export default Hero;
