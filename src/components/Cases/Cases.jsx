import React from 'react';
import s from './Cases.module.scss';
// import IMAGES from 'images/cases';
// import case1J1 from 'images/cases/cases1.jpg';

const Cases = () => {
  return (
    <section className={s.cases} id="cases">
      <p className={s.pretitle}>This is what we do</p>
      <h2 className={s.title}>Business Cases</h2>
      <p className={s.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      {/* <ul>
        <li>
          <img src={case1J1} alt="case1" />
        </li>
        <li>
          <img src={IMAGES.case2J1} alt="case2" />
        </li>
        <li>
          <img src={IMAGES.case3J1} alt="case3" />
        </li>
        <li>
          <img src={IMAGES.case4J1} alt="case4" />
        </li>
        <li>
          <img src={IMAGES.case5J1} alt="case5" />
        </li>
        <li>
          <img src={IMAGES.case6J1} alt="case6" />
        </li>
      </ul> */}
    </section>
  );
};

export default Cases;
