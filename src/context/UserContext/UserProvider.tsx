import React, { useReducer } from "react";

import { auth } from "../../firebase";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import UserContext, {
  initialState,
  UserContextStateType,
  ErrorMessage,
} from "./UserContext";
import {
  CREATE_ACCOUNT,
  LOGIN_ACCOUNT,
  LOGIN_ERROR,
  LOGOUT_ACCOUNT,
} from "./constants";
import { useNavigate } from "react-router-dom";

type Payload = {
  user: User | null;
  errorMessage: ErrorMessage;
};

const userContextReducer = (
  state: UserContextStateType = initialState,
  action: { type: string; payload: Payload }
) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ACCOUNT.START:
      return {
        ...state,
        isLoading: true,
        loadingMessage: "Signing up, please wait...",
      };
    case CREATE_ACCOUNT.SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        message: "Signup successful.",
      };
    case CREATE_ACCOUNT.FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload.errorMessage,
      };
    case LOGIN_ACCOUNT.START:
      return {
        ...state,
        isLoading: true,
        loadingMessage: "Logging in, please wait...",
      };
    case LOGIN_ACCOUNT.SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        message: "Login successful.",
      };
    case LOGIN_ACCOUNT.FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload.errorMessage,
      };
    case LOGIN_ACCOUNT.LOAD:
      return {
        ...state,
        user: payload.user,
      };
    case LOGIN_ERROR.CLOSE_MESSAGE_BOX:
      return {
        ...state,
        isError: false,
      };
    default:
      return state;
  }
};

const UserProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [currentState, dispatch] = useReducer(userContextReducer, initialState);

  const navigate = useNavigate();

  const createAccount = async (
    email: string,
    password: string,
    username: string,
    birthDate: string
  ) => {
    try {
      dispatch({
        type: CREATE_ACCOUNT.START,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });

      const user = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user.user, {
        displayName: username,
        photoURL: birthDate,
      });

      sessionStorage.setItem("user", JSON.stringify(user.user));

      dispatch({
        type: CREATE_ACCOUNT.SUCCESS,
        payload: {
          user: user.user,
          errorMessage: { error: "", errorMessage: "" },
        },
      });

      navigate("/dashboard");
    } catch (error: any) {
      dispatch({
        type: CREATE_ACCOUNT.FAIL,
        payload: {
          user: null,
          errorMessage: { error: error.code, errorMessage: error.message },
        },
      });
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      dispatch({
        type: LOGIN_ACCOUNT.START,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });

      const user = await signInWithEmailAndPassword(auth, email, password);

      sessionStorage.setItem("user", JSON.stringify(user.user));

      dispatch({
        type: LOGIN_ACCOUNT.SUCCESS,
        payload: {
          user: user.user,
          errorMessage: { error: "", errorMessage: "" },
        },
      });

      navigate("/dashboard");
    } catch (error: any) {
      let errorMessage = "";
      switch (error.code) {
        case LOGIN_ERROR.INVALID_EMAIL:
          errorMessage = "Please enter a valid email address.";
          break;
        case LOGIN_ERROR.USER_DISABLED:
          errorMessage =
            "This user has been disabled.Contact admin for support.";
          break;
        case LOGIN_ERROR.USER_NOT_FOUND:
          errorMessage = "Email you've entered is not found";
          break;
        case LOGIN_ERROR.WRONG_PASSWORD:
          errorMessage = "Password you've entered is wrong.";
          break;
        default:
          errorMessage = error.message;
      }
      dispatch({
        type: CREATE_ACCOUNT.FAIL,
        payload: {
          user: null,
          errorMessage: { error: error.code, errorMessage: errorMessage },
        },
      });
      console.log(error);
    }
  };

  const loadUser = (user: User) => {
    dispatch({
      type: LOGIN_ACCOUNT.LOAD,
      payload: { user, errorMessage: { error: "", errorMessage: "" } },
    });
  };

  const logout = () => {
    try {
      dispatch({
        type: LOGOUT_ACCOUNT.START,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });
      signOut(auth);
      sessionStorage.removeItem("user");
      dispatch({
        type: LOGOUT_ACCOUNT.SUCCESS,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });
    } catch (error: any) {
      dispatch({
        type: LOGOUT_ACCOUNT.FAIL,
        payload: {
          user: null,
          errorMessage: {
            error: error.code,
            errorMessage: error.message,
          },
        },
      });
    }
  };

  const closeMessageBox = () => {
    dispatch({
      type: LOGIN_ERROR.CLOSE_MESSAGE_BOX,
      payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
    });
  };

  const themeContext = {
    state: currentState,
    createAccount,
    login,
    loadUser,
    logout,
    closeMessageBox,
  };

  return (
    <UserContext.Provider value={themeContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
