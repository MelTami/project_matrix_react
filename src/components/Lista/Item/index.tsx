import React from "react";
import style from "./Item.module.scss";
import { ITarefa } from "../../../types/ITarefa";
import classNames from "classnames";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}



function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  const listClass = classNames(`${style.item}`,
    {
      [`${style.itemSelecionado}`]: selecionado,
      [`${style.itemCompletado}`]: completado,
    }
  );

  return (
    <li
      className={listClass}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}

export default Item;
