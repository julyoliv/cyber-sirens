import React from "react";
import * as S from "../components/Style.jsx";
import { Link } from "react-router-dom";
import Logo from "../assets/logoBranca.png";
import imgHome from "../assets/home.png";
import imgPerfil from "../assets/perfil.png";
import imgDependentes from "../assets/dependentes.png";
import imgSair from "../assets/imgSair.png";
export default function Header(){
    return(
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
            <Link to="/">
              {" "}
              <img src={imgSair} alt="" /> Sair{" "}
            </Link>{" "}
          </li>
        </S.List>
      </S.Navigation>)
}
