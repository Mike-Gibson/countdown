import * as React from 'react';

import css from './counter.scss';

interface IProps {
  value: number;
  unit: string;
}

export const Counter: React.FunctionComponent<IProps> = ({ value, unit }) => {
  const formattedValue = `${value < 10 ? '0' : ''}${value}`;

  return (
    <div className={css.container}>
      <span className={css.number}>{formattedValue}</span>
      <span className={css.unit}>{unit}</span>
    </div>
  );
};
