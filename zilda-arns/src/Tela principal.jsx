import React from "react";
import *  as S from "./Style.jsx"
import Imagemmoça from "../src/assets/imagemmoça.png"

function Telaprincipal() {
  return (
    <S.SectionTelaprincipal>
      <S.Imagemmoça src={Imagemmoça} alt="imagemmoça" />
    <div>
    <h2>Onde a cura encontra a compaixão</h2>
    <h1>Nosso portal do paciente foi projetado pensando em você. No Hospital Zilda Arns, sua saúde é nossa prioridade. Estamos comprometidos em fornecer cuidados de saúde de alta qualidade em um ambiente seguro e acolhedor. Junte-se a nós na jornada para uma vida mais saudável.</h1>
    </div>
    
    
    </S.SectionTelaprincipal>
    
  );
}

export default Telaprincipal;