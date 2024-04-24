import React, { InputHTMLAttributes, forwardRef } from 'react';
import { ILabel } from '../Formtypes';

export const Label: React.FC<ILabel> = ({ htmlFor }) => {
  return (
    <label htmlFor={htmlFor.id}>
      {htmlFor.text}
      {htmlFor.id}
    </label>
  );
};

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <>
      <Label htmlFor={{ id: props.id || '', text: 'Adicione ' }} />
      <input ref={ref} {...props} />
    </>
  );
});

Input.displayName = 'Input';
