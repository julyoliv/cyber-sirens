import React, { useState } from "react";
import * as S from "../components/Style.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HzaLogo from "../assets/hza-logo-blue.jpeg";

function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigateTo = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");

  const formatCpf = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .substring(0, 14);
  };

  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));
  };

  const handlePasswordReset = () => {
    setAlertMessage(
      "Um link de redefinição de senha foi enviado para seu e-mail."
    );
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:5000/users?cpf=${cpf}&password=${password}`
      );
      console.log("Login Response:", response);

      if (response.data.length > 0) {
        localStorage.setItem("token", response.data[0].id);
        navigateTo("/Home");
      } else {
        setError("CPF e/ou senha inválidos");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Falha ao fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <S.Container>
      <S.NavBar1>
        <img src={HzaLogo} alt="HZA logo" />
        <h3>Portal do Paciente</h3>
      </S.NavBar1>
      <S.User>
        <h1>Login</h1>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        <S.Form onSubmit={handleLogin}>
          <h4>CPF:</h4>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={handleCpfChange}
            required
          />
          <h4>Senha:</h4>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {alertMessage && <S.AlertMessage>{alertMessage}</S.AlertMessage>}
          <Link to={handlePasswordReset}>Esqueci a senha</Link>
          <button type="submit">Login</button>
        </S.Form>
        <Link to="/Register">Não possuo uma conta</Link>
      </S.User>
    </S.Container>
  );
}

export default Login;
