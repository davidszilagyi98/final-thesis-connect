import React from "react";
import "./App.css";
import { useUserContext } from "./context/userContext";
import Home from "./pages/Home";
import Login from "./pages/Login"



function App() {
  const { user, loading, error } = useUserContext();  

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Home /> : <Login />} </>}
    </div>
  );
}

export default App;
