import React from "react";
import styled from "styled-components";
import Leftside from "../components/Leftside";
import Rightside from "../components/Rightside";
import Header from "../components/Header";
import { Container, Layout } from "./Home";


const Messages = () => {
  return (
     <Container>
      <Header />
      <Layout>
        <Leftside />
        
        <Rightside />
      </Layout>
    </Container>
  );
};

export default Messages;