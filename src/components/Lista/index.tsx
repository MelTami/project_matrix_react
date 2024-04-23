import React from 'react';
import style from './Lista.module.scss';
import Item from './Item';
import { ITask } from '../../types/ITask';

interface Props {
  tasks: ITask[];
  selectTask: (taskSelecionada: ITask) => void;
}

function Lista({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listatasks}>
      <h2>Escolha uma task</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
