import React, { ButtonHTMLAttributes } from "react";
import style from "./Botao.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

function Botao({onClick, type, children}: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;
