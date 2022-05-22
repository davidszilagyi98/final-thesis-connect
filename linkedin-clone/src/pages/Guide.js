import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Container } from "../pages/Home";

const Guide = (props) => {
  return (
    <Container>
      <Header />
      <GuideContainer>
        <GuideTop>
          <h1>Guide</h1>
        </GuideTop>
        <InfoGuide>
          <div>
            <h3>What is this page is about?</h3>
            <p>
              This page has been created for a reason, to connect non-profit organizations who are working with Eramus+ all around the world with each other for collaborations, as well as volunteers who would like to attend in different projects and would like to fond and connect with like-minded
              people.
            </p>
          </div>
          <img src="/images/icons/questionmark.svg" alt="questionmark" />
        </InfoGuide>

        <InfoGuide2>
          <div>
            <h3>What are the different colors mean?</h3>
            <p>As we have two different kind of user in our platform, we would like to make it easier to differenciate them. The dark blue color represents the organizations and the yellow is the color for the volunteers.</p>
          </div>
          <img src="/images/icons/colors.svg" alt="colors" />
        </InfoGuide2>

        <InfoGuide>
          <div>
            <h3>What can you use it for?</h3>
            <p>
              This platform is not just connect people and organizations, but also gives opportunity to match volunteers with the right program for them. In each project description there are keywords, what is it about, so the volunteers can easily find the project that fits for them. It's working
              also in the other way, as the volunteers can give the topics that they are interested in, so the NGOs can match them with their projects.{" "}
            </p>
          </div>
          <img src="/images/icons/networking.svg" alt="networking" />
        </InfoGuide>

        <InfoGuide2>
          <div>
            <h3>What are the benefits of the Eramsus+ projects?</h3>
            <p>Volunteers can learn many interesting topics in a non-formal way, as well as get to know many cultures and countries. These are experiences that can change lifes. In addition the projects are covered by the European Union, so everybody can enjoy this opportunity. </p>
          </div>
          <img src="/images/icons/culture.svg" alt="culture" />
        </InfoGuide2>

        <InfoGuide>
          <div>
            <h3>How to find and apply for a project?</h3>
            <p>You can represent your home country as well as the country of residence in different projects. The little flags next to everybodys name are represent the nationality and the country of resindency. </p>
            <ul>
              <li>Discover the projects on the Explore page.</li>
              <li>Check the small flags to know if you can apply for the project.</li>
              <li>For more information, download the infopack.</li>
              <li>If you like what you see, simply click on the Apply button.</li>
            </ul>
          </div>
          <img src="/images/icons/apply.svg" alt="apply" />
        </InfoGuide>
      </GuideContainer>
    </Container>
  );
};

const GuideContainer = styled.div`
  background-color: #fff;
  width: 70%;
  margin: 0 auto 5rem auto;
  padding-bottom: 5rem;
  border-radius: 12px;
  box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -webkit-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -moz-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
`;

const GuideTop = styled.div`
  background: #1f5b87;
  border-radius: 12px 12px 0 0;
  width: 100%;
  margin: 5rem auto;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 3rem;
    font-weight: 400;
  }
`;

const InfoGuide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr;
  column-gap: 25px;
  grid-template-areas: "text image";
  width: 70%;
  margin: 20px auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }

  div {
    grid-area: text;
    display: grid;
    align-content: center;
    margin-left: 20px;

    h3 {
      margin-bottom: 20px;
    }
  }

  img {
    grid-area: image;
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }

  p {
    font-size: 0.8rem;
    width: 80%;
  }

  ul {
    padding-left: 10px;
    margin-top: 10px;
  }

  li {
    list-style-type: decimal;
    font-size: 0.8rem;
    padding: 10px 0;
  }
`;

const InfoGuide2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr;
  column-gap: 0;
  grid-template-areas: "image2 text2";
  width: 70%;
  margin: 20px auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }

  div {
    grid-area: text2;
    display: grid;
    align-content: center;
    margin-left: 20px;

    h3 {
      margin-bottom: 20px;
      font-size: 1rem;
    }
  }

  img {
    grid-area: image2;
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }

  p {
    font-size: 0.8rem;
    width: 80%;
  }
`;

export default Guide;
