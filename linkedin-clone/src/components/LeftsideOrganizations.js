import React from "react";
import styled from "styled-components";
import Leftside from "./Leftside";

const LeftsideOrganizations = (props) => {
  return (
    <Container>
      <Leftside/>

     <CountryFilterButton>Counrty <img src="./images/icons/downarrow-icon.svg" alt="" /></CountryFilterButton>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftsideorganizations; 
`;

const CountryFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: #333;
  background-color: #fff;
  width: 100%;
  font-size: 14px;
  padding: 0.7rem;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);

  img {
    display: block;
    width: 8px;
    padding-left: 3px;
  }

  &:hover {
    cursor: pointer;
    background-color: #EBEBEB;
  }
`

export { LeftsideOrganizations, CountryFilterButton };
