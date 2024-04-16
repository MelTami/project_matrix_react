import React from "react";
import { ITarefa } from "../../../types/ITarefa";

interface Props extends ITarefa{

}

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement>{
}

export function Input({onChange, value, type, id, name} : InputProp, {tarefa, tempo} : Props){

  return(
    <input
          type={type}
          name={name}
          placeholder="Escreva o nome da tarefa aqui"
          value={value}
          onChange={onChange}
          id={id}
          required
          step="1"

        />
  )
}
