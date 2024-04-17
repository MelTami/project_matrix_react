import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";
import { ITarefa } from "../../types/ITarefa";
import { Input } from "./Input";
import { tarefasSchema } from "../../validation/tarefasValidation";
import { useForm } from "react-hook-form";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ITarefa>();

  const validarTarefas = async () => {
    let formData = {
      tarefa: { tarefa },
      tempo: { tempo },
    };
    const isValid = await tarefasSchema.isValid(formData);
  };

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

  // function onSubmit (){
  //   adicionarTarefas;
  //   validarTarefas();
  // }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefas}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma tarefa</label>
        <Input
          {...register("tarefa", { required: true, minLength: 1 })}
          type="text"
          name="tarefa"
          placeholder="Escreva o nome da tarefa aqui"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          id="tarefa"
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <Input
          type="time"
          min="00:00:01"
          max="01:30:00"
          step="1"
          id="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
        />
      </div>
      <div>
        <Botao type="submit">Adicionar</Botao>
      </div>
    </form>
  );
}

export default Formulario;
