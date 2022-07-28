import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import s from './Cases.module.scss';
import { GalleryCases } from 'components';

const Cases = () => {
  return (
    <section className={s.cases} id="cases">
      <p className={s.pretitle}>This is what we do</p>
      <h2 className={s.title}>Business Cases</h2>
      <p className={s.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <GalleryCases />
    </section>
  );
};

export default Cases;
