import React from "react";
import * as S from "../components/Style.jsx";
import { Link, useNavigate } from "react-router-dom";
import MainImg from "../assets/main-img.png";
import Logo from "../assets/main-logo.png";

function MainPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  const handleCadastroClick = () => {
    navigate("/Register");
  };
  return (
    <>
      <S.NavBar2>
        <S.Logo src={Logo} alt="Logo HZA" />
        <S.Botoes>
          <S.BotaoLogin>
            <button onClick={handleLoginClick}>Login</button>
          </S.BotaoLogin>
          <S.BotaoCadastro>
            <button onClick={handleCadastroClick}>Cadastre-se</button>
          </S.BotaoCadastro>
        </S.Botoes>
      </S.NavBar2>
      <S.MainPage>
        <S.MainImg src={MainImg} alt="girl ilustration" />
        <div>
          <h2>Onde a cura encontra a compaixão</h2>
          <h1>
            Nosso portal do paciente foi projetado pensando em você. No Hospital
            Zilda Arns, sua saúde é nossa prioridade. Estamos comprometidos em
            fornecer cuidados de saúde de alta qualidade em um ambiente seguro e
            acolhedor. Junte-se a nós na jornada para uma vida mais saudável.
          </h1>
        </div>
      </S.MainPage>
    </>
  );
}

export default MainPage;