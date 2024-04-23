import { ITask } from '../../types/ITask';

export interface IList {
  tasks: ITask[];
  selectTask: (taskSelecionada: ITask) => void;
}
