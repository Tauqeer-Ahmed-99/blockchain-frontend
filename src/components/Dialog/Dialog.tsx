import React from "react";

import "./dialog.css";

type DialogPropsType = {
  open: boolean;
  onClose?: () => void;
  children?: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
};

const Dialog = ({
  open,
  onClose,
  children,
  width,
  height,
}: DialogPropsType) => {
  const handleBackdropClick = () => {
    onClose?.();
  };
  return (
    <>
      <div
        className={open ? "backdrop" : "hidden"}
        onClick={handleBackdropClick}
      ></div>
      <div
        style={{ width: width ?? "auto", height: height ?? "auto" }}
        className={open ? "dialog-box" : "hidden"}
      >
        {children}
      </div>
    </>
  );
};

export default Dialog;
