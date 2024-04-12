import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";
import { ITarefa } from "../../types/ITarefa";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function adicionarTarefas(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefas}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma tarefa</label>
        <input
          type="text"
          name="tarefa"
          placeholder="Escreva o nome da tarefa aqui"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          id="tarefa"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          name="tempo"
          step="1"
          id="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <div>
        <Botao type="submit">Adicionar</Botao>
      </div>
    </form>
  );
}

export default Formulario;
