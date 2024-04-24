import React from 'react';
import Botao from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './Input';
import { Controller } from 'react-hook-form';
import { IForm, ITimerForm } from './Formtypes';
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
        <Controller
          control={control}
          name="task"
          render={({ field, fieldState }) => (
            <>
              <Input {...field} id="task" placeholder="Escreva a tarefa aqui" />
              <p className={style.error}>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="time"
          render={({ field, fieldState }) => (
            <>
              <Input {...field} type="time" id="tempo" step={'1'} />
              <p className={style.error}>{fieldState.error?.message}</p>
            </>
          )}
        />
      </div>
      <div>
        <Botao type="submit">Adicionar</Botao>
      </div>
    </form>
  );
}
