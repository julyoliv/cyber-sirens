import React, { useState, useEffect } from "react";
import * as S from "../components/Style.jsx";
import HzaLogo from "../assets/hza-logo-blue.jpeg";
import Header from "../components/Header.jsx";
function Profile() {
  return (
    <S.Container>
    
      <S.NavBar1>
        <img src={HzaLogo} alt="HZA logo" />
        <h3>Portal do Paciente</h3>
      </S.NavBar1>
      <S.User>
        <h2>Perfil</h2>
        <S.Form>
          <h4>Nome:</h4>
          <input type="text" placeholder="Nome" />
          <h4>CPF:</h4>
          <input type="text" placeholder="CPF" />
          <h4>Data de Nascimento:</h4>
          <input type="date" />
          <h4>Email:</h4>
          <input type="email" placeholder="Email" />
          <h4>Telefone</h4>
          <input type="text" placeholder="(00)00000-0000" />
          <h4>Senha:</h4>
          <input type="password" placeholder="Senha" />
          <button type="submit">Salvar</button>
        </S.Form>
      </S.User>
    </S.Container>
  );
}

export default Profile;