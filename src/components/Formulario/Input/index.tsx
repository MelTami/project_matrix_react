import React from "react";


interface InputProp extends React.InputHTMLAttributes<HTMLInputElement>{
}

export function Input({onChange, value, type, id, name} : InputProp){

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
