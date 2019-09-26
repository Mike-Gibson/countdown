declare module 'countdown-js' {
  export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  export function timer(
    end: Date,
    onTick: (timeLeft: TimeLeft) => void,
    onFinish: () => void): { abort: () => void, getTimeRemaining: () => TimeLeft };
}
