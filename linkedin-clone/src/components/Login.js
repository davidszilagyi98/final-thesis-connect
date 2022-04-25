import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/connect-logo-thick-dot.svg" alt=""/>
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
       <Section>
        <Hero>
          <h1>Welcome in our community of organizatios and volunteers</h1>
          <img src="/images/hero-loginpage.svg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
};

const Container = styled.div`
  padding = 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    };
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 45px;
  text-decoration: none;
  border-radius: 24px;
  width: 200px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  &:hover {
    background-color: #ECECEC;
    color: #333;
    text-decoration: none;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  border: 1px solid #1F5B87;
  color: #1F5B87;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  line-height: 40px;
  padding: 10px 45px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #1F5B87;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    margin-top: 100px;
    width: 55%;
    font-size: 56px;
    color: #1F5B87;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 750px;
    height: 670px;
    position: absolute;
    top: 40px;
    right: -170px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 24px;
  border: none;
  box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispactch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

