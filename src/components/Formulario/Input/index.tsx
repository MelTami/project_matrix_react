import React, { InputHTMLAttributes, forwardRef } from "react";


export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return (
      <input ref={ref} {...props} />
    );
  })


Input.displayName = 'Input'