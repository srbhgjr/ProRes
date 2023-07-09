import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./login/login";
import { Resume } from "./resume/resume";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
