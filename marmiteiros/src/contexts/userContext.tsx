import { createContext, useState } from "react";
import {
  IProviderValue,
  Iloginform,
  IUserRegister,
  IUserUpdate,
  IuserResponse,
  iUserProviderProps,
} from "../interfaces/userInterface";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export interface IDecoded {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

export interface IUser {
  birth_date: string;
  description: string;
  cpf: string;
  email: string;
  id: string;
  name: string;
  phone: string;
}

export const UserContexts = createContext({} as IProviderValue);

export const UserProviders = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<IuserResponse | null>(null);
  const [userLoged, setUserLoged] = useState<IUser | null>(null);
  const navigate = useNavigate();
  /* const token = localStorage.getItem("@TOKEN"); */

  const retriverUser = async (id: string, token: string) => {
    try {
      const response = await api.get("users/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserLoged(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyUserLoged = () => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const decoded: IDecoded = jwt_decode(token);

      retriverUser(decoded.sub, token);
    } else {
      navigate("/login");
    }
  };

  const LoginUser = async (formLogin: Iloginform) => {
    try {
      const response = await api.post<IuserResponse>("login", formLogin);

      const decoded: IDecoded = jwt_decode(response.data.token);

      setUser(response.data);

      retriverUser(decoded.sub, response.data.token);

      toast.success("Você está logado");

      navigate("/advertiser");

      window.localStorage.setItem("@TOKEN", response.data.token);

      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      return response.data;
    } catch (error) {
      console.log(error);

      toast.error("Email incorretos");
    }
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      await api.post("users", data);

      navigate("/login");

      toast.success("Usuário criado!");
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado");
    }
  };

  const updateUser = async (data: IUserUpdate) => {
    try {
      await api.patch("users", data);

      toast.success("Atualização concluída!");
    } catch (error) {
      console.log(error);

      toast.error("Erro na atualização");
    }
  };

  const deleteUser = async () => {
    try {
      await api.patch("users" + user?.user.id);

      toast.success("Usuário deletado");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao deletar usuários");
    }
  };

  return (
    <UserContexts.Provider
      value={{
        LoginUser,
        user,
        registerUser,
        updateUser,
        deleteUser,
        userLoged,
        verifyUserLoged,
      }}
    >
      {children}
    </UserContexts.Provider>
  );
};
