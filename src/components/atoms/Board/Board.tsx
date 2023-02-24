import React from "react";

import styled from "./lib/board.module.css";

import { BoardProps } from "./lib/board.interface";

const Board = ({ children, style }: BoardProps) => {
  return (
    <div className={styled.board} style={style}>
      {children}
    </div>
  );
};

export default Board;
