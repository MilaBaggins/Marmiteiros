import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/,
      "Digite um nome válido"
    ),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Digite um e-mail válido")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ),
  img: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      "Digite uma url válida"
    ),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Sua senha deve conter no mínimo 8 caracteres")
    .matches(/(?=.*\d)/, "Sua senha deve conter ao menos um dígito")
    .matches(
      /(?=.*[a-z])/,
      "Sua senha deve conter ao menos uma letra minúscula"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Sua senha deve conter ao menos uma letra maiúscula"
    )
    .matches(
      /(?=.*[$*&,.@#])/,
      "Sua senha deve conter ao menos um caractere especial"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
});
