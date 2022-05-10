import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { LeftsideOrganizations } from "../components/LeftsideOrganizations";
import Rightside from "../components/Rightside";
import MainOrganizations from "../components/MainOrganizations";
import { Container } from "./Home";


const Organizations = () => {
  return (
     <Container>
      <Header />
      <LayoutOrganizations>
      <LeftsideOrganizations/>
      <Rightside/>
      <MainOrganizations/>
      </LayoutOrganizations>
      
    </Container>
  );
};

const LayoutOrganizations = styled.div`
  display: grid;
  grid-template-areas: "leftsideorganizations main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 5fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Organizations;