import { ITarefa } from "types/ITarefa";
import { Dispatch, SetStateAction } from 'react'

export interface IForm {
  setTarefas: Dispatch<SetStateAction<ITarefa[]>>;
}

export interface ITimerForm {
  tarefa: string
  tempo: string
}