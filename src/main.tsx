import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Form } from "./components/Form";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Form />} path="/form" />
      </Routes>
    </Router>
  </React.StrictMode>
);
