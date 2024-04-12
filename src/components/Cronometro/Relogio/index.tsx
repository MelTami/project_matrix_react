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
  return (
    <React.Fragment>
      <span className={style.relogioNumero}>{horaDezena}</span>
      <span className={style.relogioNumero}>{horaUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </React.Fragment>
  );
}
