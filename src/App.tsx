// adding some comment
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/utils/theme";

import HomePage from "./pages/Home.page";
import RegisterPage from "./pages/Register.Page";
import SignInPage from "./pages/Sign-in.page";

function App() {
  return (
    <div>
      <h1>Learn React</h1>
    </div>
  );
}

export default App;
