import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Input } from "./Input";
import { Controller } from "react-hook-form";
import { IForm, ITimerForm } from "./types";
import { useTimerForm } from "./useTimerForm";

export default function Formulario({ setTarefas }: IForm) {
  const { control, reset, handleSubmit } = useTimerForm();

  async function adicionarTarefas(data: ITimerForm) {
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...data,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);

    reset()
  }

  return (
    <form className={style.novaTarefa} onSubmit={handleSubmit(adicionarTarefas)}>
      <div>
        <label htmlFor="tarefa">Adicione uma tarefa</label>

        <Controller
          control={control}
          name="tarefa"
          render={({ field, fieldState }) => (
            <>
              <Input {...field} id="tarefa" step="1" placeholder="Escreva a tarefa aqui" />
              <p>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>
      <div>
        <label htmlFor="tempo">Tempo</label>

        <Controller
          control={control}
          name="tempo"
          render={({ field }) =>
            <Input {...field} type="time"
              min="00:00:01"
              max="01:30:00"
              id="tempo"
            />}
        />
      </div>
      <div>
        <Botao type="submit">Adicionar</Botao>
      </div>
    </form>
  );
}
