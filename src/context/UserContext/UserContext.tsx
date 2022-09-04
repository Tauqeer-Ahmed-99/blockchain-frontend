import { createContext } from "react";
import { User } from "firebase/auth";

export type ErrorMessage = {
  error: string;
  errorMessage: string;
};

export type UserContextStateType = {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  loadingMessage: string;
  message: string;
  errorMessage: ErrorMessage;
};

export const initialState: UserContextStateType = {
  user: null,
  isLoading: false,
  isError: false,
  loadingMessage: "",
  message: "",
  errorMessage: { error: "", errorMessage: "" },
};

type UserContextType = {
  state: UserContextStateType;
  createAccount: (
    email: string,
    password: string,
    username: string,
    birthDate: string
  ) => void;
  login: (email: string, password: string) => void;
  loadUser: (user: User) => void;
  logout: () => void;
  closeMessageBox: () => void;
};

const context: UserContextType = {
  state: initialState,
  createAccount: (
    email: string,
    password: string,
    username: string,
    birthDate: string
  ) => {},
  login: (email: string, password: string) => {},
  loadUser: (user: User) => {},
  logout: () => {},
  closeMessageBox: () => {},
};

const UserContext = createContext(context);

export default UserContext;