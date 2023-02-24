import React from "react";

import styled from "./lib/container.module.css";

import { ContainerProps } from "./lib/container.interface";

const Container = ({ children, style }: ContainerProps) => {
  return <div className={styled.container}>{children}</div>;
};

export default Container;
