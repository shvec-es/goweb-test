import React from 'react';
import s from './About.module.scss';
import icons from 'images/sprite.svg';

const About = () => {
  return (
    <section className={s.about} id="about">
      <div className={s.photo}></div>
      <div className={s.description}>
        <h2 className={s.title}>What you are looking for</h2>
        <p className={s.liketitle}>We provide bespoke solutions</p>
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.button}>
          <svg className={s.icon}>
            <use href={`${icons}#arrow`} />
          </svg>
          Read more
        </button>
      </div>
    </section>
  );
};

export default About;
