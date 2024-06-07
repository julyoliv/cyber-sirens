import React from "react";
import * as S from "../components/Style.jsx";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <S.Home>
      <Header/>
      <h2>Bem vindo(a) ao portal do paciente</h2>
      <S.FastAccess>
        <Link to="/Schedule">
          {" "}
          <button>Agendar consulta</button>
        </Link>
        <Link to="/Schedule">
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
      <Footer/>
    </S.Home>
  );
}
export default Home;
