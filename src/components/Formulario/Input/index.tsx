import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ type }: Props) {
  return <input />;
}
