import React from "react";
import * as S from "../components/Style.jsx";
import Ph from "../assets/phone.png";
import Lg from "../assets/logo-footer.png";
export default function Footer(){

        return(
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
        )
}