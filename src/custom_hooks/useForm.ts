import React, { useState, useCallback, useEffect } from "react";
import { emailRegex } from "../utilities/utils";

type ObjectOfFormValuesWhereKeysNameMatchedWithInputFieldNames = {
  [key: string]: string;
};
type FormErrors = { [key: string]: boolean };
type InputChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;
type InputBlurFunction = (event: React.FocusEvent<HTMLInputElement>) => void;
type ResetFormFunction = () => void;
type ResetFormValuesFunction = () => void;
type ResetFormErrorsFunction = () => void;

const useForm = (
  initialValues: ObjectOfFormValuesWhereKeysNameMatchedWithInputFieldNames
) => {
  const initialErrors: any = { ...initialValues };

  for (const fieldError in initialErrors) {
    initialErrors[fieldError] = false;
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState(initialErrors as FormErrors);
  const [event, setEvent] =
    useState<React.ChangeEvent<HTMLInputElement> | null>();

  const verifyEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const validateForm = useCallback(
    (
      event:
        | React.FocusEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLInputElement>,
      checkForMatch = false
    ) => {
      const errors: {
        [key: string]: boolean;
      } = {
        userName: !(formValues.userName.length >= 4),
        confirmUserName:
          formValues.userName !== formValues.confirmUserName ||
          !formValues.confirmUserName,
        userEmail: !verifyEmail(formValues.userEmail),
        confirmUserEmail:
          formValues.userEmail !== formValues.confirmUserEmail ||
          !formValues.confirmUserEmail,
        userPassword: formValues.userPassword.length <= 7,
        confirmUserPassword:
          formValues.userPassword !== formValues.confirmUserPassword ||
          !formValues.confirmUserPassword,
        userBirthDate:
          new Date(formValues.userBirthDate).getFullYear() <=
            new Date().getFullYear() - 18 || !formValues.userBirthDate,
      };

      if (checkForMatch) {
        const confirmFieldName =
          event.target.name.charAt(0).toUpperCase() +
          event.target.name.slice(1);
        setFieldErrors((prevState) => ({
          ...prevState,
          [event.target.name]: errors[event.target.name],
          [`confirm${confirmFieldName}`]: errors[`confirm${confirmFieldName}`],
        }));
      } else {
        setFieldErrors((prevState) => ({
          ...prevState,
          [event.target.name]: errors[event.target.name],
        }));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...Object.values(formValues)]
  );

  useEffect(() => {
    if (event) {
      validateForm(event, true);
    }
  }, [formValues, event, validateForm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
    setEvent(event);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    validateForm(event);
  };

  const resetForm = () => {
    setFormValues(initialValues);
    setFieldErrors(initialErrors as FormErrors);
  };
  const resetValues = () => {
    setFormValues(initialValues);
  };
  const resetErrors = () => {
    setFieldErrors(initialErrors as FormErrors);
  };

  return [
    formValues,
    fieldErrors,
    handleInputChange,
    handleInputBlur,
    resetForm,
    resetValues,
    resetErrors,
  ] as [
    ObjectOfFormValuesWhereKeysNameMatchedWithInputFieldNames,
    FormErrors,
    InputChangeFunction,
    InputBlurFunction,
    ResetFormFunction,
    ResetFormValuesFunction,
    ResetFormErrorsFunction
  ];
};

export default useForm;
