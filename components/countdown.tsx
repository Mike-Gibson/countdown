import * as React from 'react';

import img from '../images/bg.jpg';
import css from './countdown.scss';

export const Countdown: React.FunctionComponent = () => {
  return (
    <>
      <span className={css.text}>woo</span>
      <img src={img} />
    </>
  );
};
