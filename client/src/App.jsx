import { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "./authContext";
import Dashboard from "./components/dashboard"
import HeaderApp from "./components/header"
import AuthPage from './components/AuthPage'
import { Navigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { isLoggedIn } = useContext(AuthContext);



  const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("token"); // или "isLoggedIn" === "true"
    return isAuth ? children : <Navigate to="/" />;
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <AuthPage />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
