import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ITimerForm } from "./types";

export const useTimerForm = () => {
  const schema = yup.object().shape({
    tarefa: yup
      .string()
      .matches(
        /^[a-zA-Z\s]*$/,
        "Não são permitidos números no campo de texto"
      )
      .required("É necessário preencher a tarefa"),
    tempo: yup
      .string()
      .required("É necessário colocar um tempo de pelo menos 00:00:01"),
  });


  return useForm<ITimerForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      tarefa: '',
      tempo: '00:00:00',
    }
  });

}