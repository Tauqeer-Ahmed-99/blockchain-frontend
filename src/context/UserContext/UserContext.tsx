import { createContext } from "react";
import { User } from "firebase/auth";
import { NodeResponse } from "../../utilities/blockchain.types";

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
  userBlockchainDetails: NodeResponse | null;
};

export const initialState: UserContextStateType = {
  user: null,
  isLoading: false,
  isError: false,
  loadingMessage: "",
  message: "",
  errorMessage: { error: "", errorMessage: "" },
  userBlockchainDetails: null,
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
  updateUser: (email: string, password: string, userName: string) => void;
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
  updateUser: (email: string, password: string, userName: string) => {},
  logout: () => {},
  closeMessageBox: () => {},
};

const UserContext = createContext(context);

export default UserContext;
