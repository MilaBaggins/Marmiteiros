import { Link } from "react-router-dom";
import { StyledFormLogin } from "./style";
import { UserContexts } from "../../../contexts/userContext";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { Iloginform } from "../../../interfaces/userInterface";
import { StyledButtons } from "../../buttons/style";

export const LoginForm = () => {
  const { LoginUser } = useContext(UserContexts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iloginform>({
    resolver: yupResolver(loginSchema),
  });
  const submitLogin: SubmitHandler<Iloginform> = (data) => {
    LoginUser(data);
  };
  return (
    <StyledFormLogin onSubmit={handleSubmit(submitLogin)}>
      <div className="greenDetail">
        <h2>Login</h2>
      </div>
      <div className="formLoginDiv">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" {...register("email")}></input>
        {errors.email && <h4>{errors.email.message}</h4>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          {...register("password")}
        ></input>
        {errors.password && <h4>{errors.password.message}</h4>}
        <span>Esqueci minha senha</span>
        <StyledButtons>
          <div className="buttons">
            <button className="defaultSizeYellow">Entrar</button>
            <p>Ainda não possui conta?</p>
            <Link to="/register" className="buttons">
              <button className="defaultSizeOrange">Cadastre-se</button>
            </Link>
          </div>
        </StyledButtons>
      </div>
    </StyledFormLogin>
  );
};
