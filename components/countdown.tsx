import * as React from 'react';
import * as countdown from 'countdown-js';

import css from './countdown.scss';
import { Counter } from './counter';

interface IState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export class Countdown extends React.Component<{}, IState> {
  private abort: () => void = () => { };

  state = { days: 99, hours: 99, minutes: 99, seconds: 99 };

  componentDidMount() {
    const end = new Date('2022-06-26 01:00:00Z');

    const timer = countdown.timer(
      end,
      (timeLeft) => this.setState(timeLeft),
      () => console.log("Countdown Finished!"),
    );

    this.abort = timer.abort;
  }

  componentWillUnmount() {
    this.abort();
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className={css.container}>
        <Counter unit="Days" value={days} />
        <Counter unit="Hours" value={hours} />
        <Counter unit="Minutes" value={minutes} />
        <Counter unit="Seconds" value={seconds} />
      </div>
    );
  }
};
