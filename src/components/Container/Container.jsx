import React from 'react';
import s from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Container;