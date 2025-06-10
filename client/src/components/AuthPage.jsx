// src/pages/AuthPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authContext";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const res = await axios.post(url, formData);
      setMessage(res.data.message || "Success!");
      if (isLogin) {
        await console.log(res)
        login(res.data.token); // теперь вызываем login()
        navigate("/dashboard");
      }
      
      // Здесь можно сохранять токен или перенаправить
      // localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Ошибка при подключении к серверу"
      );
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ccc", borderRadius: 10 }}>
      <h2>{isLogin ? "Вход" : "Регистрация"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, margin: "10px 0" }}
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, margin: "10px 0" }}
          />
        </div>

        <button type="submit" style={{ padding: 10, width: "100%" }}>
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>

      <p style={{ marginTop: 15 }}>
        {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
        <button onClick={toggleMode} style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}>
          {isLogin ? "Зарегистрироваться" : "Войти"}
        </button>
      </p>

      {message && <p style={{ marginTop: 15 }}>{message}</p>}
    </div>
  );
};

export default AuthPage;
