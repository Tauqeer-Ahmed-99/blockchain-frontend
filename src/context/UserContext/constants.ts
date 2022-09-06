export enum CREATE_ACCOUNT {
  START = "CREATE_ACCOUNT_START",
  SUCCESS = "CREATE_ACCOUNT_SUCCESS",
  FAIL = "CREATE_ACCOUNT_FAIL",
}

export enum LOGIN_ACCOUNT {
  START = "LOGIN_ACCOUNT_START",
  SUCCESS = "LOGIN_ACCOUNT_SUCCESS",
  FAIL = "LOGIN_ACCOUNT_FAIL",
}

export enum LOAD_ACCOUNT {
  START = "LOAD_ACCOUNT_START",
  SUCCESS = "LOAD_ACCOUNT_SUCCESS",
  FAIL = "LOAD_ACCOUNT_FAIL",
}

export enum LOGOUT_ACCOUNT {
  START = "LOGOUT_ACCOUNT_START",
  SUCCESS = "LOGOUT_ACCOUNT_SUCCESS",
  FAIL = "LOGOUT_ACCOUNT_FAIL",
}

export enum SIGNUP_ERROR {
  EMAIL_IN_USE = "auth/email-already-in-use",
  INVALID_EMAIL = "auth/invalid-email",
  OPERATION_NOT_ALLOWED = "auth/operation-not-allowed",
  WEAK_PASSWORD = "auth/weak-password",
  CLOSE_MESSAGE_BOX = "CLOSE_MESSAGE_BOX",
}

export enum LOGIN_ERROR {
  INVALID_EMAIL = "auth/invalid-email",
  USER_DISABLED = "auth/user-disabled",
  USER_NOT_FOUND = "auth/user-not-found",
  WRONG_PASSWORD = "auth/wrong-password",
  CLOSE_MESSAGE_BOX = "CLOSE_MESSAGE_BOX",
}
