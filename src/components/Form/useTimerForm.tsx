import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ITimerForm } from './Formtypes';
import { timeToSeconds } from 'common/utils/time';

export const useTimerForm = () => {
  const minTime = timeToSeconds('00:00:01');
  const maxTime = timeToSeconds('01:30:00');
  const schema = yup.object().shape({
    task: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, 'Não são permitidos números no campo de texto')
      .required('É necessário preencher a tarefa'),
    time: yup
      .string()
      .required('É necessário colocar um tempo de pelo menos 00:00:01')
      .test('is-time', 'O tempo deve estar entre "00:00:01" e "01:30:00"', (value) => {
        const timeInSeconds = timeToSeconds(value);
        return timeInSeconds >= minTime && timeInSeconds <= maxTime;
      })
  });
  return useForm<ITimerForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      task: '',
      time: '00:00:00'
    }
  });
};
