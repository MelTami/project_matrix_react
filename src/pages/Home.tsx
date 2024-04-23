import React, { useState } from 'react';
import Form from '../components/Form';
import Lista from '../components/Lista';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false
      }))
    );
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <Lista tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} endTask={endTask} />
    </div>
  );
}
