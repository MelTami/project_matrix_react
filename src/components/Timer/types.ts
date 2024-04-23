import { ITask } from '../../types/ITask';

export interface ITimer {
  selected: ITask | undefined;
  endTask: () => void;
}
