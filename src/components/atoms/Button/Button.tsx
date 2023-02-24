import React from "react";

import { ButtonProps } from "./lib/button.interface";
import styled from "./lib/button.module.css";

const Button = ({ children, style }: ButtonProps) => {
  return (
    <button className={styled.button} style={style}>
      {children}
    </button>
  );
};

export default Button;
