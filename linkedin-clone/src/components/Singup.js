import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { doc, setDoc } from "@firebase/firestore";
import { usersRef } from "../firebase/index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";

export default function SignUp({ showLoader }) {
  const [name, setName, mail, setMail, residency, setResidency, nationality, setNationality, interests, setInterests, bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const auth = getAuth();

  function handleSignUp(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const mail = event.target.mail.value; 
    const password = event.target.password.value; 
    const residency = event.target.residency.value;
    const nationality = event.target.nationality.value;
    const interests = event.target.interests.value;
    const bio = event.target.bio.value;


    createUserWithEmailAndPassword(auth, mail, password, name, residency)
      .then((userCredential) => {
        const user = userCredential.user;
        const docRef = doc(usersRef, user.uid); 
        setDoc(docRef, { name, mail, residency, nationality, interests, bio }); 
        navigate("/");
      })
      .catch((error) => {
        let code = error.code; 
        console.log(code);
        code = code.replaceAll("-", " "); 
        code = code.replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }

  return (
    <SignUpPage>
      <Nav>
        <a href="/">
          <img src="/images/connect-logo-thick-dot.svg" alt="" />
        </a>
      </Nav>
      <SingUpForm>
        <form onSubmit={handleSignUp} id="signupvolunteers">
           <h2>Sign up </h2>
          <select className="resiterAs">
            <option value="">Register as</option>
            <option value="organization">Organization</option>
            <option value="volunteer">Volunteer</option>
          </select>

          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" />
          <input required type="email" value={mail} onChange={(e) => setMail(e.target.value)} name="mail" placeholder="Email" />
          <input required type="text" name="password" placeholder="Password" />
          <input  type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} name="nationality" placeholder="Nationality" />
          <input type="text" value={residency} onChange={(e) => setResidency(e.target.value)} name="residency" placeholder="Country of residency" />
          <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} name="interests" placeholder="Interests (e.g. traveling, cooking, languages)" />
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} name="bio" placeholder="Tell us about yourself" />
          <p className="text-error">{errorMessage}</p>
          <button>Sign Up</button>
           <AlreadyUser>
          <p>Already have an account? <a href="/">Sign in</a></p>
          </AlreadyUser>
        </form>
           <SignUpImage>
          <img src="/images/signup-hello.svg" alt="" />
          </SignUpImage>
      </SingUpForm>     
    </SignUpPage>
  );
}

const SignUpPage = styled.div`
  background-color: #f5f5f5;
  
   @media (max-width: 768px) {
    margin: 0 auto;
    
  }
`

const Nav = styled.nav`
  max-width: 70%;
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


const SingUpForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 30px;
  margin: 50px auto 0 auto;
  width: 70%;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);

  @media (max-width: 768px) {
    margin: 20px auto;
    width: 80%;
    grid-template-columns: 1fr;
    
  }

  h2 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
  }

  
  form {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  select {
    line-height: 2.3;
    padding: 10px 5px;
    background-color: #ececec;
    color: #333;
    border: none;
    margin-bottom: 8px;

    :focus {
      outline: 1px solid #1F5B87;
    }
  }

 input {
    line-height: 2.3;
    padding: 5px 10px;
    background-color: #ececec;
    border: none;
    margin-bottom: 8px;

    :focus {
      outline: 1px solid #1F5B87;
    }
  }

  button {
    display: block;
    font-size: 1rem;
    background-color: #1F5B87;
    padding: 0 50px;
    height: 40px;
    width: 100%;
    margin: 20px auto 0 auto;
    border-radius: 24px;
    border: none;
    color: #fff;
    text-align: center;

    &:hover {
      background-color: #063A54;
      cursor: pointer;
    }
  }
`;

const AlreadyUser = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;
  color: #555;
  text-align: center;

  a {
    text-decoration: underline;
    color: #1f5b87;
  }
`

const SignUpImage = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    order: -1;
    width: 58%;
    margin: 0 auto;
  }
`

// export default SignUp;
