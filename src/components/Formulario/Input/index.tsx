import React from "react";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({
  onChange,
  value,
  type,
  id,
  name,
  placeholder,
  min,
  max,
}: InputProp) {
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
