import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./views/Users";
import Add from "./views/Add";
import Edit from "./views/Edit";
import NavBar from "./components/NavBar";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="body">
      <NavBar />

      <div className="views">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
