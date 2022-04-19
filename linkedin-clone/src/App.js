// import React from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}>
            {/* <Login /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
