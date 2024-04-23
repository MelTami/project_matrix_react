import style from './Clock.module.scss';
import React, { useMemo } from 'react';
import { IClock } from './types';

export default function Clock({ time = 0 }: IClock) {
  const times = useMemo(() => {
    const hours = Math.floor(time / 3600);
    const newTime = time % 3600;
    const minutes = Math.floor(newTime / 60);
    const seconds = newTime % 60;

    const [hourTen, hourUnit] = String(hours).padStart(2, '0');
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnit] = String(seconds).padStart(2, '0');

    return {
      hourTen,
      hourUnit,
      minuteTen,
      minuteUnit,
      secondTen,
      secondUnit
    };
  }, [time]);

  return (
    <React.Fragment>
      <span className={style.clockNumber}>{times.hourTen}</span>
      <span className={style.clockNumber}>{times.hourUnit}</span>
      <span className={style.clockSplit}>:</span>
      <span className={style.clockNumber}>{times.minuteTen}</span>
      <span className={style.clockNumber}>{times.minuteUnit}</span>
      <span className={style.clockSplit}>:</span>
      <span className={style.clockNumber}>{times.secondTen}</span>
      <span className={style.clockNumber}>{times.secondUnit}</span>
    </React.Fragment>
  );
}
