import React from "react";

import "./dialog.css";

type DialogPropsType = {
  open: boolean;
  onClose?: () => void;
  children?: JSX.Element | JSX.Element[];
};

const Dialog = ({ open, onClose, children }: DialogPropsType) => {
  const handleBackdropClick = () => {
    onClose?.();
  };
  return (
    <>
      <div
        className={open ? "backdrop" : "hidden"}
        onClick={handleBackdropClick}
      ></div>
      <div className={open ? "dialog-box" : "hidden"}>{children}</div>
    </>
  );
};

export default Dialog;
