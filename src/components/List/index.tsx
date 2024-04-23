import React from 'react';
import style from './list.module.scss';
import Item from './Item';
import { IList } from './types';

export default function List({ tasks, selectTask }: IList) {
  return (
    <aside className={style.listTasks}>
      <h2>Escolha uma task</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
