import React from "react"
import * as S from "../components/Style.jsx"
import { Link } from "react-router-dom"
import Logo from "../assets/logoBranca.png"
import imgHome from "../assets/home.png"
import imgPerfil from "../assets/perfil.png"
import imgDependentes from "../assets/dependentes.png"
import Calendario from "../assets/calendario.png"
import imgSair from "../assets/imgSair.png"

function Navegacao() {

  return (
  <S.Navegacao> 
  <img className="logo" src={Logo} alt="" />
    <S.Lista>
      <li><Link to="/"> <img src={imgHome} alt="" /> Home </Link> </li>
      <li><Link to="/Perfil"> <img src={imgPerfil} alt="" /> Perfil </Link> </li>
      <li><Link to="/Dependentes"> <img src={imgDependentes} alt="" /> Adicionar dependentes </Link> </li>
      <li><Link to="/Agendamentos"> <img src={Calendario} alt="" /> Meus Agendamentos </Link> </li>
      <li><Link to="/Sair"> <img src={imgSair} alt="" /> Sair </Link> </li>
    </S.Lista>
  </S.Navegacao>

 
  )
}

export default Navegacao