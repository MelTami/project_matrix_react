import React, { useEffect, useState } from 'react';
import style from './Timer.module.scss';
import Clock from './Clock';
import { timeToSeconds } from '../../common/utils/time';
import Button from '../Button';
import { ITimer } from './ITimer';

export default function Timer({ selected, endTask }: ITimer) {
  const [time, setTime] = useState<number>();

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
    <div className={style.timer}>
      <p>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiva(time)}>Começar</Button>
    </div>
  );
}
