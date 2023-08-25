import { Link } from "react-router-dom";
import { FormLog } from "./style";
import { UserContexts } from "../../../contexts/userContext";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { IUserLogin } from "../../../interfaces/userInterface";

interface Iloginform {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { LoginUser } = useContext(UserContexts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iloginform>({
    resolver: yupResolver(loginSchema),
  });
  const submitLogin: SubmitHandler<IUserLogin> = (data) => {
    LoginUser(data);
  };
  return (
    <FormLog onSubmit={handleSubmit(submitLogin)}>
      <div className="orangeDetail">
        <h3>Login</h3>
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
        <button></button>
        <p>Ainda não possui conta?</p>
        <Link to="/register">
          <button></button>
        </Link>
      </div>
    </FormLog>
  );
};
