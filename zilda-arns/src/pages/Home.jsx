import React from "react";
import * as S from "../components/Style.jsx";
import { Link } from "react-router-dom";
import Logo from "../assets/logoBranca.png";
import imgHome from "../assets/home.png";
import imgPerfil from "../assets/perfil.png";
import imgDependentes from "../assets/dependentes.png";
import imgSair from "../assets/imgSair.png";
import Ph from "../assets/phone.png";
import Lg from "../assets/logo-footer.png";

function Home() {
  return (
    <S.Home>
      <S.Navigation>
        <img className="logo" src={Logo} alt="" />
        <S.List>
          <li>
            <Link to="/Home">
              {" "}
              <img src={imgHome} alt="" /> Home{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/Profile">
              {" "}
              <img src={imgPerfil} alt="" /> Perfil{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/AddDep">
              {" "}
              <img src={imgDependentes} alt="" /> Adicionar dependentes{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to="/MainPage">
              {" "}
              <img src={imgSair} alt="" /> Sair{" "}
            </Link>{" "}
          </li>
        </S.List>
      </S.Navigation>
      <h2>Bem vindo(a) ao portal do paciente</h2>
      <S.FastAccess>
        <Link to="/">
          {" "}
          <button>Agendar consulta</button>
        </Link>
        <Link to="/">
          {" "}
          <button>Minhas consultas</button>
        </Link>
      </S.FastAccess>
      <S.NextApp>
        <p className="ps">Próximas consultas:</p>
        <div>
          <p>Você não possui consultas agendadas.</p>
        </div>
      </S.NextApp>
      <S.Footer>
        <S.Container1>
          <S.Box>
            <img src={Lg} alt="Logo" />
            <p>
              <strong>Tecnologia e humanidade unidas pela sua saúde</strong>
            </p>
          </S.Box>

          <S.Box2>
            <p>
              Entre em contato conosco:
              <S.Img src={Ph} alt="Telefone" />
            </p>
          </S.Box2>
        </S.Container1>

        <S.Box3>
          <hr widht="300px"></hr>
          <br />
          <p>
            Responsável técnico: Cyber Sirens.
            <br />
            Copyright 2024. Todos os direitos reservados.
          </p>
        </S.Box3>
      </S.Footer>
    </S.Home>
  );
}
export default Home;
