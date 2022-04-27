import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { doc, setDoc } from "@firebase/firestore";
import { usersRef } from "../firebase/index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [password, setPassword] = useState("");
//   const { SignUp } = useUserAuth();
//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await SignUp(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <div className="form">
//         <h2> New User</h2>
//         <form onSubmit={handleSubmit}>
//           <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
//           <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
//           <button type="submit">Sign up</button>
//         </form>
//         Already have an account? <Link to="/">Log In</Link>
//       </div>
//     </>
//   );
// };

export default function SignUp({ showLoader }) {
  const [name, setName] = useState("");
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

    // read the docs: https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Created and signed in
        const user = userCredential.user;
        const docRef = doc(usersRef, user.uid); // create reference to the user in firestore
        setDoc(docRef, { name }); // set/update the user in firestore with the values from userToUpdate/values from input fields
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
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Type your name" />
        <input type="email" name="mail" placeholder="Type your mail" />
        <input type="password" name="password" placeholder="Type your password" />
        <p className="text-error">{errorMessage}</p>
        <button>Sign Up</button>
      </form>
      <p className="text-center">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </section>
  );
}

// export default SignUp;
