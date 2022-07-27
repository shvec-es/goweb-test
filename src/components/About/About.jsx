import React from 'react';
import s from './About.module.scss';
import peopleW1 from 'images/home/people.webp';
import peopleW2 from 'images/home/people@2x.webp';
import peopleJ1 from 'images/home/people.jpg';
import peopleJ2 from 'images/home/people@2x.jpg';
import peopleWT1 from 'images/home/people-tablet.webp';
import peopleWT2 from 'images/home/people-tablet@2x.webp';
import peopleJT1 from 'images/home/people-tablet.jpg';
import peopleJT2 from 'images/home/people-tablet@2x.jpg';

const About = () => {
  return (
    <section className={s.about} id="about">
      <picture>
        <source type="image/webp" srcSet={`${peopleW1} 1x, ${peopleW2} 2x`} />
        <source
          type="image/webp"
          srcSet={`${peopleWT1} 1x, ${peopleWT2} 2x`}
          media="(min-width: 768px, max-width: 1359px)"
        />
        <source type="image/jpg" srcSet={`${peopleJ1} 1x, ${peopleJ2} 2x`} />
        <source
          type="image/jpg"
          srcSet={`${peopleJT1} 1x, ${peopleJT2} 2x`}
          media="(min-width: 768px, max-width: 1359px)"
        />
        <img className={s.photo} src={peopleJ1} alt="Our team" />
      </picture>
      <div className={s.description}>
        <h2 className={s.title}>What you are looking for</h2>
        <p className={s.liketitle}>We provide bespoke solutions</p>
        <p className={s.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.button}>Read more</button>
      </div>
    </section>
  );
};

export default About;
