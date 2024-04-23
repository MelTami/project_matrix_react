import React, { useEffect, useState } from 'react';
import style from './Timer.module.scss';
import Clock from './Clock';
import { timeToSeconds } from '../../common/utils/time';
import Button from '../Button';
import classNames from 'classnames';
import { ITimer } from './types';

export default function Timer({ selected, endTask }: ITimer) {
  const [time, setTime] = useState<number>();
  const timerClass = classNames(style.timer);
  const clockClass = classNames(style.clockWrapper);

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTime(contador - 1);
        return regressiva(contador - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={timerClass}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={clockClass}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiva(time)}>Começar</Button>
    </div>
  );
}
