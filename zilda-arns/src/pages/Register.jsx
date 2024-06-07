import React, { useState, useEffect } from "react";
import * as S from "../components/Style.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HzaLogo from "../assets/hza-logo-blue.jpeg";

function Register() {
  const [cpf, setCpf] = useState("");
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isCpfValid, setIsCpfValid] = useState(true);
  const navigateTo = useNavigate();

  const formatCpf = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .substring(0, 14);
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1)$2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  };

  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  useEffect(() => {
    const validateCpf = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users?cpf=${cpf}`
        );
        setIsCpfValid(response.data.length === 0);
      } catch (error) {
        console.error("Error validating CPF:", error);
      }
    };

    if (cpf.length === 14) {
      validateCpf();
    } else {
      setIsCpfValid(true);
    }
  }, [cpf]);

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!isCpfValid) {
      setError("CPF já está registrado.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }

    try {
      const newUser = {
        cpf,
        dob,
        name,
        phone,
        email,
        password,
      };

      const response = await axios.post("http://localhost:5000/users", newUser);
      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        setCpf("");
        setDob("");
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigateTo("/");
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      setError("Falha ao registrar usuário. Por favor, tente de novo.");
    }
  };

  return (
    <S.Container>
      <S.NavBar1>
        <img src={HzaLogo} alt="HZA logo" />
        <h3>Portal do Paciente</h3>
      </S.NavBar1>
        <S.User>
          <h1>Cadastro</h1>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.Form onSubmit={handleRegister}>
            <h4>CPF:</h4>
            <input
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={handleCpfChange}
              required
            />
            {!isCpfValid && (
              <S.ErrorMessage>CPF já está registrado.</S.ErrorMessage>
            )}
            <h4>Data de nascimento:</h4>
            <input
              type="date"
              placeholder="00/00/0000"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <h4>Nome completo:</h4>
            <input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <h4>Telefone para contato:</h4>
            <input
              type="text"
              placeholder="(00)00000-0000"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            <h4>Email:</h4>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <h4>Confirme a senha:</h4>
            <input
              type="password"
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={!isCpfValid}>
              Cadastrar
            </button>
          </S.Form>
          <Link to="/Login">Já tenho uma conta</Link>
        </S.User>
    </S.Container>
  );
}

export default Register;
