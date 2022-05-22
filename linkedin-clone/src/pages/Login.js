import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userContext";
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
      navigate("/home");  // navigate the user to the main page of the platform
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
          <img src="/images/connect-logo-thick-dot.svg" alt="connect-logo" />
        </a>
        <div>
          <a href="/signup">
            <Join> Join now</Join>
          </a>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>A place for volunteers and organizations</h1>
          <img src="/images/hero-loginpage.svg" alt="hero" />
        </Hero>
        <Form>
          <Email onSubmit={handleSubmit}>
            <h2> Login </h2>
            <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign in</button>
          </Email>
          <Hr>
            <div></div>
            <div>or</div>
            <div></div>
          </Hr>
          <Google onClick={handleGoogleSignIn}>
            <img src="/images/google.svg" alt="google" />
            <span> Sign in with Google</span>
          </Google>
          <Register>
            <p>
              New user? <a href="/signup">Create an account</a>
            </p>
          </Register>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
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
    }
  }
`;

const Join = styled.a`
  border: 1px solid #1f5b87;
  color: #1f5b87;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  line-height: 40px;
  padding: 10px 45px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #1f5b87;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    fon-size: 14px;
    padding: 8px 30px;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 650px;
  padding-bottom: 138px;
  padding-top: 40px;
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
    color: #1f5b87;
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
    width: 67%;
    height: 700px;
    position: absolute;
    top: 70px;
    right: -150px;

    @media (max-width: 1291px) {
      width: 50%;
      right: 0px;
    }

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
  width: 35%;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);

  @media (max-width: 768px) {
    margin: 20px auto;
    width: 80%;
  }
`;

const Email = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  justify-content: space-evenly;

  h2 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 400;
    color: #333;
  }

  input {
    line-height: 2.3;
    padding: 3px 10px;
    background-color: #ececec;
    border: none;
    margin-bottom: 8px;

    :focus {
      outline: 1px solid #1f5b87;
    }
  }

  button {
    display: block;
    font-size: 1rem;
    background-color: #d0021b;
    padding: 0 50px;
    height: 40px;
    width: 100%;
    margin: 20px auto 0 auto;
    border-radius: 24px;
    border: none;
    color: #fff;
    text-align: center;

    &:hover {
      background-color: #b80017;
      cursor: pointer;
    }
  }
`;

const Hr = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;

  div {
    font-size: 0.8rem;
    color: #555;

    &:first-child,
    &:last-child {
      -webkit-flex: 1;
      -moz-flex: 1;
      flex: 1;
      position: relative;

      &:before {
        content: " ";
        position: absolute;
        top: 50%;
        left: 0px;
        right: 0px;
        height: 1px;
        background-color: #555;
      }
    }

    &:first-child {
      margin-right: 20px;
    }

    &:last-child {
      margin-left: 20px;
    }
  }
`;

const Google = styled.button`
  display: flex;
  background-color: #fff;
  padding: 0 50px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 24px;
  border: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  z-index: 0;
  transition-duration: 167ms;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  span {
    margin: 0 0 0 20px;
    font-size: 1rem;
  }

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`;

const Register = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;
  color: #555;

  a {
    text-decoration: underline;
    color: #1f5b87;
  }
`;

export default Login;
