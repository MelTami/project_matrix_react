import React from "react";
import style from "./Botao.module.scss";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Botao({ onClick, type, children }: Props) {
  const btnClass = classNames(style.botao);
  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;
