import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userContext"
import styled from "styled-components";



const Login = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };


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
          <h1>A place for volunteers and organizations</h1>
          <img src="/images/hero-loginpage.svg" alt="" />
        </Hero>
        <Form>
          <div className="form">
      <h2> Login </h2>
      <form onSubmit={handleSubmit} >
        <input placeholder="Email" type="email"  onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" >Sign In</button>
       
      </form>
    </div>
           
          <Email>
            <img src="/images/icons/email-icon.svg" alt="" />
            <span>Sign in with Email</span>
          </Email>
          <Google  onClick={handleGoogleSignIn}>
            <img src="/images/google.svg" alt="" />
           <span> Sign in with Google</span>
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
    margin-top: 0px;
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
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: auto;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
    @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  background-color: #fff;
  padding: 0 50px;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 24px;
  border: none;
  box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  z-index: 0;
  transition-duration: 167ms;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  span{
    margin: 0 0 0 20px;
  }

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`;

const Email = styled.button`
  display: flex;
  background-color: #D0021B;
  padding: 0 50px;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 24px;
  border: none;
  box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207,207,207,0.4);
  z-index: 0;
  transition-duration: 167ms;
  font-size: 14px;
  color: #fff;

  span{
    margin: 0 0 0 22px;
  }

  img {
    width: 22px;
  }

  &:hover {
    background-color: #A50216;
    color: #fff;
    cursor: pointer;
  }
`;

export default Login;

