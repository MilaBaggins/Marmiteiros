import { IUser } from "../contexts/userContext";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface IProviderValue {
  LoginUser: (formLogin: IUserLogin) => Promise<IuserResponse | undefined>;
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

export interface IUserUpdate {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
