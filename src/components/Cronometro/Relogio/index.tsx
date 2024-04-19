import classNames from "classnames";
import style from "./Relogio.module.scss";
import React from "react";

interface Props {
  tempo?: number;
}
export default function Relogio({ tempo = 0 }: Props) {
  const horas = Math.floor(tempo / 3600);
  tempo = tempo % 3600;
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [horaDezena, horaUnidade] = String(horas).padStart(2, "0");
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

  const classNameRelogio = classNames(
    `${!":" ? style.relogioDivisao : style.relogioNumero}`
  );
  return (
    <React.Fragment>
      <span className={classNameRelogio}>{horaDezena}</span>
      <span className={classNameRelogio}>{horaUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={classNameRelogio}>{minutoDezena}</span>
      <span className={classNameRelogio}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={classNameRelogio}>{segundoDezena}</span>
      <span className={classNameRelogio}>{segundoUnidade}</span>
    </React.Fragment>
  );
}
