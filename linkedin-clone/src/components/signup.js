import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../context/userContext"


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { SignUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await SignUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
     <div className="form">
      <h2> New User</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" >Sign up</button>
      </form>
      Already have an account? <Link to="/">Log In</Link>
    </div>

    </>
  );
};

export default SignUp;