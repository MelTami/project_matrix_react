import React from 'react';
import style from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ onClick, type, children }: Props) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
