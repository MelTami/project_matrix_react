import React from 'react';
import style from './Item.module.scss';
import classNames from 'classnames';
import { IItem } from '../IList';

function Item({ task, time, selected, completed, id, selectTask }: IItem) {
  const listClass = classNames(`${style.item}`, {
    [`${style.itemSelected}`]: selected,
    [`${style.itemCompleted}`]: completed
  });

  return (
    <li
      className={listClass}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          selected,
          completed,
          id
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluded} aria-label="task completed"></span>}
    </li>
  );
}

export default Item;
