import { IUser } from "../contexts/userContext";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface IProviderValue {
  LoginUser: (formLogin: Iloginform) => Promise<IuserResponse | undefined>;
  user: IuserResponse | null;
  registerUser: (data: IUserRegister) => Promise<void>;
  updateUser: (data: IUserUpdate) => Promise<void>;
  deleteUser: () => Promise<void>;
  userLoged: IUser | null;
  verifyUserLoged: () => void;
}

export interface IuserResp {
  id: number;
  name: string;
  email: string;
}

export interface IuserResponse {
  token: string;
  user: IuserResp;
}

export interface IUserRegister {
  name: string;
  email: string;
  img: string;
  password: string;
  confirmPassword: string;
}

export interface IUserUpdate {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
}

/* export interface IUserLogin {
  email: string;
  password: string;
} */

export interface Iloginform {
  email: string;
  password: string;
}
