import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./login/login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
