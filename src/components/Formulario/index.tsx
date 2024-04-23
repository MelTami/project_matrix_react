import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";
import { ITarefa } from "../../types/ITarefa";
import { Input } from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import classNames from "classnames";
import * as yup from "yup";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  const methods = useForm();
  const formClass = classNames(style.novaTarefa);

  async function validate() {
    let schema = yup.object().shape({
      tarefa: yup
        .string()
        .matches(
          /^[a-zA-Z\s]*$/,
          "Não são permitidos números no campo de texto"
        )
        .required("É necessário preencher a tarefa"),
      tempo: yup
        .string()
        .required("É necessário colocar um tempo de pelo menos 00:00:01"),
    });
    try {
      await schema.validate({ tarefa, tempo });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async function adicionarTarefas(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (!(await validate())) {
      return;
    }
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
      <form className={formClass} onSubmit={adicionarTarefas}>
        <div>
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
        <div>
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
