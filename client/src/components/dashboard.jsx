// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authContext";


const Dashboard = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
  
    const handleLogout = () => {
      logout();        // теперь вызываем logout()
      navigate("/");
    };
  
    return (
      <div style={{ padding: 20 }}>
        <h2>Личный кабинет</h2>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );
  };

export default Dashboard;
