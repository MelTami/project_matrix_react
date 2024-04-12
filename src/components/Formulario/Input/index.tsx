import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    setTempo: React.Dispatch<React.SetStateAction<string>>,
    setTarefa: (value: React.SetStateAction<string>) => void
}

export function Input({setTarefa, setTempo, value, type, name, id, onChange}: Props){
    return(
        <input

        />
    )
}