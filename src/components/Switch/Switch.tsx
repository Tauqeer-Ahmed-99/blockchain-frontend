import React from "react";

import "./switch.css";

type SwitchPropsType = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Switch = ({ checked, onChange }: SwitchPropsType) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
