import React from "react";
import { ITarefa } from "../../../types/ITarefa";
import { UseFormRegister } from "react-hook-form";

interface Props extends ITarefa {
  registro: UseFormRegister<ITarefa>;
}

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(
  { onChange, value, type, id, name, placeholder, min, max}: InputProp,
  { tarefa, tempo, registro }: Props,
) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      required
      step="1"
      min={min}
      max={max}
    />
  );
}
