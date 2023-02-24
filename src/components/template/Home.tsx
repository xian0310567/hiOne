import React from "react";

import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import Board from "@/components/atoms/Board";

const Home = () => {
  return (
    <Container>
      <Board>
        <Button>회원가입/로그인하기</Button>
      </Board>
    </Container>
  );
};

export default Home;
