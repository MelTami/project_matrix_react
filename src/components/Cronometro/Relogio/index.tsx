import style from "./Relogio.module.scss";
import React, { useMemo } from "react";

interface Props {
  tempo?: number;
}






export default function Relogio({ tempo = 0 }: Props) {
  const time = useMemo(() => {
    const horas = Math.floor(tempo / 3600);
    const newTime = tempo % 3600;
    const minutos = Math.floor(newTime / 60);
    const segundos = newTime % 60;

    const [horaDezena, horaUnidade] = String(horas).padStart(2, "0");
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

    return {
      horaDezena,
      horaUnidade,
      minutoDezena,
      minutoUnidade,
      segundoDezena,
      segundoUnidade
    }
  }, [tempo])

  return (
    <React.Fragment>
      <span className={style.relogioNumero}>{time.horaDezena}</span>
      <span className={style.relogioNumero}>{time.horaUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{time.minutoDezena}</span>
      <span className={style.relogioNumero}>{time.minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{time.segundoDezena}</span>
      <span className={style.relogioNumero}>{time.segundoUnidade}</span>
    </React.Fragment>
  );
}
