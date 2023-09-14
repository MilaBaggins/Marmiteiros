import { StyledFormRegister } from "../register/style";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContexts } from "../../../contexts/userContext";
import { IUserRegister } from "../../../interfaces/userInterface";
import { StyledButtons } from "../../buttons/style";
import { Link } from "react-router-dom";

interface iFormResgister {
  name: string;
  email: string;
  img: string;
  password: string;
  confirmPassword: string;
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
    <StyledFormRegister onSubmit={handleSubmit(handleRegisterUser)}>
      <div className="greenDetail">
        <h2>Cadastro</h2>
      </div>

      <div className="inputs">
        <div className="inputsNameEmailUrl">
          <label htmlFor="name">Nome</label>
          <input type="name" placeholder="Nome" {...register("name")}></input>
          {errors.name && <h4>{errors.name.message}</h4>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
          ></input>
          {errors.email && <h4>{errors.email.message}</h4>}

          <label htmlFor="img">Imagem de Perfil</label>
          <input
            type="img"
            placeholder="URL da imagem"
            {...register("img")}
          ></input>
          {errors.img && <h4>{errors.img.message}</h4>}
        </div>

        <div className="inputsPassword">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          ></input>
          {errors.password && <h4>{errors.password.message}</h4>}

          <label htmlFor="confirmPassword">Confirme a senha</label>
          <input
            type="confirmPassword"
            placeholder="Digite sua senha novamente"
            {...register("confirmPassword")}
          ></input>
          {errors.confirmPassword && <h4>{errors.confirmPassword.message}</h4>}
        </div>
      </div>

      <StyledButtons>
        <div className="containerButtons">
          <div className="buttons">
            <button className="defaultSizeYellow">Cadastrar</button>
            <p>Já possui uma conta?</p>
            <Link to="/login" className="buttons">
              <button className="defaultSizeOrange">Ir para o Login </button>
            </Link>
          </div>
        </div>
      </StyledButtons>
    </StyledFormRegister>
  );
};
