import React from "react"
import { Link } from "react-router-dom"
import * as S from "../components/Style.jsx";
import Imagemmoca from "../assets/imagemmoca.png";

function MainPage(){
  return(
    <>
    <S.SectionTelaprincipal>
      <S.Imagemmoça src={Imagemmoca} alt="imagemmoca" />
    <div>
    <h2>Onde a cura encontra a compaixão</h2>
    <h1>Nosso portal do paciente foi projetado pensando em você. No Hospital Zilda Arns, sua saúde é nossa prioridade. Estamos comprometidos em fornecer cuidados de saúde de alta qualidade em um ambiente seguro e acolhedor. Junte-se a nós na jornada para uma vida mais saudável.</h1>
    </div>
    
    
    </S.SectionTelaprincipal>

   <Link to="/Register">Não possuo uma conta.</Link>
   <Link to="/Login">Já tenho uma conta</Link>
    </>
  )
} 

export default MainPage