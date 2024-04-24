import React from 'react';
import style from './Button.module.scss';
import { IButton } from './Buttontypes';

export default function Button({ onClick, type, children }: IButton) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
