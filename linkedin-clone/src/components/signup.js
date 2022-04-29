import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { doc, setDoc } from "@firebase/firestore";
import { usersRef } from "../firebase/index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";

export default function SignUp({ showLoader }) {
  const [name, setName, residency, setResidency, nationality, setNationality, interests, setInterests, bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  const auth = getAuth();

  // useEffect(() => {
  //     showLoader(false);
  // }, [showLoader]);

  function handleSignUp(event) {
    event.preventDefault();
    const mail = event.target.mail.value; // mail value from inout field in sign in form
    const password = event.target.password.value; // password value from inout field in sign in form
    const name = event.target.name.value;
    const residency = event.target.residency.value;
    const nationality = event.target.nationality.value;
    const interests = event.target.interests.value;
    const bio = event.target.bio.value;

    // read the docs: https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
    createUserWithEmailAndPassword(auth, mail, password, name, residency)
      .then((userCredential) => {
        // Created and signed in
        const user = userCredential.user;
        const docRef = doc(usersRef, user.uid); // create reference to the user in firestore
        setDoc(docRef, { name, residency, nationality, interests, bio }); // set/update the user in firestore with the values from userToUpdate/values from input fields
        navigate("/");
      })
      .catch((error) => {
        let code = error.code; // saving error code in variable
        console.log(code);
        code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
        code = code.replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }

  return (
    <section className="page">
      <SingUpForm>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Type your name" />
          <input type="email" name="mail" placeholder="Type your mail" />
          <input type="text" name="password" placeholder="Type your password" />
          <input type="text" value={residency} onChange={(e) => setResidency(e.target.value)} name="residency" placeholder="Country of residency" />
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} name="nationality" placeholder="Nationality" />
          <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} name="interests" placeholder="Interests 'traveling,cooking,languages'" />
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} name="bio" placeholder="Bio" />
          <p className="text-error">{errorMessage}</p>
          <button>Sign Up</button>
        </form>
        <p className="text-center">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </SingUpForm>
    </section>
  );
}

const SingUpForm = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto; */

  h1 {
    margin: 3rem;
    text-align: center;
  }

  .text-center {
    text-align: center;
    margin: 2rem;
  }

  form {
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }

  input {
    margin: 0.5rem;
    padding: 0.7rem;
  }

  button {
    width: 96%;
    margin: auto;
    margin: 0.5rem;
    padding: 0.7rem;
  }
`;

// export default SignUp;
