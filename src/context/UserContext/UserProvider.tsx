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
  LOAD_ACCOUNT,
  UPDATE_ACCOUNT,
  LOGOUT_ACCOUNT,
  LOGIN_ERROR,
} from "./constants";
import { useNavigate } from "react-router-dom";
import { NodeResponse } from "../../utilities/blockchain.types";

type Payload = {
  user: User | null;
  errorMessage: ErrorMessage;
  userBlockchainData?: NodeResponse;
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
        userBlockchainDetails: payload.userBlockchainData ?? null,
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
        userBlockchainDetails: payload.userBlockchainData ?? null,
      };
    case LOGIN_ACCOUNT.FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload.errorMessage,
      };
    case LOAD_ACCOUNT.START:
      return {
        ...state,
        isLoading: true,
        loadingMessage: "Loading user, please wait...",
      };
    case LOAD_ACCOUNT.SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        message: "Loading user successful.",
        userBlockchainDetails: payload.userBlockchainData ?? null,
      };
    case LOAD_ACCOUNT.FAIL:
      return {
        ...state,
        isLoading: false,
        user: null,
        message: "Loading user Fail.",
        isError: true,
      };
    case UPDATE_ACCOUNT.START:
      return {
        ...state,
        isLoading: true,
        message: "updating user details.",
      };
    case UPDATE_ACCOUNT.SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: "User details updated successfully.",
      };
    case UPDATE_ACCOUNT.FAIL:
      return {
        ...state,
        isLoading: false,
        message: "User details update Unsuccessful.",
        isError: true,
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

      const createNodeURL =
        process.env.REACT_APP_DEV_ADDRESS + `/create-node/${user.user.uid}`;

      const blockchainCreateNodeResponse = await fetch(createNodeURL, {
        method: "POST",
      });

      const parsedResponse: NodeResponse =
        await blockchainCreateNodeResponse.json();

      await updateProfile(user.user, {
        displayName: username,
        photoURL: parsedResponse.wallet.public_key,
      });

      sessionStorage.setItem("user", JSON.stringify(user.user));

      dispatch({
        type: CREATE_ACCOUNT.SUCCESS,
        payload: {
          user: user.user,
          errorMessage: { error: "", errorMessage: "" },
          userBlockchainData: parsedResponse,
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

      const loadNodeURL =
        process.env.REACT_APP_DEV_ADDRESS + `/load-node/${user.user.uid}`;

      const blockchainLoadNodeResponse = await fetch(loadNodeURL);

      const parsedResponse: NodeResponse =
        await blockchainLoadNodeResponse.json();

      sessionStorage.setItem("user", JSON.stringify(user.user));

      dispatch({
        type: LOGIN_ACCOUNT.SUCCESS,
        payload: {
          user: user.user,
          errorMessage: { error: "", errorMessage: "" },
          userBlockchainData: parsedResponse,
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

  const loadUser = async (user: User) => {
    try {
      dispatch({
        type: LOAD_ACCOUNT.START,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });

      const loadNodeURL =
        process.env.REACT_APP_DEV_ADDRESS + `/load-node/${user.uid}`;

      const blockchainLoadNodeResponse = await fetch(loadNodeURL);

      const parsedResponse: NodeResponse =
        await blockchainLoadNodeResponse.json();

      dispatch({
        type: LOAD_ACCOUNT.SUCCESS,
        payload: {
          user,
          errorMessage: { error: "", errorMessage: "" },
          userBlockchainData: parsedResponse,
        },
      });
    } catch (error) {
      dispatch({
        type: LOAD_ACCOUNT.FAIL,
        payload: {
          user: null,
          errorMessage: { error: "", errorMessage: "" },
        },
      });
    }
  };

  const updateUser = async (
    email: string,
    password: string,
    userName: string
  ) => {
    try {
      dispatch({
        type: UPDATE_ACCOUNT.START,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });

      await updateProfile(currentState.user as User, {
        displayName: userName,
        photoURL: currentState.user?.photoURL,
      });

      dispatch({
        type: UPDATE_ACCOUNT.SUCCESS,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_ACCOUNT.FAIL,
        payload: { user: null, errorMessage: { error: "", errorMessage: "" } },
      });
    }
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
    updateUser,
    logout,
    closeMessageBox,
  };

  return (
    <UserContext.Provider value={themeContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
