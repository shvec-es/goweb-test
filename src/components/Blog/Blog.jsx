import React from 'react';
import s from './Blog.module.scss';
import icons from 'images/sprite.svg';
import blogW1 from 'images/home/blog.webp';
import blogW2 from 'images/home/blog@2x.webp';
import blogJ1 from 'images/home/blog.jpg';
import blogJ2 from 'images/home/blog@2x.jpg';

const Blog = () => {
  return (
    <section className={s.blog} id="blog">
      <picture>
        <source type="image/webp" srcSet={`${blogW1} 1x, ${blogW2} 2x`} />
        <source type="image/jpg" srcSet={`${blogJ1} 1x, ${blogJ2} 2x`} />
        <img className={s.photo} src={blogJ1} alt="Blog section" />
      </picture>
      <div className={s.description}>
        <p className={s.date}>April 16 2020</p>
        <h2 className={s.title}>Blog Post One</h2>
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
          Read Our Blog
        </button>
      </div>
    </section>
  );
};

export default Blog;
