import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";
import { ITarefa } from "../../types/ITarefa";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  const methods = useForm();

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
    <FormProvider {...methods}>
      <form className={style.novaTarefa} onSubmit={adicionarTarefas}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma tarefa</label>
          <Input
            type="text"
            placeholder="Escreva a tarefa aqui"
            id="tarefa"
            value={tarefa}
            {...methods.register("tarefa", {
              required: true,
              onChange: (evento) => setTarefa(evento.target.value),
            })}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <Input
            type="time"
            min="00:00:01"
            max="01:30:00"
            id="tempo"
            value={tempo}
            {...methods.register("tempo", {
              required: true,
              onChange: (evento) => setTempo(evento.target.value),
            })}
          />
        </div>
        <div>
          <Botao type="submit">Adicionar</Botao>
        </div>
      </form>
    </FormProvider>
  );
}
