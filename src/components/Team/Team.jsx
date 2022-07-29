import React from 'react';
import s from './Team.module.scss';

import person1J1 from 'images/team/person1.jpg';
import person1J2 from 'images/team/person1@2x.jpg';
import person1W1 from 'images/team/person1.webp';
import person1W2 from 'images/team/person1@2x.webp';

import person2J1 from 'images/team/person2.jpg';
import person2J2 from 'images/team/person2@2x.jpg';
import person2W1 from 'images/team/person2.webp';
import person2W2 from 'images/team/person2@2x.webp';

import person3J1 from 'images/team/person3.jpg';
import person3J2 from 'images/team/person3@2x.jpg';
import person3W1 from 'images/team/person3.webp';
import person3W2 from 'images/team/person3@2x.webp';

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
            <picture>
              <source
                type="image/webp"
                srcSet={`${person1W1} 1x, ${person1W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${person1J1} 1x, ${person1J2} 2x`}
              />
              <img className={s.photo} src={person1J1} alt="person1" />
            </picture>
            <div className={s.sociallist}>
              <SocialList />
            </div>
          </div>

          <h3 className={s.name}>John Doe</h3>
          <p className={s['job-title']}>President</p>
        </li>
        <li className={s.person}>
          <div className={s['photo-wrapper']}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${person2W1} 1x, ${person2W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${person2J1} 1x, ${person2J2} 2x`}
              />
              <img className={s.photo} src={person2J1} alt="person2" />
            </picture>
            <div className={s.sociallist}>
              <SocialList />
            </div>
          </div>

          <h3 className={s.name}>Jane Doe</h3>
          <p className={s['job-title']}>Vice President</p>
        </li>
        <li className={s.person}>
          <div className={s['photo-wrapper']}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${person3W1} 1x, ${person3W2} 2x`}
              />
              <source
                type="image/jpg"
                srcSet={`${person3J1} 1x, ${person3J2} 2x`}
              />
              <img className={s.photo} src={person3J1} alt="person3" />
            </picture>
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
