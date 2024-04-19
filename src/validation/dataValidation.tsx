import * as yup from "yup";

const squema = yup.object().shape({
  tarefa: yup.string().required("É necessário preencher a tarefa"),
  tempo: yup
    .string()
    .required("É necessário colocar um tempo de pelo menos 00:00:01"),
});
