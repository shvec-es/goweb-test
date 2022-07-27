import React from 'react';
import s from './Team.module.scss';
import personJ1 from 'images/team/person1.jpg';
import personJ2 from 'images/team/person2.jpg';
import personJ3 from 'images/team/person3.jpg';
import { SocialList } from 'components';

const Team = () => {
  return (
    <section className={s.team}>
      <p className={s.pretitle}>Who we are</p>
      <h2 className={s.title}>Our Professional Team</h2>
      <p className={s.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={s['persons-list']}>
        <li className={s.person}>
          <div className={s['photo-wrapper']}>
            <img className={s.photo} src={personJ1} alt="person1" />
            <div className={s.sociallist}>
              <SocialList />
            </div>
          </div>

          <h3 className={s.name}>John Doe</h3>
          <p className={s['job-title']}>President</p>
        </li>
        <li className={s.person}>
          <div className={s['photo-wrapper']}>
            <img className={s.photo} src={personJ2} alt="person2" />
            <div className={s.sociallist}>
              <SocialList />
            </div>
          </div>

          <h3 className={s.name}>Jane Doe</h3>
          <p className={s['job-title']}>Vice President</p>
        </li>
        <li className={s.person}>
          <div className={s['photo-wrapper']}>
            <img className={s.photo} src={personJ3} alt="person3" />
            <div className={s.sociallist}>
              <SocialList />
            </div>
          </div>

          <h3 className={s.name}>Steve Smith</h3>
          <p className={s['job-title']}>Marketing Head</p>
        </li>
      </ul>
    </section>
  );
};

export default Team;
