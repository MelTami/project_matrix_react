import * as yup from "yup";

export const tarefasSchema = yup.object({
    tarefa: yup.string().required(),
    tempo: yup.number().required()
  })