import React from 'react';
import Botao from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './Input';
import { Controller } from 'react-hook-form';
import { IForm, ITimerForm } from './types';
import { useTimerForm } from './useTimerForm';

export default function Form({ setTasks }: IForm) {
  const { control, reset, handleSubmit } = useTimerForm();

  function adicionartasks(data: ITimerForm) {
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...data,
        selected: false,
        completed: false,
        id: uuidv4()
      }
    ]);

    reset();
  }

  return (
    <form className={style.newTask} onSubmit={handleSubmit(adicionartasks)}>
      <div>
        <label htmlFor="task">Adicione uma task</label>

        <Controller
          control={control}
          name="task"
          render={({ field, fieldState }) => (
            <>
              <Input {...field} id="task" step="1" placeholder="Escreva a task aqui" />
              <p className={style.error}>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>
      <div>
        <label htmlFor="time">Tempo</label>

        <Controller
          control={control}
          name="time"
          render={({ field }) => <Input {...field} type="time" min="00:00:01" max="01:30:00" id="tempo" />}
        />
      </div>
      <div>
        <Botao type="submit">Adicionar</Botao>
      </div>
    </form>
  );
}
