import { Form } from "..";
import { Input } from "../../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Buttons";
import { registerSchema } from "./registerSchema";
import { useContext, useState } from "react";
import { InputGroup } from "../../Input/style";
import { Container } from "./style";
import { UserContexts } from "../../../contexts/userContext";
import { IUserRegister } from "../../../interfaces/userInterface";

interface iFormResgister {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  address: {
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
  password: string;
  confirmPassword: string;
  is_seller: boolean;
}

export const FormRegister = () => {
  const { registerUser } = useContext(UserContexts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormResgister>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const handleRegisterUser: SubmitHandler<IUserRegister> = (
    data: IUserRegister
  ) => {
    registerUser({ ...data });
  };

  return (
    <Container>
      <Form title="Cadastro" onSubmit={handleSubmit(handleRegisterUser)}>
        <h3 className="font-body-2-500">Informações Pessoais</h3>

        <Input
          label="Nome"
          register={register("name")}
          placeholder="Ex: Samuel Leão"
          error={errors.name && errors.name.message}
        />
        <Input
          label="E-mail"
          register={register("email")}
          placeholder="Ex: samuel@kenzie.com.br"
          error={errors.email && errors.email.message}
          type="email"
        />

        <Input
          label="Imagem de Perfil"
          register={register("img")}
          placeholder="ex: https://image.jpg "
          error={errors.img && errors.img.message}
        />

        <Input
          label="Senha"
          register={register("password")}
          placeholder="Digitar Senha"
          type="password"
          error={errors.password && errors.password.message}
        />
        <Input
          label="Confirmar Senha"
          register={register("confirmPassword")}
          placeholder="Confirmar Senha"
          type="password"
          error={errors.confirmPassword && errors.confirmPassword.message}
        />

        <Button
          type="submit"
          color="brand1"
          size="large"
          content="Finalizar Cadastro"
        />
      </Form>
    </Container>
  );
};
