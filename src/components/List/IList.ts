import { ITask } from '../../types/ITask';

export interface IList {
  tasks: ITask[];
  selectTask: (taskSelecionada: ITask) => void;
}

export interface IItem extends ITask {
  selectTask: (taskSelected: ITask) => void;
}
