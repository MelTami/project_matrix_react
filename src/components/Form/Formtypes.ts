import { ITask } from '../../types/ITask';
import { Dispatch, SetStateAction } from 'react';

export interface IForm {
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export interface ITimerForm {
  task: string;
  time: string;
}

export interface ILabel {
  htmlFor: {
    id: string;
    text: string;
  };
}
