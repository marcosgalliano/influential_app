import "./App.css";

// VIEWS

import Login from "./views/Login/Login";
import NavBar from "./components/NavBar/NavBar";

// UTILS

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  /* 
  const ProtectedRoute = ({ children }) => {
    const userId = localStorage.getItem("idUser");

    if (!userId) {
      return <Navigate to="/" />;
    }

    return children;
  }; */

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
